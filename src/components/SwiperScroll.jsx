import { motion } from "framer-motion";

const scrollDown = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0,
      staggerChildren: 5,
    },
  },
};
const scrollDownContainer = {
  initial: {
    opacity: 1,
    bottom: "140%",
  },
  animate: {
    opacity: 1,

    bottom: "-120px",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
const scrollDownContainer2 = {
  initial: {
    opacity: 1,
    bottom: "-120px",
  },
  animate: {
    opacity: 1,
    bottom: "140%",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

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

const SwiperScroll = () => {
  return (
    <div className="flex w-full h-full p-4 gap-6  ">
      <motion.div
        initial="initial"
        animate="animate"
        variants={scrollDown}
        className=" w-full h-full overflow-hidden flex flex-col gap-8 items-center relative  "
      >
        {images.map((item, index) => {
          return (
            <motion.a
              variants={scrollDownContainer}
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex justify-center w-full items-center rounded-md absolute  `}
            >
              <img
                src={`/images/${item.img}.webp`}
                alt=""
                className="max-w-[400px] aspect-video w-full"
              />
            </motion.a>
          );
        })}
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={scrollDown}
        className=" w-full hidden lg:block h-full overflow-hidden relative "
      >
        {images.reverse().map((item, index) => {
          return (
            <motion.a
              variants={scrollDownContainer2}
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex justify-center w-full items-center rounded-md absolute `}
            >
              <img
                src={`/images/${item.img}.webp`}
                alt=""
                className="max-w-[450px] aspect-video w-full"
              />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SwiperScroll;
