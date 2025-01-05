// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import GradientShape from "../GradientShape";

const Countries = () => {
  const countries = [
    {
      name: "Bangladesh",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    },
    {
      name: "India",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      name: "United States",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    {
      name: "Canada",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    },
    {
      name: "Japan",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    },
    {
      name: "Germany",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    },
    {
      name: "France",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      name: "Australia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
    },
    {
      name: "Brazil",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    },
    {
      name: "United Kingdom",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    },
  ];
  return (
    <>
      <section className="center">
        {/* section title */}
        <div className="text-center center mt-24 ">
          <p className="uppercase text-gray-500 text-sm">
            Countries You can visit
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
            Countries we’re supporting <br /> for the{" "}
            <span className="text-orange-400">immigration</span>
          </h1>

          <GradientShape />
        </div>
      </section>
      <section className="flex justify-center ic gap-4 center mt-8 pb-24">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {countries.map((country, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex flex-col gap-4  justify-center items-center">
                  <img
                    className="rounded-full w-20 h-20 object-cover border"
                    src={country.flag}
                    alt={`flag of ${country.name}}`}
                  />
                  <h1 className="px-4 py-1 bg-gray-100 text-black rounded-lg">
                    {country.name}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Countries;
