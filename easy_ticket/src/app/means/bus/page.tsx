import React from 'react'
import { busData } from './busData'


interface ibusData {
    name: string, 
    description: string,
    image: string, 
    alt: string
}

const Bus:React.FC<ibusData> = () => {

  return (
    <div className=' '>
        <div className=' bg-[url("https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-no-repeat bg-cover bg-center h-[50vh] w-full relative'>
            <h1 className=' m-auto text-white font-bold shadow-2xl text-5xl flex absolute top-[40%] left-[25%]'>Welcome</h1>
            <div className=' bg-slate-200 rounded-xl shadow-black absolute top-[65%]  left-[22%] max-w-[80%]'>
                <form className=' ' >
                    <div className='flex flex-col mx-5 my-5'>
                    <div className='mb-5'>
                        <label>From: </label>
                        <input type='text' className=' border-solid border-[#00df9a] border-2 rounded-lg' />
                    </div>
                   <div className='mb-5 relative'>
                        <label>To: </label>
                        <input type='text' className='border-solid border-2 border-[#00df9a] rounded-lg absolute right-0' />
                   </div>
                   <div className='relative'>
                        <label>Date: </label>
                        <input type='date' className='border-solid border-2 border-[#00df9a] rounded-lg absolute right-0'/>
                   </div>
                   <div className='relative my-5'>
                        <button className=' bg-[#00df9a] text-white rounded-xl absolute right-0 py-1 px-2'>Submit</button>
                   </div>
                   </div>
                </form>
            </div>
        </div>

        <div className = " mt-20 flex flex-col items-center">
            {busData.map((bus, key) => {
                return (
                    <div key={bus.name} className=' flex bg-slate-50 rounded-md shadow-2xl border-solid border-2 w-[80%] h-[30vh] my-10'>
                    <div className=' w-1/2'>
                        <img src={bus.image} alt={bus.alt} className='h-[30vh] rounded-md'/>
                    </div>
                    <div className=' flex flex-col w-1/2 justify-center items-center'>
                        <h1 className=' font-bold text-xl my-2 text-[#00df9a]'>{bus.head}</h1>
                        <p className=' ml-4'>{bus.description}</p>
                        <button className="bg-[#010302] text-white px-5 py-2 rounded-md mt-1">Travel</button>
                    </div>
                </div>    
                )
            })}
            
        </div>
    </div>
  )
}

export default Bus