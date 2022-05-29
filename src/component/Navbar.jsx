import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [togle, settogle] = useState(true)
    const handleTogle = ()=> {
        settogle(!togle)
    }

  return (
    <>
    <div className='flex flex-wrap justify-between items-center absolute w-full p-4 z-10'>
        <div className='text-center flex flex-col'>
            <p className=' text-base font-semibold uppercase text-blue-500'>Karang Taruna</p>
            <h1 className='text-2xl font-bold uppercase text-blue-700 -mt-2'>Muda Mandiri</h1>
            <p className='-mt-1 text-sm text-white flex-wrap'>Rw 06 Desa Sukasukur Cisayong Tasikmalaya</p>
        </div>
        <div>
            <ul className='hidden md:flex flex-wrap justify-between font-bold text-white'>
                <Link to='/' className=' mx-2 p-2'>Home</Link>
                <Link to='/struktur-organisasi' className=' mx-2 p-2'>Struktur Organisasi</Link>
                <li className=' mx-2 p-2'><a href="#">Acara</a></li>
                <li className=' mx-2 p-2'><a href="#">Download</a></li>
                <li className=' mx-2 p-2'><a href="#">Contact</a></li>
            </ul>
            <div onClick={handleTogle} className='flex md:hidden'>
                {togle ? <AiOutlineMenu size={25} className=' text-blue-700'/> :
                <div className={!togle ? 'fixed bg-black/90 top-0 right-0 w-[60%] h-full border-l border-l-gray-900 ease-in-out duration-500' : 'fixed top-0 right-[-1000px] ease-in-out duration-500'}>
                <AiOutlineClose size={25} className='text-white absolute top-6 right-2'/>
                <ul className='flex flex-col flex-wrap justify-between font-bold text-white mt-16'>
                    <Link to='/' className=' mx-2 p-2'>Home</Link>
                    <Link to='/struktur-organisasi' className=' mx-2 p-2'>Struktur Organisasi</Link>
                    <li className=' mx-2 p-2'><a href="#">Acara</a></li>
                    <li className=' mx-2 p-2'><a href="#">Download</a></li>
                    <li className=' mx-2 p-2'><a href="#">Contact</a></li>
                </ul>
                </div>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar