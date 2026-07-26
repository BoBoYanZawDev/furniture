import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import ErrorPage from "@/pages/errors/Error";
import { createBrowserRouter, redirect } from "react-router";
import { lazyRoute } from "./helper";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import { confirmLoader, homeLoader, loginLoader, otpLoader } from "./loader";
import {
  confirmAction,
  loginAction,
  logoutAction,
  otpAction,
  registerAction,
} from "./action";
import AuthRootLayout from "@/layouts/AuthRootLayout";

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
    ErrorBoundary: ErrorPage,
    HydrateFallback: RouteLoadingFallback,
    ...lazyRoute(() => import("@/pages/auth/Login"), {
      action: loginAction,
      loader: loginLoader,
    }),
  },
  {
    path: "/logout",
    action: logoutAction,
    loader: () => redirect("/"),
  },
  {
    path: "/register",
    ErrorBoundary: ErrorPage,
    HydrateFallback: RouteLoadingFallback,
    Component: AuthRootLayout,
    children: [
      {
        index: true,
        ...lazyRoute(() => import("@/pages/auth/signup/SignUp"), {
          action: registerAction,
          loader: loginLoader,
        }),
      },
      {
        path: "otp",
        ...lazyRoute(() => import("@/pages/auth/signup/Otp"), {
          loader: otpLoader,
          action: otpAction,
        }),
      },
      {
        path: "confirm-password",
        ...lazyRoute(() => import("@/pages/auth/signup/ConfirmPassword"), {
          loader: confirmLoader,
          action: confirmAction,
        }),
      },
    ],
  },
]);

export default router;
