// import Skillbar from "./components/Skillbar";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skillList = [
  {
    name: "HTML",
    image: "./images/html.png",
    width: "90",
  },
  {
    name: "CSS",
    image: "./images/css.png",
    width: "77",
  },
  {
    name: "Javascript",
    image: "./images/javascript.png",
    width: "66",
  },
  {
    name: "Typescript",
    image: "./images/github.png",
    width: "60",
  },
  {
    name: "React",
    image: "./images/react.png",
    width: "78",
  },
  {
    name: "NextJS",
    image: "./images/github.png",
    width: "69",
  },
  {
    name: "WAGMI",
    image: "./images/github.png",
    width: "60",
  },
  {
    name: "Web3Modal",
    image: "./images/github.png",
    width: "60",
  },

  {
    name: "Tailwind",
    image: "./images/tailwind.png",
    width: "80",
  },
  {
    name: "SCSS",
    image: "./images/github.png",
    width: "70",
  },
  {
    name: "Bootstrap",
    image: "./images/bootstrap.png",
    width: "80",
  },
  {
    name: "Framer-Motion",
    image: "./images/github.png",
    width: "60",
  },
  {
    name: "GSAP",
    image: "./images/github.png",
    width: "60",
  },
  {
    name: "NodeJS",
    image: "./images/github.png",
    width: "50",
  },
  {
    name: "NextAuth",
    image: "./images/github.png",
    width: "40",
  },
  {
    name: "MongoDB",
    image: "./images/github.png",
    width: "50",
  },

  {
    name: "Git",
    image: "./images/git.png",
    width: "77",
  },
];

const scrollLeft = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const Skills = () => {
  return (
    <div className="w-full pb-20  mt-32 text-primaryText flex items-center flex-col justify-center gap-20 overflow-hidden ">
      <div className="max-w-[1200px] w-full flex gap-24 flex-col items-center ">
        <div className="w-full flex items-center text-center justify-between ">
          <div>
            <Cpu className="text-secondaryBG" size={40} />
          </div>
          <h1 className="w-full text-center text-white text-4xl font-semibold relative ">
            Skills{" "}
            <div className="w-20 h-1 bg-secondaryBG rounded-xl absolute left-1/2 translate-x-[-50%] bottom-[-9px] "></div>{" "}
          </h1>
        </div>

        {/* <div className="w-full max-w-[900px] grid-cols-2 justify-center items-center place-items-center grid gap-7 gap-x-10 ">
          {skillList.map((skill, index) => (
            <Skillbar key={index} name={skill.name} width={skill.width} />
          ))}
        </div> */}
      </div>
      <motion.div
        variants={scrollLeft}
        initial="initial"
        animate="animate"
        className=" w-full relative"
      >
        <div className=" bg-auxilaryBG flex gap-5  items-center p-4 w-full ">
          {skillList.map((skill, index) => (
            <img
              className="w-16 object-contain  "
              key={index}
              src={`./images/${skill.name}.webp`}
            />
          ))}
        </div>
        <div className="flex bg-auxilaryBG gap-5 absolute left-[100%] top-0 w-full  items-center p-4 ">
          {skillList.map((skill, index) => (
            <img
              className="w-16 object-contain  "
              key={index}
              src={`./images/${skill.name}.webp`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
