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
        path: "/addVisa",
        element: <AddVisa />,
      },
      {
        path: "/allVisa",
        element: <AllVisa />,
      },
      {
        path: "/myVisa",
        element: <MyAddedVisa />,
      },
      {
        path: "/myApplication",
        element: <MyApplication />,
      },
      {
        path: "/visaDetails",
        element: <VisaDetails />,
      },
    ],
  },
]);
export const Router = () => {
  return <div>router</div>;
};
