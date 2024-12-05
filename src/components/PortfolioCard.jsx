import PropTypes from "prop-types";

const PortfolioCard = ({ project }) => {
  return (
    <div className="flex justify-center shadow-md shadow-[#161719e2] bg-gray-900 rounded-lg items-center  max-w-[400px] w-full pb-5 text-gray-50   ">
      <div className="flex flex-col ">
        <div className=" w-full ">
          <img
            className="rounded-t-lg w-full object-fit"
            src={`./images/${project.img}.webp`}
            alt=""
          />
        </div>

        <div className="p-5 flex flex-col gap-1 px-4 ">
          <h1 className=" capitalize mb-2 text-secondaryText text-xl font-medium ">
            {project.title}
          </h1>
          <p> {project.subtext} </p>
          <p>
            Stacks:{" "}
            <span className="text-secondaryText font-medium capitalize">
              {project.stacks}
            </span>
          </p>
        </div>
        <a
          className=" bg-secondaryBG px-5 max-w-[120px] w-full py-3 rounded-md text-white text-center ml-4 font-medium  "
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out
        </a>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtext: PropTypes.string,
    stacks: PropTypes.array.isRequired,
    img: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PortfolioCard;
