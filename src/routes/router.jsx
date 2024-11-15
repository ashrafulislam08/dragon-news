import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AboutLayout from "../layouts/AboutLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/about",
    element: <AboutLayout />,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <h1>
        Error 404{" "}
        <Link className="btn" to="/">
          Back to Home
        </Link>
      </h1>
    ),
  },
]);

export default router;
