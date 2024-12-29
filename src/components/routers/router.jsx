import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import { AddVisa } from "../pages/AddVisa";
import AllVisa from "../pages/AllVisa";
import MyAddedVisa from "../pages/MyAddedVisa";
import MyApplication from "../pages/MyApplication";
import VisaDetails from "../pages/VisaDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/visas/add",
        element: <AddVisa />,
      },
      {
        path: "/visas",
        element: <AllVisa />,
        loader: () => fetch("http://localhost:5000/visas"),
      },
      {
        path: "/visas/:id",
        element: <VisaDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visas/${params.id}`),
      },
      {
        path: "/user/visas",
        element: <MyAddedVisa />,
      },
      {
        path: "/user/applications",
        element: <MyApplication />,
      },
    ],
  },
]);
export const Router = () => {
  return <div>router</div>;
};
