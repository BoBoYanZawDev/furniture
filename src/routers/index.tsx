import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import ErrorPage from "@/pages/errors/Error";
import { createBrowserRouter } from "react-router";
import { lazyRoute } from "./helper";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },

      {
        path: "about",
        ...lazyRoute(() => import("@/pages/About")),
      },

      {
        path: "blogs",
        ...lazyRoute(() => import("@/layouts/BlogLayout")),
        children: [
          {
            index: true,
            ...lazyRoute(() => import("@/pages/blogs/Blog")),
          },
          {
            path: ":postId",
            ...lazyRoute(() => import("@/pages/blogs/BlogDetail")),
          },
        ],
      },

      {
        path: "products",
        ...lazyRoute(() => import("@/layouts/ProductRootLayout")),
        children: [
          {
            index: true,
            ...lazyRoute(() => import("@/pages/products/Product")),
          },
          {
            path: ":productId",
            ...lazyRoute(() => import("@/pages/products/ProductDetail")),
          },
        ],
      },

      // { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/login",
    ...lazyRoute(() => import("@/pages/auth/Login")),
  },
  {
    path: "/register",
    ...lazyRoute(() => import("@/pages/auth/Register")),
  },
]);

export default router;
