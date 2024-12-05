import { GalleryVertical } from "lucide-react";
import PortfolioCard from "./components/PortfolioCard";

const Projects = [
  {
    title: "Genesis DAO",
    subtext:
      "A Landing page for a web3 app that not only provides staking services but also lets you earn from your own crypto assets.",
    stacks: "ReactJS, SASS, framer motion",
    img: "GenesisDAO",
    url: "https://genesis-dao-blond.vercel.app/",
  },

  {
    title: "comment app",
    subtext:
      "A personal project I worked on. it allowes users to post, reply, delete and vote comments.",
    stacks: "ReactJS, TailwindCSS, framer-motion",
    img: "comment-app",
    url: "https://interactivecommentapp.netlify.app",
  },
  {
    title: "Moon launch",
    subtext:
      "Core launch is a web3 dapp that allows you to launch new tokens and trade them on the core network",
    stacks: "NextJS, Typescript, tailwindCSS, framer-motion, WAGMI, web3 modal",
    img: "corelaunch",
    url: "https://moon-launch.netlify.app/",
  },

  {
    title: "movieeye",
    subtext:
      "This is an entertainment app that displays movie and the details from TMDB api endpoints, features the search and bookmark feature.",
    stacks: " ReactJS, TailwindCSS, framer-motion ",
    img: "movieeye",
    url: "https://movieeye.netlify.app/home",
  },
  {
    title: "fluid Coin",
    subtext:
      "Recreated the fluidcoin website from scratch because i loved the UI and the animations and decided to try it out.",
    stacks: " ReactJS, TailwindCSS, framer-motion",
    img: "fluidCoin",
    url: "https://fluidcoinclone.netlify.app/",
  },

  {
    title: "analytic dashboard",
    subtext:
      "An Analytical dashboard that displays user informations and analysis",
    stacks: "ReactJS, TailwindCSS, framer-motion ",
    img: "analyticdashboard",
    url: "https://pauleye-analytic-dashboard.vercel.app/",
  },
  {
    title: "lendsqr",
    subtext:
      "The Project was an assessment test by lendsqr and the figma design was provided as well as a mock API.",
    stacks: "React, Typescript, CSS",
    img: "lendsqr",
    url: "https://lendsqrtest.netlify.app/",
  },

  {
    title: "beings NFT",
    subtext: "Beings NFT is a NFT collection from pallete labs",
    stacks: "NextJS, tailwindCSS, framer-motion",
    img: "beingsNFT",
    url: "https://beings-art.vercel.app/",
  },

  {
    title: "NFT_Mafia",
    subtext:
      "NFT mafia is a community of NFT enthusiast that provide value to their community members while the members bring value to the community in return.",
    stacks: "ReactJS, EtherJS, TailwindCSS, framer-motion, Mongoose",
    img: "NFT_Mafia",
    url: "https://nftmafia.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="w-full my-20 flex items-center h-full justify-center">
      <div className="w-full max-w-[1200px] text-black flex h-full flex-col justify-center gap-20 ">
        <div className="w-full flex items-center justify-between text-center text-4xl font-semibold ">
          <div>
            <GalleryVertical className="text-secondaryBG" size={40} />
          </div>
          <h1 className="relative text-white w-full text-center">
            Portfolio
            <div className="w-28 h-1 bg-secondaryBG rounded-xl absolute left-1/2 translate-x-[-50%] bottom-[-16px] "></div>{" "}
          </h1>
        </div>

        <div className="bg-gray-700 rounded-2xl w-full h-full flex items-start  gap-4">
          <div className=" p-10 w-1/2 ">
            <div className="sticky  top-5 pt-[144px] ">
              <p>Preview my most recent works</p>
              <p>View Demo for full functionality...</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-full p-5">
            <div className="flex flex-col gap-10 h-full items-center ">
              {Projects.map((project, index) => (
                <PortfolioCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
