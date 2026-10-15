import { useEffect, useRef } from "react";

const COLS = 128;
const ROWS = 72;
const N = COLS * ROWS;

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uImage;
uniform sampler2D uMap;
uniform vec2 uTexel;
void main() {
  float l = texture2D(uMap, vUv + vec2(-uTexel.x, 0.0)).r;
  float r = texture2D(uMap, vUv + vec2(uTexel.x, 0.0)).r;
  float u = texture2D(uMap, vUv + vec2(0.0, -uTexel.y)).r;
  float d = texture2D(uMap, vUv + vec2(0.0, uTexel.y)).r;
  vec2 off = vec2(r - l, d - u) * 1.85;
  vec2 uv = clamp(vUv + off, 0.001, 0.999);
  vec3 col = texture2D(uImage, uv).rgb;
  float crest = smoothstep(0.01, 0.07, length(off));
  col += crest * vec3(0.82, 0.9, 1.0) * 0.38;
  gl_FragColor = vec4(col, 1.0);
}`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

type Props = { src: string; enabled: boolean; overlay: number };

export function WaterHero({ src, enabled, overlay }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shade = Math.min(0.78, Math.max(0.2, overlay));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!enabled || reduce) {
      canvas.style.opacity = "0";
      return;
    }
    canvas.style.opacity = "1";

    const gl = canvas.getContext("webgl", { premultipliedAlpha: false, alpha: false });
    if (!gl) {
      canvas.style.opacity = "0";
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const imageTex = gl.createTexture();
    const mapTex = gl.createTexture();
    const uImage = gl.getUniformLocation(program, "uImage");
    const uMap = gl.getUniformLocation(program, "uMap");
    const uTexel = gl.getUniformLocation(program, "uTexel");
    gl.uniform1i(uImage, 0);
    gl.uniform1i(uMap, 1);
    gl.uniform2f(uTexel, 1 / COLS, 1 / ROWS);

    const buffers = [new Float32Array(N), new Float32Array(N), new Float32Array(N)];
    let iCurr = 0;
    let iPrev = 1;
    let iNext = 2;
    const bytes = new Uint8Array(N);

    function disturb(nx: number, ny: number, radius = 3.2, power = 0.9) {
      const field = buffers[iCurr];
      const cx = nx * (COLS - 1);
      const cy = ny * (ROWS - 1);
      const r = Math.ceil(radius);
      for (let y = -r; y <= r; y++) {
        for (let x = -r; x <= r; x++) {
          const px = Math.round(cx + x);
          const py = Math.round(cy + y);
          if (px <= 0 || py <= 0 || px >= COLS - 1 || py >= ROWS - 1) continue;
          const dist = Math.hypot(x, y);
          if (dist > radius) continue;
          field[py * COLS + px] += power * (1 - dist / radius);
        }
      }
    }

    let imageReady = false;
    const image = new Image();
    image.src = src;
    image.onload = () => {
      imageReady = true;
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, imageTex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    };

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, mapTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const w = Math.max(2, Math.floor(rect.width * dpr));
      const h = Math.max(2, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const pointer = (ev: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (ev.clientX - rect.left) / rect.width;
      const ny = (ev.clientY - rect.top) / rect.height;
      if (nx < 0 || ny < 0 || nx > 1 || ny > 1) return;
      disturb(nx, ny, ev.pointerType === "touch" ? 4.4 : 3.2, 1);
    };

    const simulate = () => {
      const c = buffers[iCurr];
      const p = buffers[iPrev];
      const nbuf = buffers[iNext];
      for (let y = 1; y < ROWS - 1; y++) {
        const row = y * COLS;
        for (let x = 1; x < COLS - 1; x++) {
          const i = row + x;
          nbuf[i] = ((c[i - 1] + c[i + 1] + c[i - COLS] + c[i + COLS]) * 0.5 - p[i]) * 0.984;
        }
      }
      const oldPrev = iPrev;
      iPrev = iCurr;
      iCurr = iNext;
      iNext = oldPrev;
    };

    const upload = () => {
      const c = buffers[iCurr];
      for (let i = 0; i < N; i++) {
        const v = c[i] < -1 ? -1 : c[i] > 1 ? 1 : c[i];
        bytes[i] = (v * 0.5 + 0.5) * 255;
      }
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, mapTex);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.LUMINANCE,
        COLS,
        ROWS,
        0,
        gl.LUMINANCE,
        gl.UNSIGNED_BYTE,
        bytes,
      );
    };

    let visible = true;
    let stopped = false;
    let lastDrop = performance.now();
    let raf = 0;

    const frame = (now: number) => {
      if (stopped) return;
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden || !imageReady) return;
      if (now - lastDrop > 2800) {
        lastDrop = now;
        disturb(0.2 + Math.random() * 0.6, 0.25 + Math.random() * 0.5, 2.6, 0.6);
      }
      simulate();
      upload();
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    observer.observe(canvas);
    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", pointer);
    canvas.addEventListener("pointerdown", pointer);
    raf = requestAnimationFrame(frame);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", pointer);
      canvas.removeEventListener("pointerdown", pointer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteTexture(imageTex);
      gl.deleteTexture(mapTex);
      gl.deleteBuffer(buffer);
    };
  }, [src, enabled]);

  return (
    <div className="absolute inset-0">
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full touch-none" />
      <div className="hero-shade absolute inset-0" style={{ ["--hero-shade" as string]: String(shade) }} />
    </div>
  );
}
