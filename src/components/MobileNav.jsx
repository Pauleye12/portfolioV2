import {
  Grip,
  HousePlus,
  UserCheck,
  Cpu,
  Briefcase,
  GalleryVertical,
  ContactRound,
  Grid2x2X,
} from "lucide-react";
import { useState } from "react";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="lg:hidden glass-card z-50 fixed  bottom-0 left-0 w-full flex items-center justify-center   ">
      <div className="relative w-full h-full ">
        <div className="flex w-full justify-between py-4 px-5 items-center gap-2 text-gray-100 ">
          <h1 className="text-center font-bold text-xl">Pauleye</h1>
          {showMenu ? (
            <Grid2x2X
              onClick={() => setShowMenu((prev) => !prev)}
              className="w-10"
            />
          ) : (
            <Grip
              onClick={() => setShowMenu((prev) => !prev)}
              className="w-10"
            />
          )}
        </div>
        <div
          className={`absolute left-0 w-full bottom-[60px]  rounded-t-xl py-7 px-5 flex justify-center items-center transition-all duration-500 bg-primaryBG border border-solid border-secondaryBG ${
            showMenu ? "translate-y-0" : "translate-y-[400px]"
          }  `}
        >
          <div className="grid grid-cols-3 w-full  font-medium gap-5 gap-y-10  ">
            <a
              className="flex flex-col items-center gap-1 text-gray-100 "
              href="#home"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {" "}
              <HousePlus className="text-secondaryBG w-7 h-full " /> Home{" "}
            </a>
            <a
              className="flex flex-col items-center gap-1 text-gray-100 "
              href="#about"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <UserCheck className="text-secondaryBG w-7 h-full " /> About{" "}
            </a>
            <a
              className="flex flex-col items-center gap-1 text-gray-100 "
              href="#skills"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {" "}
              <Cpu className="text-secondaryBG w-7 h-full " /> Skills{" "}
            </a>
            <a
              className="flex flex-col items-center gap-1 text-gray-100 "
              href="#experience"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {" "}
              <Briefcase className="text-secondaryBG w-7 h-full " /> Experience{" "}
            </a>
            <a
              className="flex flex-col items-center gap-1 text-gray-100 "
              href="#portfolio"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <GalleryVertical className="text-secondaryBG w-7 h-full " />
              Portfolio
            </a>
            <a
              className="flex flex-col items-center gap-1 text-gray-100 "
              href="#contact"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {" "}
              <ContactRound className="text-secondaryBG w-9 " /> Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
