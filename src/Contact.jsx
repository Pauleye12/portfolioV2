import { ContactRound, Mails, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full my-20 px-8 lg:px-0 flex items-center  justify-center"
    >
      <div className="w-full max-w-[1200px] text-white items-center flex flex-col justify-center gap-20 ">
        <div className="w-full flex items-center justify-between text-center text-4xl font-semibold ">
          <div>
            <ContactRound className="text-secondaryBG" size={40} />
          </div>
          <h1 className="relative w-full text-center">
            Contact Me
            <div className="w-28 h-1 bg-secondaryBG rounded-xl absolute left-1/2 translate-x-[-50%] bottom-[-16px] "></div>{" "}
          </h1>
        </div>
        <div className="max-w-[900px]  flex  flex-col gap-16 w-full">
          <div className="flex flex-col w-fit gap-14  ">
            <a
              target="blank"
              href="mailto:orepaul12@gmail.com"
              className="flex gap-4 items-center "
            >
              <Mails className="text-secondaryBG" size={40} />{" "}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl">Send Me A Mail</h3>
                <p className="text-primaryText">OrePaul12@gmail.com</p>
              </div>
            </a>
            <a
              target="blank"
              href="https://github.com/Pauleye12"
              className="flex gap-4 items-center "
            >
              <Github className="text-secondaryBG" size={40} />{" "}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl">Github</h3>
                <p className="text-primaryText">Pauleye12</p>
              </div>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/pauleye/"
              className="flex gap-4 items-center "
            >
              <Linkedin className="text-secondaryBG  " size={40} />{" "}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl">LinkedIn</h3>
                <p className="text-primaryText">Pauleye</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
