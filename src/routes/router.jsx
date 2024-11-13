import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AboutLayout from "../layouts/AboutLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <AboutLayout />,
  },
  {
    path: "/auth",
    element: <h1>Auth</h1>,
  },
  {
    path: "*",
    element: <h1>Ah re error diche Home a ja</h1>,
  },
]);

export default router;
