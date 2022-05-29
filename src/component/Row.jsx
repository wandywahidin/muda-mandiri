import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Kegiatan from "./Kegiatan";

const Row = () => {
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">Kegiatan</h2>
      <div className="relative flex items-center group">
        <MdChevronRight
          onClick={slideRight}
          size={20}
          className="bg-white rounded-full absolute  right-0 opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
            <Kegiatan />
        </div>
        <MdChevronLeft
          onClick={slideLeft}
          size={20}
          className="bg-white rounded-full absolute left-0 opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
