// import MobileScroll from "./components/MobileScroll";
import SwiperScroll from "./components/SwiperScroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const text = "Pauleye";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, text.length * 250);

    return () => clearInterval(interval);
  }, [text.length]);

  //Animation Variant
  const heroAnime = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };

  const resumeBtn = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: 1,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    inView: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        delay: 2.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="home"
      className="w-full min-h-screen h-full flex justify-center  px-5 pt-[90px] bg-primaryBG "
    >
      <div className="max-w-[1200px] h-full w-full flex-col lg:flex-row p-5 pb-0 pt-0 flex gap-10 items-center  ">
        <div className=" flex flex-col w-full lg:w-[60%] h-full justify-center items-center gap-10 translate-y-[0px]  ">
          <motion.div
            variants={heroAnime}
            initial="initial"
            animate="animate"
            className="flex flex-col items-start justify-center text-primaryText font-medium text-lg "
          >
            <p>Hi, I am</p>
            <div
              className="flex text-6xl 
            text-secondaryText font-semibold "
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <h2 className="text-2xl mt-3">Frontend web developer</h2>
            <p className="mt-5">
              Vast Experience in Crafting Fast, Responsive, and User-Friendly
              Interfaces.
            </p>
            <p className="mt-2">
              Bridging Design and Functionality with Seamless Frontend
              Development.
            </p>
          </motion.div>
          <motion.button
            variants={resumeBtn}
            initial="initial"
            animate="animate"
            whileHover={"hover"}
            whileInView={"inView"}
            className=" text-white px-6 py-3 rounded-lg bg-secondaryBG font-medium hover:scale-150 text-lg self-end  "
          >
            Resume
          </motion.button>
        </div>
        <div className=" w-full h-[60vh] lg:h-[90vh] flex justify-center items-center heroScrolling ">
          <SwiperScroll />
          {/* <MobileScroll /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
