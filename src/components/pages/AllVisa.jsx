import { useLoaderData } from "react-router-dom";
import GradientShape from "../GradientShape";
import { useEffect, useState } from "react";
import VisaCard from "../visas/VisaCard";

const AllVisa = () => {
  const allVisas = useLoaderData();
  console.log(allVisas);
  const [visaData, setVisaData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/visas")
      .then((res) => res.json())
      .then((visas) => setVisaData(visas));
  }, []);
  console.log(visaData);
  return (
    <>
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
          {visaData.map((visa, idx) => (
            <VisaCard key={idx} visaData={visa}></VisaCard>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllVisa;
