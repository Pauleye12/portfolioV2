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

const NewPortfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center px-8 lg:px-0 my-20 gap-20"
    >
      <div className="w-full max-w-[1200px] flex items-center justify-between text-center text-4xl font-semibold ">
        <div>
          <GalleryVertical className="text-secondaryBG" size={40} />
        </div>
        <h1 className="relative text-white w-full text-center">
          Portfolio
          <div className="w-28 h-1 bg-secondaryBG rounded-xl absolute left-1/2 translate-x-[-50%] bottom-[-16px] "></div>{" "}
        </h1>
      </div>

      <div className="flex max-w-[1200px] rounded-2xl justify-center items-center w-full lg:px-10 px-5 py-4 bg-gray-300 ">
        <div className=" flex flex-col md:flex-row gap-4  w-full  ">
          {/* Left Sticky Section */}
          <div className="lg:w-1/2 w-full   p-5">
            <div className="sticky lg:h-screen flex flex-col justify-start lg:pt-44 items-center top-5">
              <h2 className=" text-4xl w-full text-left font-medium text-[#343433]">
                My Most Recent works.
              </h2>
              <p className="mt-2 text-[#343433] w-full text-left text-lg ">
                View Demo for full functionality...
              </p>
            </div>
          </div>

          {/* Right Scrollable Content */}
          <div className="lg:w-1/2 w-full h-full p-1 lg:p-5 pt-10 lg:pt-28  lg:pb-20 pb-8  bg-gray-300">
            <div className="flex flex-col w-full items-center gap-20 ">
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

export default NewPortfolio;
