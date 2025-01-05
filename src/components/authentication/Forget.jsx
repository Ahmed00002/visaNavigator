import Lottie from "lottie-react";
import animation from "../../assets/lotties/forgotpass.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/contexts";

const Forget = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  const { resetPass } = useContext(AuthContext);
  const handleReset = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    resetPass(email)
      .then((res) => {
        console.log(res);
        // navigate(location.state ? location.state : "/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <section className=" center md:min-h-screen my-12">
        {/* container */}
        <div className="grid md:grid-cols-2 justify-center items-center p-6 border rounded-xl shadow-md">
          {/* form container */}
          <div className="md:w-9/12 mx-auto">
            <h1 className="text-4xl font-bold text-colorPrimary text-center">
              Reset Password
            </h1>
            <p className="text-center mt-2 text-gray-400">
              Enter email to reset password!
            </p>
            {/* reset form */}
            <form onSubmit={handleReset}>
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

                {/* submit */}
                <div>
                  <input
                    className="theme-btnPrimary px-4  py-2 rounded-full hover:bg-blue-700 btn btn-block"
                    type="submit"
                    value="Reset Password"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm mt-4 text-center">
                  Back to login?{" "}
                  <Link to={"/auth/login"}>
                    <span className="font-bold text-colorPrimary cursor-pointer">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </form>
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

export default Forget;
