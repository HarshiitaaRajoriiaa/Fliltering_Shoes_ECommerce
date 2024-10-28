import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
export default function Card() {
    return (
        <div className='border  rounded-md h-fit w-fit p-5 m-3 border-slate-200 shadow-lg '>
            <img  className=" h-46 w-64 hover:scale-105 hover:duration-300 "src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt='shoe'/>
            <section>
                <h1 className='font-bold text-2xl mt-3'>Nike Air Monarch IV </h1>
                <section className='flex   mt-3 flex-row space-x-1  text-yellow-500'><FaStar className='mt-2'/> <FaStar  className='mt-2'/><FaStar className='mt-2' /> <span className='text-black font-semibold mt-1'>reviews</span></section>
                <div className='flex flex-row mb-4  justify-between mt-3'>
                    <section className=' font-semibold'><del> $ 1,400</del> <span>400</span></section>
                    <IoBagCheckSharp  className='mt-2'/>
                </div>
            </section>

        </div>
    )
}
