import React from "react";
import bg from '../assets/bg.jpg'
import struktur from "../assets/struktur.png";

const Struktur = () => {
  return (
    <>
    <div className="w-full h-full">
        <div className='w-full h-[550px] absolute bg-gradient-to-r from-black '></div>
        <img className='w-full h-full object-cover' src={bg} alt="background" />
    </div>
    <div className="w-full h-screen absolute top-28">
        <img className="w-full object-cover p-4" src={struktur} alt="struktur organisasi" />
    </div>
    </>
  );
};

export default Struktur;
