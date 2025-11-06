self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/404": [
    "static/chunks/pages/404.js"
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
    "/api/auth/[...nextauth]",
    "/api/movies",
    "/api/movies/[id]",
    "/api/seed",
    "/auth/profile",
    "/contact",
    "/dashboard",
    "/movies",
    "/movies/new",
    "/movies/[id]",
    "/movies/[id]/edit"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()