"use client";
import { motion } from "framer-motion";
const images = [
  {
    img: "comment-app",
    url: "https://interactivecommentapp.netlify.app",
  },
  {
    img: "fluidCoin",
    url: "https://fluidcoinclone.netlify.app/",
  },

  {
    img: "beingsNFT",
    url: "https://beings-art.vercel.app/",
  },

  {
    img: "corelaunch",
    url: "https://moon-launch.netlify.app/",
  },
  {
    img: "analyticdashboard",
    url: "https://pauleye-analytic-dashboard.vercel.app/",
  },
  {
    img: "GenesisDAO",
    url: "https://genesis-dao-blond.vercel.app/",
  },
  {
    img: "lendsqr",
    url: "https://lendsqrtest.netlify.app/",
  },
  {
    img: "movieeye",
    url: "https://movieeye.netlify.app/home",
  },
  {
    img: "NFT_Mafia",
    url: "https://nftmafia.netlify.app/",
  },
];
const scrollVertical = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100%",
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
const MobileScroll = () => {
  return (
    <div className="flex h-full  w-full  gap-6 overflow-hidden ">
      <motion.div
        variants={scrollVertical}
        initial="initial"
        animate="animate"
        className=" w-full h-full  relative"
      >
        <div className=" flex flex-col gap-10  items-center w-full ">
          {images.map((skill, index) => (
            <img
              className="max-w-[400px] aspect-video w-full"
              key={index}
              src={`./images/${skill.img}.webp`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-10 absolute left-[0px] bottom-[-10px] w-full  items-center p-4 ">
          {images.reverse().map((skill, index) => (
            <img
              className="max-w-[400px] aspect-video w-full"
              key={index}
              src={`./images/${skill.img}.webp`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MobileScroll;
