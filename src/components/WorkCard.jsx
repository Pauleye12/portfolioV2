import PropTypes from "prop-types";
import { Dot } from "lucide-react";

const WorkCard = ({ title, company, duration, description, image }) => {
  return (
    <div className=" shadow-md  shadow-[#6e5cb536] text-primaryText rounded-3xl  flex flex-col gap-2 px-5 p-4 hover:scale-110 hover:shadow-lg hover:shadow-[#6e5cb536] cursor-pointer transition-all duration-500 ">
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
    </div>
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
