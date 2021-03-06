import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <div className=' w-full h-[550px]'>
        <div className="w-full h-full">
            <div className='w-full h-[550px] absolute bg-gradient-to-r from-black '></div>
        </div>
        <div className='absolute top-[15%] md:top-[20%] p-4 md:p-8'>
            <h1 className='text-white text-3xl md:text-5xl font-bold my-5'>PEMUDA MEMBANGUN DESA</h1>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>Tekad insan generasi muda Indonesia untuk menjadi patriot atau pejuang yang berkepribadian, berpengetahuan, Serta menunjukkan sikap terampil dan selalu berkarya nyata agar mampu ikut secara aktif dalam pembangunan untuk menciptakan masyarakat yang adil dan makmur berdasarkan Pancasila.</p>
            <div className='my-4'>
                <button className='border font-semibold text-white bg-blue-700 rounded shadow-lg shadow-blue-700/50 border-gray-300 px-5 py-2 hover:bg-blue-500'>
                    <Link to='/acara'>Explore</Link>
                </button>
            </div>            
        </div>
    </div>
    </>
    )
}

export default Main