import { IoLogoWechat } from "react-icons/io5";
import GradientShape from "./GradientShape";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: [<IoLogoWechat />],
      title: "THE EGET MATTIS",
      description: "Direct  Interviews",
    },
    {
      icon: [<GiTakeMyMoney />],
      title: "THE EGET MATTIS",
      description: "Cost Effective",
    },
    {
      icon: [<VscWorkspaceTrusted />],
      title: "THE EGET MATTIS",
      description: "Trusted Customers",
    },
    {
      icon: [<FaHeadset />],
      title: "THE EGET MATTIS",
      description: "Support Team",
    },
  ];

  return (
    <section className="center">
      {/* section title */}
      <div className="text-center center mt-24 textarea-sm">
        <p className="uppercase text-gray-500">Countries You can visit</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
          Few reasons to choose <br /> Our visa{" "}
          <span className="text-orange-400">Company</span>
        </h1>

        <GradientShape />
      </div>

      {/* card container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 my-8">
        {/* card 1 */}
        <div className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow border relative overflow-hidden">
          <div className="bg-blue-100 p-8 rounded-full mb-4 absolute -top-5 -right-3 text-4xl text-colorPrimary">
            <IoLogoWechat />
          </div>
          <h4 className="text-gray-400 text-sm uppercase">We offer</h4>
          <p className="text-gray-800 font-medium text-2xl leading-6 mt-2">
            Direct <br /> Interviews
          </p>
        </div>
        {/* card 2 */}
        <div className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow border relative overflow-hidden">
          <div className="bg-blue-100 p-8 rounded-full mb-4 absolute -top-5 -right-3 text-4xl text-colorPrimary">
            <GiTakeMyMoney />
          </div>
          <h4 className="text-gray-400 text-sm uppercase">We offer</h4>
          <p className="text-gray-800 font-medium text-2xl leading-6 mt-2">
            Cost <br /> Effective
          </p>
        </div>
        {/* card 3 */}
        <div className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow border relative overflow-hidden">
          <div className="bg-blue-100 p-8 rounded-full mb-4 absolute -top-5 -right-3 text-4xl text-colorPrimary">
            <VscWorkspaceTrusted />
          </div>
          <h4 className="text-gray-400 text-sm uppercase">We offer</h4>
          <p className="text-gray-800 font-medium text-2xl leading-6 mt-2">
            Trusted <br /> Customer
          </p>
        </div>
        {/* card 4 */}
        <div className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow border relative overflow-hidden">
          <div className="bg-blue-100 p-8 rounded-full mb-4 absolute -top-5 -right-3 text-4xl text-colorPrimary">
            <FaHeadset />
          </div>
          <h4 className="text-gray-400 text-sm uppercase">We offer</h4>
          <p className="text-gray-800 font-medium text-2xl leading-6 mt-2">
            Direct <br /> Interviews
          </p>
        </div>
      </div>
      {/* info section */}
      <div className="flex justify-between items-center max-w-4xl mx-auto bg-orange-500 rounded-full p-1">
        <h1 className="w-full text-center text-white uppercase">
          Top rated by customers & immigration firms with 100% success rate
        </h1>
        <button className="py-2 w-[200px] rounded-full bg-white text-black border-none">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Features;
