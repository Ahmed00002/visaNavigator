import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div className="hero4 bg-center bg-contain bg-no-repeat min-h-screen flex flex-col justify-center items-start px-4 md:px-8 lg:px-10  ">
      <div className="flex flex-col justify-center  gap-4 center  w-full h-screen">
        <div>
          <button className="px-4 text-white bg-colorPrimary py-2 border-transparent rounded-full">
            SINCE 1987 COMPANY
          </button>
        </div>
        <h1 className="text-6xl xl:text-7xl uppercase">
          Shocking Revelation <br />{" "}
          <span className="font-bold  text-colorPrimary ">
            <Typewriter
              words={["Visa Services", "Visa Consultant", "Online Application"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-lg text-gray-700">
          Your Trusted Partner for Hassle-Free Visa Assistance
        </p>
        <div className="space-x-4">
          <button className="btn btn-md 2xl:btn-lg theme-btnPrimary rounded-full hover:theme-btnPrimary hover:scale-105">
            Explore now
          </button>
          <button className="btn btn-md 2xl:btn-lg theme-btnSecondary rounded-full hover:theme-btnSecondary hover:scale-105">
            Contact now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
