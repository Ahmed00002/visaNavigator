import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
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
  } = visaData;
  return (
    <div className="mt-12 center">
      <section className=" bg-gray-50 p-6 rounded-xl">
        <div className="flex flex-col md:flex-row gap-4 pb-3 border-b">
          <img className="w-[300px] h-[200px]" src={countryImage} alt="" />
          <div className="flex flex-col justify-between items-start">
            <div>
              <h1 className="text-2xl font-medium text-gray-500">Visa For</h1>
              <h1 className="font-bold text-4xl mt-1 mb-2">{countryName}</h1>
              <p className="text-orange-500">
                By: <span className="cursor-pointer">Ahmed Numan</span>
              </p>
              <h1 className="text-green-500">
                Visa Fee: <span className="text-lg font-bold  ">${fee}</span>
              </h1>
            </div>
            <button className="btn btn-md bg-green-500 text-white hover:bg-green-600 mt-4">
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
            Required Document <span className="text-red-500">*</span>
          </h1>
          {requiredDocuments.map((doc, idx) => (
            <p className="text-gray-500">
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
                  <td>Unknown</td>
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
    </div>
  );
};

export default VisaDetails;
