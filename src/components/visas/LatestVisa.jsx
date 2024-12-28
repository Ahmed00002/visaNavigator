import { useEffect, useState } from "react";
import GradientShape from "../GradientShape";
import VisaCard from "./VisaCard";

const LatestVisa = () => {
  const [visaData, setVisaData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/visas")
      .then((res) => res.json())
      .then((visas) => setVisaData(visas));
  }, []);
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
      <section className="center mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {visaData.map((visa, idx) => (
          <VisaCard key={idx} visaData={visa}></VisaCard>
        ))}
        <a
          href="/all-visas"
          className="col-span-full text-center text-blue-500 font-semibold hover:underline mt-6"
        >
          See all visas
        </a>
      </section>
    </div>
  );
};

export default LatestVisa;
