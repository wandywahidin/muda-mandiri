import React from "react";
import { Lazy } from "react-lazy";

const Kegiatan = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            key={item.id}
          >
            <Lazy>
              <img
                className="w-full h-auto block"
                src={item.images}
                alt="kegiatan 1"
              />
            </Lazy>
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:duration-300 text-white">
              <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Kegiatan;
