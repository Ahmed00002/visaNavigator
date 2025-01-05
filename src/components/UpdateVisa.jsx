import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./contexts/contexts";
import { RxCross2 } from "react-icons/rx";

export const UpdateVisa = ({ props }) => {
  const { myVisa, closeModal, updateVisa } = props;
  const {
    _id,
    countryName,
    countryImage,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = myVisa;
  const [checkboxData, setCheckboxData] = useState([]);
  const { user } = useContext(AuthContext);
  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      if (checkboxData.length === 0) {
        setCheckboxData([value]);
      } else {
        setCheckboxData([...checkboxData, value]);
      }
    } else {
      const remained = checkboxData.filter((val) => val !== value);
      setCheckboxData(remained);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = {
      countryName: form.get("countryName"),
      countryImage: form.get("countryImage"),
      processingTime: form.get("processingTime"),
      requiredDocuments: checkboxData,
      description: form.get("description"),
      ageRestriction: form.get("ageRestriction"),
      fee: form.get("fee"),
      validity: form.get("validity"),
      applicationMethod: form.get("applicationMethod"),
      email: user.email,
      authorName: user.displayName,
      visaType: form.get("visaType"),
    };
    updateVisa(_id, data);
  };
  return (
    <>
      <div className="bg-transparent backdrop-blur-sm  flex items-center justify-around py-10 fixed top-0 left-0 w-full h-full z-50 ">
        <div className="flex flex-col items-center justify-start h-full w-full ">
          {/* form container */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md overflow-scroll relative">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 text-center space-y-2">
                <h2 className="text-3xl font-bold text-gray-800">Update</h2>
                <p className="text-gray-400">Here is your visa information</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Country Name:
                </label>
                <input
                  type="text"
                  name="countryName"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={countryName}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Country Image URL:
                </label>
                <input
                  type="text"
                  name="countryImage"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={countryImage}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Processing Time:
                </label>
                <input
                  type="text"
                  name="processingTime"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={processingTime}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Required Documents:
                </label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="requiredDocuments"
                      value="Valid passport"
                      className="mr-2"
                      onChange={handleChange}
                    />
                    Valid passport
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="requiredDocuments"
                      value="Visa application form"
                      className="mr-2"
                      onChange={handleChange}
                    />
                    Visa application form
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="requiredDocuments"
                      value="Recent passport-sized photograph"
                      className="mr-2"
                      onChange={handleChange}
                    />
                    Recent passport-sized photograph
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description:
                </label>
                <textarea
                  name="description"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={description}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Age Restriction:
                </label>
                <input
                  type="number"
                  name="ageRestriction"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={ageRestriction}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Fee:
                </label>
                <input
                  type="number"
                  name="fee"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={fee}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Validity:
                </label>
                <input
                  type="text"
                  name="validity"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={validity}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Application Method:
                </label>
                <input
                  type="text"
                  name="applicationMethod"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={applicationMethod}
                />
              </div>
              {/* visa type */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Visa Type:
                </label>
                <select
                  name="visaType"
                  id="visaType"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                >
                  <option value="Student visa">Student visa</option>
                  <option value="Tourist visa">Tourist visa</option>
                  <option value="Work permit">Work permit</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-colorPrimary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Now
              </button>
            </form>
            {/* modal closing button */}
            <div
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 bg-gray-100 rounded-b-lg cursor-pointer hover:bg-gray-200"
            >
              <RxCross2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateVisa;
