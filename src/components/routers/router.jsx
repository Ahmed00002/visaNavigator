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
import NotFound from "../Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
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
        loader: () => fetch("https://immigro.vercel.app/visas"),
      },
      {
        path: "/visas/:id",
        element: (
          <PrivateRouts>
            <VisaDetails />
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`https://immigro.vercel.app/visas/${params.id}`),
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
