import React from 'react'

const Bus = () => {
  return (
    <div className='wrapper h-[100vh] overflow-y-auto '>
        <div className='header bg-[url("https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-no-repeat bg-cover bg-center h-[50vh] w-full relative'>
            <h1 className=' m-auto text-white font-bold shadow-2xl text-5xl flex absolute top-[40%] left-[25%]'>Welcome</h1>
            <div className=' bg-slate-200 rounded-xl shadow-black absolute top-[65%]  left-[22%] max-w-[80%]'>
                <form className=' ' >
                    <div className='flex flex-col mx-5 my-10'>
                    <div className='mb-5'>
                        <label>From: </label>
                        <input type='text' className=' border-solid border-2 rounded-lg' />
                    </div>
                   <div className='mb-5 relative'>
                        <label>To: </label>
                        <input type='text' className='border-solid border-2 rounded-lg absolute right-0' />
                   </div>
                   <div className='relative'>
                        <label>Date: </label>
                        <input type='date' className='border-solid border-2 rounded-lg absolute right-0'/>
                   </div>
                   </div>
                </form>
            </div>
        </div>

        <div className = " mt-20 flex flex-col items-center">
            <div className=' bg-slate-50 rounded-md shadow-2xl w-[80%] h-[30vh] my-10'>
                        sjdvnnnnnnnnnnnnnnnnnnnadda
            </div>
            <div className=' bg-slate-50 rounded-md shadow-2xl w-[80%] h-[30vh] my-10'>
                        sjdvnnnnnnnnnnnnnnnnnnnadda
            </div>            
            <div className=' bg-slate-50 rounded-md shadow-2xl w-[80%] h-[30vh] my-10'>
                        sjdvnnnnnnnnnnnnnnnnnnnadda
            </div>            
            
        </div>
    </div>
  )
}

export default Bus