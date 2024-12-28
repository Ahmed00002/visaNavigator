import Hero from "../hero";
import Slider from "../slider/Slider";
import LatestVisa from "../visas/LatestVisa";

const HomePage = () => {
  return (
    <div className="">
      <Hero></Hero>
      <Slider></Slider>
      <LatestVisa></LatestVisa>
    </div>
  );
};

export default HomePage;
