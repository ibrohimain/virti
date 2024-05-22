import { useState, useEffect } from "react";
import { RxArrowTopRight } from "react-icons/rx";

const texts = [
  "Engineering peace of mind",
  "International Invention Day",
  "All innovations more than",
  "Export software development",
];

const imageSrcs = [
  "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FThe_State_of_AI_03-2.jpg&w=1920&q=75",
  "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FInvention-day_05.jpg&w=1600&q=75",
  "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2Fhero_image_HP_5.jpg&w=1600&q=75",
  "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FCustom_software_development_03-2.jpg&w=1600&q=75",
];

const Hero = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 w-[100%] border px-5 mx-auto">
      <div className="flex">
        <div
          className={`w-1/2 px-6 py-9  ${
            count % 2 === 0 ? "bg-blue-500" : "bg-[#ff6947]"
          }`}
        >
          <h1 className="text-6xl font-medium text-[#29292b]">
            {texts[count]}
          </h1>
        </div>
        <div className="w-1/2 flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex items-end justify-between cursor-pointer">
            {texts.map((_, index) => (
              <div
                key={index}
                className={`border-t-4 ${
                  index === 0
                    ? "border-[#ff6947]"
                    : index === 1
                    ? "border-blue-500"
                    : index === 2
                    ? "border-[#ff70ff]"
                    : "border-[#ff6947]"
                } opacity-40 hover:opacity-100 inline-block hover:pr-[25%] transition-all`}
                onClick={() => setCount(index)}
              >
                <h1 className="font-medium text-lg ">0{index + 1}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex pb-20">
        <div className="w-1/2 flex p-10">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex items-end justify-end flex-col">
            <p className="text-lg opacity-85">
              Vention developers partner with innovative companies from startups
              to Fortune 500s, lending the AI engineering expertise to propel
              them to new heights and the edge to outpace the competition.
            </p>
            <button className="w-full mt-16 flex items-center justify-center gap-2 px-7 py-5 text-left bg-red-500 hover:text-white transition hover:bg-[#ff6947] font-medium text-2xl">
              Get an estimate <RxArrowTopRight />
            </button>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <div
            className="transform transition-transform duration-700 flex"
            style={{ transform: `translateX(-${count * 100}%)` }}
          >
            {imageSrcs.map((src, index) => (
              <img
                key={index}
                className="w-full"
                src={src}
                alt={`img${index + 1}`}
              />
            ))}
          </div>
          <div className="w-96 absolute h-48 skew-x-[-40deg] bg-[white] bottom-0 right-[-85px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
