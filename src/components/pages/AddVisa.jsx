import { useState } from "react";
import { data } from "react-router-dom";
import Swal from "sweetalert2";

export const AddVisa = () => {
  // const [visaData, setVisaData] = useState({
  // countryName: "",
  // countryImage: "",
  // processingTime: "",
  // requiredDocuments: [],
  // description: "",
  // ageRestriction: "",
  // fee: "",
  // validity: "",
  // applicationMethod: "",
  // });
  const [checkboxData, setCheckboxData] = useState([]);
  function handleChange(e) {
    const { type, value, name, checked } = e.target;
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
    };
    console.log(data.requiredDocuments);

    fetch("http://localhost:5000/visas/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Visa Added",
            text: "Your visa has been successfully added.",
          });
        }
        console.log(success);
      });

    // Reset form after submission
    // setVisaData({
    //   countryName: "",
    //   countryImage: "",
    //   processingTime: "",
    //   requiredDocuments: [],
    //   description: "",
    //   ageRestriction: "",
    //   fee: "",
    //   validity: "",
    //   applicationMethod: "",
    // });
  };
  return (
    <>
      <div className="bg-gray-100  flex items-center justify-around py-10">
        <div className="flex flex-col items-center justify-start h-full w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
          >
            <div className="mb-6 text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">Add Visa</h2>
              <p className="text-gray-400">
                Fill this form carefully to add your visa
              </p>
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
              />
            </div>
            <button
              type="submit"
              className="w-full bg-colorPrimary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Visa
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
