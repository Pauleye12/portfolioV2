import { motion } from "framer-motion";

//Animation Variants
const left = {
  initial: {
    x: -300,
    opacity: 0,
  },
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const right = {
  initial: {
    x: 300,
    opacity: 0,
  },
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const About = () => {
  return (
    <div
      id="about"
      className="w-full flex justify-center items-center px-5 lg:px-0 py-6 pt-40    "
    >
      <div className="max-w-[1200px] px-4 w-full flex flex-col items-center text-primaryText gap-10 lg:gap-4  ">
        <h1 className="w-full text-center text-4xl font-semibold relative text-white ">
          Meet me{" "}
          <div className="w-20 h-1 bg-secondaryBG rounded-xl absolute left-1/2 translate-x-[-50%] bottom-[-9px] "></div>{" "}
        </h1>
        <div className="w-full flex flex-col lg:flex-row items-center gap-5 overflow-hidden">
          <motion.div
            variants={left}
            initial="initial"
            whileInView={"inView"}
            className="lg:w-1/2 w-full   "
          >
            <div className="max-w-[500px] w-full flex flex-col gap-3 text-lg text-justify ">
              <p>
                I am a self-motivated and resilient Front-End Web Developer with
                years of experience, collaborating on multiple web-based
                projects.
              </p>{" "}
              <p>
                My passion lies in developing customized interfaces with
                optimized accessibility, reachability, and security. I am
                dilligent and adept at meeting multiple, concurrent deadlines. A
                Technology Savvy developer with excellent teamwork skills and
                experience working in cross-functional teams.
              </p>{" "}
              <p>
                {" "}
                Seeking a Front-End Developer role to pursue my passion for
                software development and contribute to building efficient and
                useful User Interfaces.
              </p>{" "}
              <p>
                I am committed to helping emerging brands grow through
                innovative and well-crafted web experiences.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={right}
            initial="initial"
            whileInView={"inView"}
            className="lg:w-1/2 w-full aboutScrolling  "
          >
            <img className="w-full" src="./images/official1.webp" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
