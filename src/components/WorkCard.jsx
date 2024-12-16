import PropTypes from "prop-types";
import { Dot } from "lucide-react";
import { motion } from "framer-motion";

//Animation Variants
const workCard = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  onHover: {
    scale: 1.03,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const WorkCard = ({ title, company, duration, description, image }) => {
  return (
    <motion.div
      variants={workCard}
      whileHover={{
        scale: 1.03,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className=" shadow-md  shadow-[#6e5cb536] text-primaryText rounded-3xl  flex flex-col gap-2 px-5 p-4  hover:shadow-lg hover:shadow-[#6e5cb536] cursor-pointer "
    >
      <div className="border-b border-solid border-primaryText flex justify-center items-center h-[250px]">
        <img className="object-cover" src={image} alt="" />
      </div>

      <div className="flex flex-col gap-2 mt-2 ">
        <h1 className="text-secondaryText text-2xl font-medium ">{company}</h1>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-lg font-medium">{title}</p>
          <p className="text-xs ">{duration}</p>
        </div>
      </div>

      <div className="flex flex-col mt-3 gap-2">
        {description.map((item, index) => (
          <div
            className="flex w-full justify-start items-center gap-2"
            key={index}
          >
            <div>
              <Dot size={30} className="text-secondaryBG " />
            </div>

            <p className=" " key={index}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default WorkCard;
