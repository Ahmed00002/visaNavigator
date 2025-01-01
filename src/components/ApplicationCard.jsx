const ApplicationCard = ({ props }) => {
  const { visa, handleCancel } = props;
  const {
    _id,
    countryName,
    countryImage,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
    appliedDate,
    firstName,
    lastName,
    email,
  } = visa;
  const name = firstName.concat(" ", lastName);
  return (
    <div className="card bg-base-100 shadow-md border p-4">
      <div className="flex items-center gap-4">
        {/* Country Image */}
        <img
          src={countryImage}
          alt={countryName}
          className="w-16 h-16 rounded-full object-cover"
        />
        {/* Country Name */}
        <h2 className="text-xl font-bold">{countryName}</h2>
      </div>
      {/* Visa Details */}
      <div className="mt-4 space-y-2">
        <p>
          <span className="font-semibold">Visa Type:</span> {visaType}
        </p>
        <p>
          <span className="font-semibold">Processing Time:</span>{" "}
          {processingTime}
        </p>
        <p>
          <span className="font-semibold">Fee:</span> ${fee}
        </p>
        <p>
          <span className="font-semibold">Validity:</span> {validity}
        </p>
        <p>
          <span className="font-semibold">Application Method:</span>{" "}
          {applicationMethod}
        </p>
        <p>
          <span className="font-semibold">Applied Date:</span> {appliedDate}
        </p>
        <p>
          <span className="font-semibold">Applicant's Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Applicant's Email:</span> {email}
        </p>
      </div>
      {/* Cancel Button */}
      <div className="mt-4">
        <button
          onClick={() => handleCancel(_id)}
          className="btn btn-error w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
