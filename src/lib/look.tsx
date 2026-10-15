import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const SWATCHES = [
  { name: "Logo blue", hex: "#002fff" },
  { name: "Sea", hex: "#0369a1" },
  { name: "Sky", hex: "#0284c7" },
  { name: "Teal", hex: "#0f766e" },
  { name: "Green", hex: "#15803d" },
  { name: "Gold", hex: "#a16207" },
  { name: "Rust", hex: "#c2410c" },
  { name: "Rose", hex: "#be123c" },
  { name: "Violet", hex: "#6d28d9" },
  { name: "Ink", hex: "#1e283c" },
  { name: "Amber", hex: "#b45309" },
  { name: "Stone", hex: "#44403c" },
] as const;

export const PATTERNS = ["none", "dots", "grid", "diagonal", "waves", "linen"] as const;

export type Pattern = (typeof PATTERNS)[number];
export type Mode = "light" | "dark" | "auto";
export type Layout = "full" | "boxed";

export type Look = {
  color: string;
  mode: Mode;
  layout: Layout;
  pattern: Pattern;
  overlay: number;
  water: boolean;
};

const DEFAULTS: Look = {
  color: "#002fff",
  mode: "light",
  layout: "full",
  pattern: "none",
  overlay: 0.48,
  water: true,
};

const KEY = "profjero-look";

type LookContextValue = {
  look: Look;
  setLook: (patch: Partial<Look>) => void;
  reset: () => void;
  scheme: "light" | "dark";
};

const LookContext = createContext<LookContextValue | null>(null);

function onBrand(hex: string) {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return "#ffffff";
  const r = parseInt(raw.slice(0, 2), 16);
  const g = parseInt(raw.slice(2, 4), 16);
  const b = parseInt(raw.slice(4, 6), 16);
  const y = (r * 299 + g * 587 + b * 114) / 1000;
  return y > 160 ? "#141821" : "#ffffff";
}

export function LookProvider({ children }: { children: ReactNode }) {
  const [look, setLookState] = useState<Look>(DEFAULTS);
  const [systemDark, setSystemDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<Look>;
        setLookState({ ...DEFAULTS, ...parsed });
      }
    } catch {
      /* ignore broken storage */
    }
    setReady(true);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => setSystemDark(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(look));
  }, [look, ready]);

  const scheme = look.mode === "auto" ? (systemDark ? "dark" : "light") : look.mode;

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.scheme = scheme;
    root.dataset.layout = look.layout;
    root.dataset.pattern = look.pattern;
    root.style.setProperty("--color-brand", look.color);
    root.style.setProperty("--color-on-brand", onBrand(look.color));
  }, [look, scheme]);

  const value = useMemo<LookContextValue>(
    () => ({
      look,
      scheme,
      setLook: (patch) => setLookState((prev) => ({ ...prev, ...patch })),
      reset: () => setLookState(DEFAULTS),
    }),
    [look, scheme],
  );

  return <LookContext.Provider value={value}>{children}</LookContext.Provider>;
}

export function useLook() {
  const ctx = useContext(LookContext);
  if (!ctx) throw new Error("useLook outside provider");
  return ctx;
}
