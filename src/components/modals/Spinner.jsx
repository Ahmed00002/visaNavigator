import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full min-h-screen bg-transparent backdrop-blur-sm absolute top-0 left-0 z-50 flex justify-center items-center">
      <RotatingLines
        visible={true}
        height="86"
        width="86"
        strokeColor="#015cb5"
        color="color"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
