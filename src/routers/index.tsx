import RootLayout from "@/layouts/RootLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Error from "@/pages/errors/Error";
import NotFound from "@/pages/errors/NotFound";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Error,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
