import GradientShape from "../GradientShape";

const LatestVisa = () => {
  return (
    <div>
      <div className="text-center center mt-24 space-y-4">
        <p className="uppercase text-gray-500">Latest Visas</p>
        <h1 className="text-4xl font-bold">
          Latest <span className="text-orange-400">Visa</span> Information{" "}
          <br /> at Your Fingertips
        </h1>
        <p className="lg:w-8/12 mx-auto text-gray-400">
          Get real-time updates on visa policies, requirements, and deadlines to
          keep your plans on track
        </p>
        <GradientShape />
      </div>
    </div>
  );
};

export default LatestVisa;
