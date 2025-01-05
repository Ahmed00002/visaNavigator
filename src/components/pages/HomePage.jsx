import { useContext } from "react";
import Countries from "../countries/Countries";
import Features from "../Features";
import Hero from "../hero";
import Slider from "../slider/Slider";
import LatestVisa from "../visas/LatestVisa";
import { AuthContext } from "../contexts/contexts";

const HomePage = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className={`${darkMode && "bg-gray-900 text-white"}`}>
      <Hero></Hero>
      <Slider></Slider>
      <LatestVisa></LatestVisa>
      <Features></Features>
      <Countries></Countries>
    </div>
  );
};

export default HomePage;
