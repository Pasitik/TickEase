import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' flex h-screen bg-white'>
      <div className=' w-1/2 h-screen bg-[url(https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-no-repeat bg-cover bg-center'></div>
      <div className=' w-1/2 h-screen bg-black snap-y snap-mandatory overflow-y-scroll'>
        <div className='  snap-start h-screen flex justify-left items-center'>
          <div className=' flex flex-col items-start text-white mx-10'>
            <p className=' text-8xl font-unbounded'>
              <span className=' text-[#00df9a]'>Easy</span> <br /> Ticket
            </p>
            <p className=' text-4xl py-10 font-poppins'>
              Comfort like never before
            </p>
            <p className=' text-2xl font-poppins'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className=' bg-[#00df9a] hover:bg-[#279070] mr-10 my-7 px-12 py-4 rounded-full font-poppins font-bold'>Join</button>

          </div>
        </div>

        <div className=' bg-gray-800 snap-start h-screen flex justify-left items-center'>
          <div className=' flex flex-col items-start text-white mx-10'>
            <p className=' text-8xl font-unbounded'>
              <span className=' text-[#00df9a]'>Road</span> <br /> Trip???
            </p>
            <p className=' text-4xl py-10 font-poppins'>
              It just got easier!!!
            </p>
            <p className=' text-2xl font-poppins'>
              We've got you covered! Book a bus ticket today with ease.
            </p>
            <button className=' bg-[#00df9a] hover:bg-[#279070] mr-10 my-7 px-12 py-4 rounded-full font-poppins font-bold'>Book Now!</button>

          </div>
        </div>

        <div className=' snap-start h-screen flex justify-left items-center'>
          <div className=' flex flex-col items-start text-white mx-10'>
            <p className=' text-8xl font-unbounded'>
              <span className=' text-[#00df9a]'>Book</span> <br /> a flight??
            </p>
            <p className=' text-4xl py-10 font-poppins'>
              We take away the stress!!!
            </p>
            <p className=' text-2xl font-poppins'>
              We've got you covered! Book a flight of your choice now.
            </p>
            <button className=' bg-[#00df9a] hover:bg-[#279070] mr-10 my-7 px-12 py-4 rounded-full font-poppins font-bold'>Book Now!</button>

          </div>
        </div>
      </div>
    </main>
  )
}
