import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import ErrorPage from "@/pages/errors/Error";
import { createBrowserRouter } from "react-router";
import { lazyRoute } from "./helper";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import { homeLoader } from "./loader";
import { loginAction, logoutAction } from "./action";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    HydrateFallback: RouteLoadingFallback,
    children: [
      { index: true, Component: HomePage, loader: homeLoader },
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
    HydrateFallback: RouteLoadingFallback,
    ...lazyRoute(() => import("@/pages/auth/Login"), { action: loginAction }),
  },
  {
    path : "/logout",
    action : logoutAction,
  },
  {
    path: "/register",
    HydrateFallback: RouteLoadingFallback,
    ...lazyRoute(() => import("@/pages/auth/Register")),
  },
]);

export default router;
