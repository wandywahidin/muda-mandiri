import React from "react";
import bg from "../assets/bg.jpg";
import gbSantunan from '../assets/kegiatan/k1.JPG'
import gbSantunan2 from '../assets/kegiatan/k2.JPG'

const Acara = () => {
  return (
    <>
      <div className="w-full h-[550px]">
        <div className="w-full h-full">
          <div className="w-full h-[550px] absolute bg-gradient-to-r from-black "></div>
          <img
            className="w-full h-full object-cover"
            src={bg}
            alt="background"
          />
        </div>
        {/* santunan anak yatim */}
        <div className="w-full h-screen absolute top-3 mx-auto">
          <div className="container mt-28 mx-auto p-4 md:p-0">
            <div className="shadow-lg flex flex-wrap w-full lg:w-3/5 mx-auto">
              <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
                <img
                  className="w-full h-full object-cover"
                  src={gbSantunan}
                  alt="santunan"
                />
                <div className="absolute text-xl">
                  <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                </div>
              </div>
              <div className=" bg-gray-300 w-full md:w-2/3">
                <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                    <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                      <h3>Santunan Anak Yatim Piatu</h3>
                      <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                        Sindangreret - Mei 2022
                      </p>
                      <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                    </div>
                    <div className="w-full lg:w-3/5 lg:px-3">
                      <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum esse harum deserunt ea deleniti voluptatibus, quis, tenetur fuga dolores voluptatem. Beatae amet eligendi commodi est maxime. Magnam, provident aliquid.
                      </p>
                    </div>
                    <div className="w-full lg:w-5/5 mt-6 lg:mt-3 lg:px-4 text-center">
                        <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-2/3 lg:w-full py-2">
                          Laporan Kegiatan
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end santunan anak yatim */}
          <div className="container mt-16 mx-auto p-4 md:p-0">
            <div className="shadow-lg flex flex-wrap w-full lg:w-3/5 mx-auto">
              <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
                <img
                  className="w-full h-full object-cover"
                  src={gbSantunan2}
                  alt="santunan"
                />
                <div className="absolute text-xl">
                  <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                </div>
              </div>
              <div className=" bg-gray-300 w-full md:w-2/3">
                <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                    <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                      <h3>Santunan Anak Yatim Piatu</h3>
                      <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                        Sindangreret - Mei 2022
                      </p>
                      <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                    </div>
                    <div className="w-full lg:w-3/5 lg:px-3">
                      <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum esse harum deserunt ea deleniti voluptatibus, quis, tenetur fuga dolores voluptatem. Beatae amet eligendi commodi est maxime. Magnam, provident aliquid.
                      </p>
                    </div>
                    <div className="w-full lg:w-5/5 mt-6 lg:mt-3 lg:px-4 text-center">
                        <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-2/3 lg:w-full py-2">
                          Laporan Kegiatan
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end santunan anak yatim */}
      </div>
    </>
  );
};

export default Acara;
