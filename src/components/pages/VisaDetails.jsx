import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaApply from "../modals/VisaApply";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const visaData = useLoaderData();
  const {
    countryName,
    countryImage,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    authorName,
    visaType,
  } = visaData;

  const handleApply = (email, firstName, lastName, date, fee) => {
    const userData = {
      countryName,
      countryImage,
      processingTime,
      visaType,
      validity,
      applicationMethod,
      email: email,
      firstName: firstName,
      lastName: lastName,
      date: date,
      fee: fee,
    };

    fetch("http://localhost:5000/users/application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((success) => {
        setShowApplyModal(!showApplyModal);

        //show a message if submitted successfully
        if (success.insertedId) {
          Swal.fire({
            title: "Good JOb",
            text: "We received your application and will get you soon. \n Thank you..!",
            icon: "success",
          });
        }
        console.log(success);
      });
  };

  const handleApplyModal = (email, firstName, lastName, date, fee) => {
    setShowApplyModal(!showApplyModal);
  };
  return (
    <div className="my-12 center">
      <section className=" bg-gray-50 p-6 rounded-xl">
        <div className="flex flex-col md:flex-row gap-4 pb-3 border-b">
          <img className="w-[300px] h-[200px]" src={countryImage} alt="" />
          <div className="flex flex-col justify-between items-start">
            <div>
              <h1 className="text-2xl font-medium text-gray-500">Visa For</h1>
              <h1 className="font-bold text-4xl mt-1 mb-2">{countryName}</h1>
              <p className="text-orange-500">
                By:{" "}
                <span className="cursor-pointer">
                  {authorName ? authorName : "Undefined"}
                </span>
              </p>
              <h1 className="text-green-500">
                Visa Fee: <span className="text-lg font-bold  ">${fee}</span>
              </h1>
            </div>
            <button
              onClick={handleApplyModal}
              className="btn btn-md bg-green-500 text-white hover:bg-green-600 mt-4"
            >
              Apply Now
            </button>
          </div>
        </div>
        {/* visa des */}
        <div className="space-y-2 bg-green-50 p-2 mt-4 rounded-lg">
          <h1 className="text-xl font-medium">Description</h1>
          <p className="text-gray-500">{description}</p>
        </div>
        {/* documents */}
        <div className="space-y-2 bg-red-50 p-2 mt-4 rounded-lg">
          <h1 className="text-xl font-medium">
            Required Documents <span className="text-red-500">*</span>
          </h1>
          {requiredDocuments.map((doc, idx) => (
            <p key={idx} className="text-gray-500">
              {idx + 1} {doc}
            </p>
          ))}
        </div>
        {/* visa information */}
        <div className="mt-4">
          <h1 className="text-xl font-medium px-2">More Info</h1>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Visa Type</td>
                  <td>{visaType ? visaType : "Unknown"}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Processing Time</td>
                  <td>{processingTime}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Validity</td>
                  <td>{validity}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Age Restriction</td>
                  <td>{ageRestriction}</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>Application method</td>
                  <td>{applicationMethod}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {showApplyModal && (
        <VisaApply
          data={{ setShowApplyModal, fee, handleApply, handleApplyModal }}
        />
      )}
    </div>
  );
};

export default VisaDetails;
