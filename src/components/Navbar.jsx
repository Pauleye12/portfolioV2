const Navbar = () => {
  return (
    <nav className="w-full hidden px-3 lg:flex justify-center items-center bg-primaryBG fixed top-0 left-0 z-50 ">
      <div className="max-w-[1200px] w-full px-2 py-6 bg-primaryBG border-b flex justify-between items-center gap-5 text-primaryText border-solid border-[#78797B] ">
        <h1 className="text-xl">Pauleye</h1>
        <ul className="flex gap-5 items-center justify-between max-w-[600px] font-medium w-full ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <button className="bg-secondaryBG px-5 py-2 text-white font-medium rounded-md ">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
