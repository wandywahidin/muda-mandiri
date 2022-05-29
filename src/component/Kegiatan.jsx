import React from "react";
import k1 from "../assets/kegiatan/k1.JPG";
import k2 from "../assets/kegiatan/k2.JPG";
import k3 from "../assets/kegiatan/k3.JPG";

const Kegiatan = () => {
  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img className="w-full h-auto block" src={k1} alt="kegiatan 1" />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:duration-300 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            Santunan Anak Yatim Piatu
          </p>
        </div>
      </div>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img className="w-full h-auto block" src={k2} alt="kegiatan 2" />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:duration-300 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            Santunan Orang Tua
          </p>
        </div>
      </div>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img className="w-full h-auto block" src={k3} alt="kegiatan 3" />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:duration-300 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            Santunan Anak Yatim Piatu
          </p>
        </div>
      </div>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img className="w-full h-auto block" src={k1} alt="kegiatan 1" />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:duration-300 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            Santunan Anak Yatim Piatu
          </p>
        </div>
      </div>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img className="w-full h-auto block" src={k1} alt="kegiatan 1" />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:duration-300 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            Santunan Anak Yatim Piatu
          </p>
        </div>
      </div>
    </>
  );
};

export default Kegiatan;
