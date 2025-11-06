self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/auth/login": [
    "static/chunks/pages/auth/login.js"
  ],
  "/movies": [
    "static/chunks/pages/movies.js"
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
    "/api/auth/register",
    "/api/auth/[...nextauth]",
    "/api/movies",
    "/api/movies/[id]",
    "/api/seed",
    "/auth/login",
    "/auth/register",
    "/auth/signin",
    "/contact",
    "/dashboard",
    "/movies",
    "/movies/new",
    "/movies/[id]",
    "/movies/[id]/edit",
    "/profile"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()