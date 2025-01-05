import { useContext } from "react";
import { AuthContext } from "../contexts/contexts";
import { CiCalendarDate } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const VisaApply = ({ data }) => {
  const { fee, handleApply, handleApplyModal } = data;
  const date = new Date();
  const { user } = useContext(AuthContext);

  const fireApply = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const currentDate = date.toLocaleDateString();
    const email = user.email;

    handleApply(email, firstName, lastName, currentDate, fee);
  };

  return (
    <>
      <section className="fixed z-50 top-0 left-0 min-h-screen bg-transparent backdrop-blur-sm w-full flex  justify-center items-center overflow-hidden">
        {/* form container */}
        <div className=" bg-white w-11/12 md:w-7/12 lg:w-4/12 shadow-md border p-6 relative overflow-hidden">
          <h1 className="text-center">Apply Now</h1>
          {/* date and fee */}
          <div className="flex justify-between gap-2 border p-2 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <CiCalendarDate />
              <h1 className="text-xs">{date.toLocaleDateString()}</h1>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MdAttachMoney />
              <h1 className="text-xs">{fee}</h1>
            </div>
          </div>
          {/* user details */}
          <form onSubmit={fireApply}>
            <div className="mt-4 space-y-4">
              {/* email */}
              <div>
                <label className="text-xs pl-1" htmlFor="email">
                  email <br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    disabled
                    value={user.email}
                    placeholder="exaple@gmail.com"
                    className="border-b border-b-gray-400 px-1 mt-1 pb-1 text-base outline-none w-full"
                    required
                  />
                </label>
              </div>
              {/* first Name */}
              <div>
                <label className="text-xs pl-1" htmlFor="email">
                  First Name <br />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    className="border-b border-b-gray-400 px-1 mt-1 pb-1 text-base outline-none w-full"
                    required
                  />
                </label>
              </div>
              {/* last Name */}
              <div>
                <label className="text-xs pl-1" htmlFor="email">
                  Last Name <br />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="John"
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
                  value="Apply Now"
                />
              </div>
            </div>
          </form>
          {/* modal close button */}
          <div
            onClick={handleApplyModal}
            className="p-4 rounded-full bg-blue-100 text-colorPrimary cursor-pointer hover:bg-red-50 transition-all duration-400 absolute -top-2 -right-2 -z-0"
          >
            <RxCross2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default VisaApply;
