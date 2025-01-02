import { motion } from "framer-motion";

// const scrollDown = {
//   initial: {
//     opacity: 1,
//     y: 0,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0,
//       staggerChildren: 5,
//     },
//   },
// };
const scrollDownContainer = {
  initial: {
    y: 0,
  },
  animate(dir) {
    return {
      y: dir === -1 ? "100%" : "-100%",
      transition: {
        duration: 120,
        ease: "linear",
        repeat: Infinity,
      },
    };
  },
};
// const scrollDownContainer2 = {
//   initial: {
//     opacity: 1,
//     bottom: "-120px",
//   },
//   animate: {
//     opacity: 1,
//     bottom: "140%",
//     transition: {
//       duration: 20,
//       ease: "linear",
//       repeat: Infinity,
//     },
//   },
// };

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
    <div className="flex w-full h-full overflow-hidden p-4 gap-6  relative">
      <div className="flex flex-col gap-4 w-full relative">
        <motion.div
          initial="initial"
          animate="animate"
          variants={scrollDownContainer}
          className="flex flex-col gap-4 pb-4 w-full relative"
        >
          <div className=" w-full flex flex-col gap-4 items-center relative  ">
            {images.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex justify-center w-full items-center rounded-md  `}
                >
                  <img
                    src={`/images/${item.img}.webp`}
                    alt=""
                    className="max-w-[400px] aspect-video w-full block"
                  />
                </a>
              );
            })}
          </div>
          <div className=" w-full flex flex-col gap-4 items-center absolute top-full left-0 ">
            {images.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex justify-center w-full items-center rounded-md  `}
                >
                  <img
                    src={`/images/${item.img}.webp`}
                    alt=""
                    className="max-w-[400px] aspect-video w-full"
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="lg:flex flex-col gap-4 w-full hidden relative">
        <motion.div
          custom={-1}
          initial="initial"
          animate="animate"
          variants={scrollDownContainer}
          className="flex flex-col gap-4 pt-4 w-full relative"
        >
          <div className=" w-full flex flex-col gap-4 items-center relative  ">
            {images.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex justify-center w-full items-center rounded-md  `}
                >
                  <img
                    src={`/images/${item.img}.webp`}
                    alt=""
                    className="max-w-[400px] aspect-video w-full block"
                  />
                </a>
              );
            })}
          </div>
          <div className=" w-full flex flex-col gap-4 items-center absolute bottom-full left-0 ">
            {images.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex justify-center w-full items-center rounded-md  `}
                >
                  <img
                    src={`/images/${item.img}.webp`}
                    alt=""
                    className="max-w-[400px] aspect-video w-full"
                  />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="bg-[linear-gradient(to_bottom,#161719,transparent,#161719)] absolute inset-0 pointer-events-none "></div>
    </div>
  );
};

export default SwiperScroll;
