'use client'
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    

  return (
    <div  className=' flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto'>
      <h1 className='w-full text-2xl font-bold text-[#00df9a]'></h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Ministry</li>
        <li className='p-4'>Stations</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={toggleNav} className='w-full block md:hidden absolute z-10' >
        {!isOpen ? <AiOutlineClose size={30} className=" text-red-500 overflow-x-auto absolute left-96"/>:<AiOutlineMenu size={30}/>
          }
      </div>
      <div className={!isOpen ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200  bg-gray-300 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>Easy_Ticket</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-400'>Home</li>
          <li className='p-4 border-b border-gray-400'>Ministry</li>
          <li className='p-4 border-b border-gray-400'>Stations</li>
          <li className='p-4 border-b border-gray-400'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav