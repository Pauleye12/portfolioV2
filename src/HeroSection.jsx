import SwiperScroll from "./components/SwiperScroll";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen h-full flex justify-center  px-5 pt-[90px] bg-primaryBG ">
      <div className="max-w-[1200px] h-full w-full p-5 pb-0 pt-0 flex gap-10 items-center  ">
        <div className=" flex flex-col w-[60%] h-full justify-center items-center gap-10 translate-y-[0px]  ">
          <div className="flex flex-col items-start justify-center text-primaryText font-medium text-lg ">
            <p>Hi, I am</p>
            <h1 className="text-6xl text-secondaryText font-semibold">
              Pauleye
            </h1>
            <h2 className="text-2xl mt-3">Frontend web developer</h2>
            <p className="mt-5">
              Vast Experience in Crafting Fast, Responsive, and User-Friendly
              Interfaces.
            </p>
            <p className="mt-2">
              Bridging Design and Functionality with Seamless Frontend
              Development.
            </p>
          </div>
          <button className=" text-white px-6 py-3 rounded-lg bg-secondaryBG font-medium text-lg self-end ">
            Resume
          </button>
        </div>
        <div className=" w-full h-[90vh] flex justify-center items-center heroScrolling ">
          <SwiperScroll />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
