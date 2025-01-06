import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/contexts";
import { useContext } from "react";

const VisaCard = ({ visaData }) => {
  const { darkMode } = useContext(AuthContext);
  const {
    _id,
    countryName,
    countryImage,
    processingTime,
    fee,
    validity,
    applicationMethod,
    visaType,
  } = visaData;
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden  flex flex-col ${
        darkMode && "bg-gray-900 text-white"
      }`}
    >
      <div
        className={`text-center grow text-black w-full ${
          darkMode && "bg-gray-800 text-white"
        }`}
      >
        <img
          src={countryImage}
          alt={`${countryName} Image`}
          className="w-full h-48 object-cover"
        />
        <div className="text-left  px-4 pt-3">
          <h3 className="text-xl font-semibold">{countryName}</h3>
          <p className="text-sm text-gray-500">Visa Type: {visaType}</p>
          <p className="mt-2">
            <strong>Processing Time:</strong> {processingTime}
          </p>
          <p>
            <strong>Fee:</strong> ${fee}
          </p>
          <p>
            <strong>Validity:</strong> {validity}
          </p>
          <p>
            <strong>Application method:</strong> {applicationMethod}
          </p>
        </div>
      </div>
      <div
        className={`bg-gray-100 text-center pb-4 rounded-b-lg ${
          darkMode ? "bg-gray-700 text-white" : "m-[1px]"
        }`}
      >
        <Link state={`/visas/${_id}`} to={`/visas/${_id}`}>
          <button
            className={`mt-4 inline-block text-white btn btn-sm bg-colorPrimary rounded-full  ${
              darkMode
                ? "border-white bg-transparent hover:text-black"
                : "theme-btnSecondary hover:theme-btnPrimary"
            }`}
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VisaCard;
