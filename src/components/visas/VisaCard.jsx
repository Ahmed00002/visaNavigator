const VisaCard = ({
  country,
  countryImage,
  visaType,
  processingTime,
  fee,
  validity,
  applicationMethod,
  onDetailsClick,
}) => {
  return (
    <div className="visa-card shadow-lg rounded-lg p-4 bg-white">
      <img
        src={countryImage}
        alt={`${country}`}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{country}</h3>
      <p className="text-sm mb-1">
        <strong>Visa Type:</strong> {visaType}
      </p>
      <p className="text-sm mb-1">
        <strong>Processing Time:</strong> {processingTime}
      </p>
      <p className="text-sm mb-1">
        <strong>Fee:</strong> ${fee}
      </p>
      <p className="text-sm mb-1">
        <strong>Validity:</strong> {validity}
      </p>
      <p className="text-sm mb-1">
        <strong>Application Method:</strong> {applicationMethod}
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onDetailsClick}
      >
        See Details
      </button>
    </div>
  );
};

export default VisaCard;
