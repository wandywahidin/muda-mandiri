import React from "react";
import Footer from "../component/Footer";


const Contact = () => {
  return (
    <>
      <div className="w-full h-[550px]">
        <div className="w-full h-full">
          <div className="w-full h-[550px] absolute bg-gradient-to-r from-black ">
            <h1 className="text-white font-bold text-3xl pt-28  text-center">
              Kontak Kami
            </h1>
            <form className="text-white flex flex-col p-5 md:w-[50%] mx-auto">
              <label className="pb-1" htmlFor="name">
                Nama
              </label>
              <input className="mb-2 py-1 px-2 rounded" type="text" id="name" />
              <label className="pb-1" htmlFor="email">
                Email
              </label>
              <input className="mb-2 py-1 px-2 rounded" type="email" id="email" />
              <label className="pb-1" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                className="mb-2 py-1 px-2 rounded"
                id="pesan"
                cols="30"
                rows="7"
              ></textarea>
              <button className="border font-semibold text-white bg-blue-700 rounded shadow-lg shadow-blue-700/50 border-gray-300 px-5 py-2 hover:bg-blue-500 w-[50%] mx-auto mt-2 ">
                Kirim
              </button>
              <Footer/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
