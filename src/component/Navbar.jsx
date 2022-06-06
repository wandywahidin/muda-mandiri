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
        <Link to='/' className='text-center flex flex-col cursor-pointer'>
            <p className=' text-base font-semibold uppercase text-blue-500'>Karang Taruna</p>
            <h1 className='text-2xl font-bold uppercase text-blue-700 -mt-2'>Muda Mandiri</h1>
            <p className='-mt-1 text-sm text-white flex-wrap'>Rw 06 Desa Sukasukur Cisayong Tasikmalaya</p>
        </Link>
        <div>
            <ul className='hidden md:flex flex-wrap justify-between font-bold text-gray-400'>
                <Link to='/' className=' mx-2 p-2 hover:text-white hover:scale-110 focus:text-white focus:scale-110'>Home</Link>
                <Link to='/struktur-organisasi' className=' mx-2 p-2 hover:text-white hover:scale-110 focus:text-white focus:scale-110'>Struktur Organisasi</Link>
                <Link to='/acara' className=' mx-2 p-2 hover:text-white hover:scale-110 focus:text-white focus:scale-110'>Acara</Link>
                <Link to='/download' className=' mx-2 p-2 hover:text-white hover:scale-110 focus:text-white focus:scale-110'>Download</Link>
                <Link to='/contact' className=' mx-2 p-2 hover:text-white hover:scale-110 focus:text-white focus:scale-110'>Contact</Link>
                
            </ul>
            <div onClick={handleTogle} className='flex md:hidden'>
                {togle ? <AiOutlineMenu size={25} className=' text-blue-700'/> :
                <div className={!togle ? 'fixed bg-black/90 top-0 right-0 w-[60%] h-full border-l border-l-gray-900 ease-in-out duration-500' : 'fixed top-0 right-[-1000px] ease-in-out duration-500'}>
                <AiOutlineClose size={25} className='text-white absolute top-6 right-2'/>
                <ul className='flex flex-col flex-wrap justify-between font-bold text-white mt-16'>
                    <Link to='/' className=' mx-2 p-2'>Home</Link>
                    <Link to='/struktur-organisasi' className=' mx-2 p-2'>Struktur Organisasi</Link>
                    <Link to='/acara' className=' mx-2 p-2'>Acara</Link>
                    <Link to='/download' className=' mx-2 p-2'>Download</Link>
                    <Link to='/contact' className=' mx-2 p-2'>Contact</Link>
                    
                </ul>
                </div>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar