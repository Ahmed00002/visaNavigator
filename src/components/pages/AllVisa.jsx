import { useLoaderData } from "react-router-dom";
import GradientShape from "../GradientShape";
import { useEffect, useState } from "react";
import VisaCard from "../visas/VisaCard";
import Spinner from "../modals/spinner";

const AllVisa = () => {
  const [loading, setLoading] = useState(true);
  const allVisas = useLoaderData();
  const [visaData, setVisaData] = useState([]);
  useEffect(() => {
    if (allVisas.length !== 0) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading && <Spinner />}
      <div className="center mt-12 min-h-screen ">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Seamless Visa Solutions, <br />
          Tailored for You
        </h1>
        <p className="text-center mt-3 mb-5 text-gray-400">
          Step into Your Next Destination with Ease and Assurance. Here is some
          visa for you. <br />
          Choose your favorite country visa
        </p>
        <GradientShape />
        <section className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
          {allVisas.map((visa, idx) => (
            <VisaCard key={idx} visaData={visa}></VisaCard>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllVisa;
