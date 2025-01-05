import Lottie from "lottie-react";
import animation from "../../assets/lotties/Animation - 1735543911558.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/contexts";
import { FaGooglePlusG } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signinWithEmailAndPass, googleLogin } = useContext(AuthContext);

  // email pass login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const pass = form.get("password");
    console.log({ email, pass });
    signinWithEmailAndPass(email, pass)
      .then((s) => {
        navigate(location.state ? location.state : "/");
        toast.error("Something went wrong. Try again");
      })
      .catch((e) => {
        toast.error("Something went wrong. Try again");
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((user) => {
        navigate(location.state ? location.state : "/");
        toast.success("Logged in successful");
      })
      .catch((e) => toast.error("Something went wrong. Try again"));
  };
  return (
    <>
      <section className=" center md:min-h-screen my-12">
        {/* container */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-6 border rounded-xl shadow-md">
          {/* form container */}
          <div className="md:w-9/12 mx-auto order-2">
            <h1 className="text-4xl font-bold text-colorPrimary text-center">
              Login
            </h1>
            <p className="text-center mt-2 text-gray-400">
              Welcome, enter credentials fro login
            </p>
            {/* login form */}
            <form onSubmit={handleLogin}>
              <div className="mt-8 space-y-4">
                {/* email */}
                <div>
                  <label className="text-xs pl-1" htmlFor="email">
                    email <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="exaple@gmail.com"
                      className="border-b border-b-gray-400 px-1 mt-1 pb-1 text-base outline-none w-full"
                      required
                    />
                  </label>
                </div>
                {/* password */}
                <div>
                  <label className="text-xs pl-1" htmlFor="email">
                    Password <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="******"
                      className="border-b border-b-gray-400 px-1 mt-1 pb-1 text-base outline-none w-full"
                      required
                    />
                  </label>
                </div>
                <div>
                  <Link to={"/auth/forget"}>
                    <p className="text-xs text-colorPrimary cursor-pointer hover:underline">
                      forgot password?
                    </p>
                  </Link>
                </div>
                {/* submit */}
                <div>
                  <input
                    className="theme-btnPrimary px-4  py-2 rounded-full hover:bg-blue-700 btn btn-block"
                    type="submit"
                    value="Login"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm mt-4 text-center">
                  New at Immigro?{" "}
                  <Link to={"/auth/signup"}>
                    <span className="font-bold text-colorPrimary cursor-pointer">
                      Signup
                    </span>
                  </Link>
                </p>
              </div>
            </form>
            {/* google login */}
            <div
              onClick={handleGoogleLogin}
              className="flex gap-2 justify-center items-center mt-4 px-4 py-2 rounded-full border text-4xl text-colorPrimary btn"
            >
              <FaGooglePlusG />
              <h2 className="text-base">Signin with google</h2>
            </div>
          </div>
          {/* animation container */}
          <div className="order-1 hidden md:block">
            <Lottie className="h-[400px]" animationData={animation}></Lottie>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
