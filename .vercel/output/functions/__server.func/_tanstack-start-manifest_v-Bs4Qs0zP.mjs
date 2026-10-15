//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-Bs4Qs0zP.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/blog",
			"/book",
			"/desk",
			"/hub",
			"/track",
			"/work/$slug"
		],
		preloads: [
			"/assets/index-Dm9kai_t.js",
			"/assets/look-C2Rtabrt.js",
			"/assets/preload-helper-DdGQFQoI.js",
			"/assets/searchMiddleware-sxGTIbkX.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-Dm9kai_t.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-CZkYttTU.js",
			"/assets/layout-F4BnqQJa.js",
			"/assets/desk-BTozj0I_.js"
		]
	},
	"/blog": {
		filePath: "/workspace/src/routes/blog.tsx",
		children: ["/blog/$slug"],
		preloads: ["/assets/blog-C5SkgD5S.js", "/assets/layout-F4BnqQJa.js"]
	},
	"/book": {
		filePath: "/workspace/src/routes/book.tsx",
		children: void 0,
		preloads: [
			"/assets/book-CWAbTsHi.js",
			"/assets/layout-F4BnqQJa.js",
			"/assets/desk-BTozj0I_.js"
		]
	},
	"/desk": {
		filePath: "/workspace/src/routes/desk.tsx",
		children: void 0,
		preloads: [
			"/assets/desk-CB7rqYNP.js",
			"/assets/layout-F4BnqQJa.js",
			"/assets/desk-BTozj0I_.js"
		]
	},
	"/hub": {
		filePath: "/workspace/src/routes/hub.tsx",
		children: ["/hub/$studio"],
		preloads: ["/assets/hub-CGWuG1M7.js", "/assets/layout-F4BnqQJa.js"]
	},
	"/track": {
		filePath: "/workspace/src/routes/track.tsx",
		children: void 0,
		preloads: [
			"/assets/track-C0OE396P.js",
			"/assets/layout-F4BnqQJa.js",
			"/assets/desk-BTozj0I_.js"
		]
	},
	"/blog/$slug": {
		filePath: "/workspace/src/routes/blog.$slug.tsx",
		children: void 0,
		preloads: ["/assets/blog._slug-CVSVbp7U.js"]
	},
	"/hub/$studio": {
		filePath: "/workspace/src/routes/hub.$studio.tsx",
		children: void 0,
		preloads: ["/assets/hub._studio-CJyXdvcO.js"]
	},
	"/work/$slug": {
		filePath: "/workspace/src/routes/work.$slug.tsx",
		children: void 0,
		preloads: ["/assets/work._slug-CoGoKW16.js", "/assets/layout-F4BnqQJa.js"]
	}
} });
//#endregion
export { tsrStartManifest };
