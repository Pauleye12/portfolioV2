import { motion } from "framer-motion";
import { useState } from "react";

//Animation Variants
const logoLeft = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const resumeBtn = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  onHover: {
    scale: 1.07,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};
const navLinks = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.25,
    },
  },
};
const navLink = {
  initial: {
    opacity: 0,

    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};
const linkUnderline = {
  initial: {
    scale: 1,
    width: 3,
    opacity: 1,
  },
  onHover: {
    scale: 1,
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};
const Navbar = () => {
  const [hoverItem, setHoverItem] = useState(0);
  return (
    <nav className="w-full hidden px-3 lg:flex justify-center items-center bg-primaryBG fixed top-0 left-0 z-50 ">
      <div className="max-w-[1200px] w-full px-2 py-6 bg-primaryBG border-b flex justify-between items-center gap-5 text-primaryText border-solid border-[#78797B] ">
        <motion.h1
          variants={logoLeft}
          initial="initial"
          animate="animate"
          className="text-2xl font-semibold text-secondaryText "
        >
          Pauleye
        </motion.h1>
        <motion.ul
          variants={navLinks}
          initial="initial"
          animate="animate"
          className="flex gap-5 items-center justify-between max-w-[600px] font-medium w-full "
        >
          <motion.li
            variants={navLink}
            className="relative"
            onMouseEnter={() => setHoverItem(1)}
            onMouseLeave={() => setHoverItem(0)}
          >
            <a href="">Home</a>
            <motion.div
              variants={linkUnderline}
              initial="initial"
              animate={hoverItem == 1 ? "onHover" : "initial"}
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondaryBG"
            ></motion.div>
          </motion.li>
          <motion.li
            onMouseEnter={() => setHoverItem(2)}
            onMouseLeave={() => setHoverItem(0)}
            className="relative"
            variants={navLink}
          >
            <motion.div
              variants={linkUnderline}
              initial="initial"
              animate={hoverItem == 2 ? "onHover" : "initial"}
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondaryBG"
            ></motion.div>{" "}
            <a href="">About</a>
          </motion.li>
          <motion.li
            onMouseEnter={() => setHoverItem(3)}
            onMouseLeave={() => setHoverItem(0)}
            className="relative"
            variants={navLink}
          >
            <motion.div
              variants={linkUnderline}
              initial="initial"
              animate={hoverItem == 3 ? "onHover" : "initial"}
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondaryBG"
            ></motion.div>{" "}
            <a href="">Skills</a>
          </motion.li>
          <motion.li
            onMouseEnter={() => setHoverItem(4)}
            onMouseLeave={() => setHoverItem(0)}
            className="relative"
            variants={navLink}
          >
            <motion.div
              variants={linkUnderline}
              initial="initial"
              animate={hoverItem == 4 ? "onHover" : "initial"}
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondaryBG"
            ></motion.div>{" "}
            <a href="">Experience</a>
          </motion.li>
          <motion.li
            onMouseEnter={() => setHoverItem(5)}
            onMouseLeave={() => setHoverItem(0)}
            className="relative"
            variants={navLink}
          >
            <motion.div
              variants={linkUnderline}
              initial="initial"
              animate={hoverItem == 5 ? "onHover" : "initial"}
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondaryBG"
            ></motion.div>{" "}
            <a href="">Portfolio</a>
          </motion.li>
          <motion.li
            onMouseEnter={() => setHoverItem(6)}
            onMouseLeave={() => setHoverItem(0)}
            className="relative"
            variants={navLink}
          >
            <motion.div
              variants={linkUnderline}
              initial="initial"
              animate={hoverItem == 6 ? "onHover" : "initial"}
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-secondaryBG"
            ></motion.div>{" "}
            <a href="">Contact</a>
          </motion.li>
        </motion.ul>

        <motion.button
          variants={resumeBtn}
          initial="initial"
          animate="animate"
          whileHover={"onHover"}
          className="bg-secondaryBG px-5 py-2 text-white font-medium rounded-md"
          onClick={() =>
            window.open("/assets/Pauleye_Resume_2025.pdf", "_blank")
          }
        >
          Resume
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
