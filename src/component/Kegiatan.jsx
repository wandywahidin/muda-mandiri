import React from "react";

const Kegiatan = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            key={item.id}
          >
            <img
              className="w-full object-cover md:h-[180px] h-[100px] block"
              src={item.images}
              alt="kegiatan 1"
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:duration-300 text-white">
              <p className="text-xs md:text-sm font-bold flex justify-center items-center h-full text-center break-all">
                {item.title.toUpperCase()}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Kegiatan;
