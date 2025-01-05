import Lottie from "lottie-react";
import animation from "../../assets/lotties/signup.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import { FaGooglePlusG } from "react-icons/fa";

const Signup = () => {
  const [errorText, setErrorText] = useState(null);
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const navigate = useNavigate();
  const { signupWithEmailAndPass, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const pass = form.get("password");
    const photoUrl = form.get("photoUrl");
    const name = form.get("name");
    const isValidPassword = regex.test(pass);
    if (isValidPassword) {
      signupWithEmailAndPass(email, pass)
        .then((userData) => {
          navigate(location.state ? location.state : "/");

          updateUserProfile(name, photoUrl);
        })
        .catch((error) => setErrorText(error.message));
    } else {
      setErrorText(
        "Password must be at least 6 characters long, at least one uppercase letter and one lowercase latter"
      );
    }
  };

  // google login
  const handleGoogleSignup = () => {
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
        <div className="grid md:grid-cols-2 justify-center items-center p-6 border rounded-xl shadow-md">
          {/* form container */}
          <div className="md:w-9/12 mx-auto">
            <h1 className="text-4xl font-bold text-colorPrimary text-center">
              Sign Up
            </h1>
            <p className="text-center mt-2 text-gray-400">
              Create account to continue exploring
            </p>
            {/* login form */}
            <form onSubmit={handleSignup}>
              <div className="mt-8 space-y-4">
                {/* Name */}
                <div>
                  <label className="text-xs pl-1" htmlFor="name">
                    Name <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      className=" border-b border-b-gray-400 px-1 mt-1 pb-1 text-base outline-none w-full"
                      required
                    />
                  </label>
                </div>
                {/* Profile */}
                <div>
                  <label className="text-xs pl-1" htmlFor="Profile Url">
                    Profile Url <br />
                    <input
                      type="text"
                      name="photoUrl"
                      id="photoUrl"
                      placeholder="imgbb.com/photo"
                      className="border-b border-b-gray-400 px-1 mt-1 pb-1 text-base outline-none w-full"
                      required
                    />
                  </label>
                </div>
                {/* email */}
                <div>
                  <label className="text-xs pl-1" htmlFor="email">
                    Email <br />
                    <input
                      type="email"
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
                      onChange={() => setErrorText(null)}
                    />
                  </label>
                </div>
                <p className="text-xs text-red-600">{errorText}</p>

                {/* submit */}
                <div>
                  <input
                    className="theme-btnPrimary px-4 mt-4 hover:bg-blue-700 py-2 rounded-full btn btn-block"
                    type="submit"
                    value="Signup"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm mt-4 text-center">
                  Already have account?{" "}
                  <Link to={"/auth/login"}>
                    <span className="font-bold text-colorPrimary cursor-pointer">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </form>
            {/* google login */}
            <div
              onClick={handleGoogleSignup}
              className="flex gap-2 justify-center items-center mt-4 px-4 py-2 rounded-full border text-4xl text-colorPrimary btn"
            >
              <FaGooglePlusG />
              <h2 className="text-base">Signup with google</h2>
            </div>
          </div>
          {/* animation container */}
          <div className="hidden md:block">
            <Lottie className="h-[400px]" animationData={animation}></Lottie>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
