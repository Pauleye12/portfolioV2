import { Mails, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

//Animation variant
const wrapper = {
  initial: { scale: 1 },
  inView: {
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const footerList = {
  initial: {
    scale: 0,
    opacity: 0,
    x: 60,
  },
  inView: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const Footer = () => {
  return (
    <div className="w-full flex bg-secondaryText justify-center items-center  py-3">
      <div className="max-w-[1200px] px-4 gap-9 py-14 w-full flex flex-col items-center text-white">
        <motion.div
          variants={wrapper}
          initial="initial"
          whileInView={"inView"}
          className="flex justify-between flex-col lg:flex-row w-full lg:items-center items-start lg:gap-4 gap-8"
        >
          <motion.h1
            variants={footerList}
            className="text-3xl flex flex-col gap-4 font-bold"
          >
            Pauleye
            <div className="flex flex-col self-start w-full ">
              <p className=" text-base font-medium ">Frontend Developer</p>
              <p className="text-xl">Your Vision, My Code.</p>
            </div>
          </motion.h1>

          <motion.div variants={footerList} className="flex gap-4">
            {" "}
            <p className="text-lg font-medium ">Connect with me :</p>{" "}
            <a
              target="blank"
              className="ml-2"
              href="mailto:orepaul12@gmail.com"
            >
              <Mails className="" size={26} />
            </a>
            <a
              target="blank"
              className="ml-2"
              href="https://github.com/Pauleye12"
            >
              <Github className="" size={26} />
            </a>
            <a
              target="blank"
              className="ml-2"
              href="https://www.linkedin.com/in/pauleye/"
            >
              <Linkedin className="  " size={26} />
            </a>
          </motion.div>
          <motion.p
            variants={footerList}
            className="w-full lg:w-fit text-center "
          >
            © Pauleye. All right reserved
          </motion.p>
        </motion.div>
        {/* <div className="flex flex-col self-start w-full ">
          <p className=" text-lg font-medium ">Frontend Developer</p>
          <p>Your Vision, My Code.</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
