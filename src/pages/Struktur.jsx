import React from "react";
import struktur from "../assets/struktur.png";
import Footer from "../component/Footer";

const Struktur = () => {
  return (
    <>
    <div className="w-full h-full">
        <div className='w-full h-[550px] absolute bg-gradient-to-r from-black '></div>
    </div>
    <div className="w-full absolute top-28 ">
        <img className="w-full object-cover p-4" src={struktur} alt="struktur organisasi" />
        <Footer/>
    </div>
    
    </>
  );
};

export default Struktur;
