import { Mails, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full flex bg-secondaryText justify-center items-center  py-6">
      <div className="max-w-[1200px] px-4 gap-9 py-20 w-full flex flex-col items-center text-white">
        <div className="flex justify-between w-full items-center gap-4">
          <h1 className="text-3xl font-bold">Pauleye</h1>

          <div className="flex gap-4">
            {" "}
            <p className="text-lg font-medium ">Connect with me :</p>{" "}
            <a
              target="blank"
              className="ml-2"
              href="mailto:orepaul12@gmail.com"
            >
              <Mails className="" size={26} />
            </a>
            <a
              target="blank"
              className="ml-2"
              href="https://github.com/Pauleye12"
            >
              <Github className="" size={26} />
            </a>
            <a
              target="blank"
              className="ml-2"
              href="https://www.linkedin.com/in/pauleye/"
            >
              <Linkedin className="  " size={26} />
            </a>
          </div>
          <p>© Pauleye. All right reserved</p>
        </div>
        <div className="flex flex-col self-start w-full ">
          <p className=" text-lg font-medium ">Frontend Developer</p>
          <p>Your Vision, My Code.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
