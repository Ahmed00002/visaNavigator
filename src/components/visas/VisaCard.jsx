const VisaCard = ({ visaData }) => {
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
  } = visaData;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={countryImage}
        alt={`${countryName} Image`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <div className="text-left">
          <h3 className="text-xl font-semibold">{countryName}</h3>
          <p className="text-sm text-gray-500">Visa Type: {"not found"}</p>
          <p className="mt-2">
            <strong>Processing Time:</strong> {processingTime}
          </p>
          <p>
            <strong>Fee:</strong> {fee}
          </p>
          <p>
            <strong>Validity:</strong> {validity}
          </p>
          <p>
            <strong>Application method:</strong> {applicationMethod}
          </p>
        </div>
        <button className="mt-4 inline-block text-white btn btn-sm bg-colorPrimary rounded-full theme-btnSecondary hover:theme-btnPrimary">
          See Details
        </button>
      </div>
    </div>
  );
};

export default VisaCard;
