self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/404": [
    "static/chunks/pages/404.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/about": [
    "static/chunks/pages/about.js"
  ],
  "/contact": [
    "static/chunks/pages/contact.js"
  ],
  "/movies": [
    "static/chunks/pages/movies.js"
  ],
  "/movies/[id]": [
    "static/chunks/pages/movies/[id].js"
  ],
  "/movies/[id]/edit": [
    "static/chunks/pages/movies/[id]/edit.js"
  ],
  "/movies/new": [
    "static/chunks/pages/movies/new.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/404",
    "/_app",
    "/_error",
    "/about",
    "/api/movies",
    "/api/movies/[id]",
    "/api/seed",
    "/contact",
    "/movies",
    "/movies/new",
    "/movies/[id]",
    "/movies/[id]/edit"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()