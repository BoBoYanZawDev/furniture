import RootLayout from "@/layouts/RootLayout";
import Contact from "@/pages/Contact";
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
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
