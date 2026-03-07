import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import ErrorPage from "@/pages/errors/Error";
import { createBrowserRouter } from "react-router";
import BlogPage from "@/pages/blogs/Blog";
import NotFound from "@/pages/errors/NotFound";
import AboutPage from "@/pages/About";
import BlogDetailPage from "@/pages/blogs/BlogDetail";
import BlogLayout from "@/layouts/BlogLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      {
        path: "blogs",
        Component: BlogLayout,
        children: [
          { index: true, Component: BlogPage },
          { path: ":postId", Component: BlogDetailPage },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
