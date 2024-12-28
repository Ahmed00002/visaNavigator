import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../components/pages/HomePage";
import AllVisa from "../components/pages/AllVisa";
import MyAddedVisa from "../components/pages/MyAddedVisa";
import MyApplication from "../components/pages/MyApplication";
import VisaDetails from "../components/pages/VisaDetails";
import AddVisa from "../components/pages/AddVisa";

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
