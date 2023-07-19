import Image from "next/image";
const Left = () => {
  return (
    <div className="relative bg-[#2C73EB] flex justify-center items-center h-screen">
      <span className="absolute top-[65px] left-[90px] text-white text-[30px] font-bold leading-normal">
        mygram
      </span>
      <div className="w-full md:w-[500px] h-[500px] relative">
        <Image
          src="/header.png"
          alt="header image"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Left;
