'use client'
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      setIsOpen(true);
    },[]);
    

  return (
    <div  className=' flex h-24 max-w-full px-4'>
      <h1 className='w-full text-2xl font-bold text-[#00df9a]'></h1>
      <ul className=' hidden md:w-full md:flex md:justify-end'>
        <li className='p-4 text-white font-bold'>Epsum</li>
        <li className='p-4 text-white font-bold'>Lorem</li>
        <li className='p-4 text-white font-bold'>Lorem</li>
        <li className='p-4 text-white font-bold'>Epsum</li>
        <li className='p-4 text-white font-bold'>Lorem</li>
      </ul>
      <div onClick={toggleNav} className='w-full block md:hidden absolute z-10' >
        {!isOpen ? <AiOutlineClose size={30} className=" text-red-500 overflow-x-auto absolute left-96"/>:<AiOutlineMenu size={30}/>
          }
      </div>
      <div className={!isOpen ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200  bg-gray-300 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>Easy_Ticket</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-400'>Lorem</li>
          <li className='p-4 border-b border-gray-400'>Epsum</li>
          <li className='p-4 border-b border-gray-400'>Lorem</li>
          <li className='p-4 border-b border-gray-400'>Epsum</li>
          <li className='p-4'>Lorem</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav