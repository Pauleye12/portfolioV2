import WorkCard from "./components/WorkCard";
import { Briefcase } from "lucide-react";

const workExperience = [
  {
    id: 1,
    title: "Technical Assistant",
    company: "AIdotHub",
    duration: "2024 - Present",
    description: [
      "Assisting in building UI components using NextJS and TailwindCSS.",
      "Writing Python code for AI applications.",
      "organizing and labelling data sources.",
      "Reviewing workflows related to AI development.",
      "Drafting articles and other technical content.",
    ],
    image: "./images/aidothub.webp",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Palette Labs (Beings Art)",
    duration: "2022 - 2023",
    description: [
      "Developed and maintained web applications using React, Next, and other front-end technologies.",
      "Collaborated with cross-functional teams to design and implement user interfaces.",
      "Optimized application performance and ensured cross-browser compatibility.",
    ],
    image: "./images/PaletteLabs2.webp",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "NFT Mafia",
    duration: "2021 - 2023",
    description: [
      "Developed and maintained the website using React, TailwindCSS, and other front-end technologies.   ",
      "ensured broswer optimization",
    ],
    image: "./images/NFTMafia.webp",
  },
  // {
  // id: 4,
  //title: " Lead Frontend Developer",
  //company: "RCCG (DTCE)",
  //duration: "2022 - Present",
  //description: [
  //"Built and developed several web applications required for productivity and performance using technoligies like React, Typscript,Axios, TailwindCSS, and other front-end technologies.",
  //"Collaborated with cross-functional teams to design and implement user interfaces.",
  //],
  //image: "./images/DTCE.webp",
  //},
];

const Work = () => {
  return (
    <div
      id="experience"
      className="w-full my-20 px-8 lg:px-0 flex items-center justify-center"
    >
      <div className="w-full max-w-[1200px] text-white flex flex-col justify-center gap-20 ">
        <div className="w-full flex items-center justify-between text-center text-4xl font-semibold ">
          <div>
            <Briefcase className="text-secondaryBG" size={40} />
          </div>
          <h1 className="relative w-full text-center">
            Work Experience
            <div className="w-28 h-1 bg-secondaryBG rounded-xl absolute left-1/2 translate-x-[-50%] bottom-[-16px] "></div>{" "}
          </h1>
        </div>
        <div className="w-full grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-7">
          {workExperience.map((item) => (
            <WorkCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
