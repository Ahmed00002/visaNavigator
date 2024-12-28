import { GiSelfLove } from "react-icons/gi";
import { MdModeOfTravel } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

const SliderCard = ({ props }) => {
  const { slider, idx } = props;
  const { title, subtitle, image } = slider;
  const icons = [<MdModeOfTravel />, <GiSelfLove />, <TiWorld />];
  return (
    <div className={` h-full relative`}>
      <img className="w-full object-fill rounded-lg" src={image} alt="" />

      <div className="bg-gradient-to-t from-[#000000bc] to-[#0000004b] absolute top-0 left-0 flex items-center justify-center text-center flex-col gap-2 h-full w-full text-white rounded-xl">
        <div className="text-7xl text-pink-500 p-4 bg-white rounded-full">
          {icons[idx]}
        </div>
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="w-6/12 mx-auto"> {subtitle} </p>
      </div>
    </div>
  );
};

export default SliderCard;
