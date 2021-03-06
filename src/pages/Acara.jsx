import React from "react";
import Footer from "../component/Footer";

const Acara = ({ data }) => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full">
          <div className="w-full h-[550px] absolute bg-gradient-to-r from-black "></div>
        </div>
        <div className="w-full h-screen absolute top-0 md:top-3 mx-auto">
          <div className="container mt-20 md:mt-28 mx-auto p-4 md:p-0">
            {data.map((item) => {
              return (
                <div
                  className="shadow-lg flex flex-wrap w-full lg:w-3/5 mx-auto mt-10 "
                  key={item.id}
                >
                  <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
                      <img
                        className="w-full h-full object-cover"
                        src={item.images}
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
                          <h3>{item.title.toUpperCase()}</h3>
                          <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                            {item.date}
                          </p>
                          <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                        </div>
                        <div className="w-full lg:w-3/5 lg:px-3">
                          <p className="mt-4 lg:mt-0 text-justify text-sm">
                            {item.content}
                          </p>
                        </div>
                        <div className="w-full lg:w-5/5 mt-6 lg:mt-5 lg:px-4 text-center">
                          <button className="border font-semibold text-white bg-blue-700 rounded shadow-sm shadow-blue-700/50 border-gray-300 px-5 py-2 hover:bg-blue-500">
                            <a
                              href={item.link}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Laporan Kegiatan
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Acara;
