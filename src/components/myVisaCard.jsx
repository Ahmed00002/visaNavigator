import Swal from "sweetalert2";

const VisaCard = ({ props }) => {
  const { visa, onDelete, onUpdate } = props;
  const {
    _id,
    countryName,
    countryImage,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={countryImage}
        alt={`${countryName} Image`}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Country: <span className="text-blue-600">{countryName}</span>
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Visa Type:</strong> {visaType}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Processing Time:</strong> {processingTime}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Fee:</strong> ${fee}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Validity:</strong> {validity}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Application Method:</strong> {applicationMethod}
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={onUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(_id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
