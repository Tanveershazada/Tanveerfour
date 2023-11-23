import Image from "next/image";
import ProfileImg from "../public/images/logo.webp";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 wrapper">
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImage"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Tanveer Shah</h1>
        <h3 className="text-1xl md:text-2xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">Frontend Developer</h3>
        <p className="text-base tracking-wide text-center md:text-left">
          I am Tanveer Shah, a dedicated frontend developer. With expertise in
          HTML, CSS, and JavaScript, I merge creativity with technical skills to
          deliver captivating and user-friendly web experiences.
        </p>
      </div>
    </div>
  );
};

export default Banner;
