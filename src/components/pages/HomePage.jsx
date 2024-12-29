import Countries from "../countries/Countries";
import Features from "../Features";
import Hero from "../hero";
import Slider from "../slider/Slider";
import LatestVisa from "../visas/LatestVisa";

const HomePage = () => {
  return (
    <div className="">
      <Hero></Hero>
      <Slider></Slider>
      <LatestVisa></LatestVisa>
      <Features></Features>
      <Countries></Countries>
    </div>
  );
};

export default HomePage;
