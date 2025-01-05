import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import { AddVisa } from "../pages/AddVisa";
import AllVisa from "../pages/AllVisa";
import MyAddedVisa from "../pages/MyAddedVisa";
import MyApplication from "../pages/MyApplication";
import VisaDetails from "../pages/VisaDetails";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import PrivateRouts from "../Private/PrivateRouts";
import Forget from "../authentication/Forget";

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
        path: "/visa/add",
        element: (
          <PrivateRouts>
            <AddVisa />
          </PrivateRouts>
        ),
      },
      {
        path: "/visas",
        element: <AllVisa />,
        loader: () => fetch("http://localhost:5000/visas"),
      },
      {
        path: "/visas/:id",
        element: (
          <PrivateRouts>
            <VisaDetails />
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visas/${params.id}`),
      },
      {
        path: "/user/visas",
        element: (
          <PrivateRouts>
            <MyAddedVisa />
          </PrivateRouts>
        ),
      },
      {
        path: "/user/applications",
        element: (
          <PrivateRouts>
            <MyApplication />
          </PrivateRouts>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/forget",
        element: <Forget />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
]);
export const Router = () => {
  return <div>router</div>;
};
