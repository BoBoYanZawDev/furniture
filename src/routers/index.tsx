import RootLayout from "@/layouts/RootLayout";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Error from "@/pages/errors/Error";
import NotFound from "@/pages/errors/NotFound";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement : <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

export default router;
