// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import GradientShape from "../GradientShape";
import { AuthContext } from "../contexts/contexts";
import "../../index.css";

// import "./styles.css";

const Slider = () => {
  const { darkMode } = useContext(AuthContext);
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("sliderData.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);
  return (
    <>
      <div className={`center mt-24 ${darkMode && "bg-gray-900 text-white"}`}>
        <div className="center text-center space-y-4 mb-8">
          <p></p>
          <h1 className="text-4xl font-bold">Explore, Apply, Achieve</h1>
          <p className="lg:w-9/12 mx-auto text-gray-400">
            From exploring visa options to achieving your travel dreams, we’re
            here to make the process hassle-free. Trust us to handle the
            paperwork while you focus on what truly matters.
          </p>
          <GradientShape />
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          className="  h-[400px]"
        >
          {sliders.map((slider, idx) => (
            <SwiperSlide key={idx}>
              <SliderCard props={{ slider, idx }}></SliderCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
