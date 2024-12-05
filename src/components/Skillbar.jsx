const Skillbar = ({ name, width }) => {
  return (
    <div className=" flex gap-3 bg-auxilaryBG rounded-xl w-full items-center px-5 py-4 ">
      <div>
        <img
          className="w-10 aspect-square "
          src={`./images/${name}.webp`}
          alt={`${name}-logo`}
        />
      </div>
      <div className="flex flex-col w-full gap-3 justify-between ">
        <p>{name}</p>
        <div className="w-[80%]  bg-primaryText rounded-xl  h-2 ">
          <div
            className="h-full rounded-xl bg-secondaryText "
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;
