import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
export default function Nav() {
    return (
        <>
            <nav className='flex flex-row flex-wrap sticky top-0 z-50 bg-white  justify-between w-full  border border-b-slate-200  p-4 '>
                <div className='icon flex items-center  justify-center   space-x-5'>
                    <img className='h-10 w-10' src="../Images/favicon.png" alt="Logo" />
                    <span className='text-lg font-semibold hover:scale-110 hover:duration-300 '>Shoes Heaven</span>
                </div>

               
                <div className="search-box border border-slate-800   flex flex-row items-center rounded-md bg-slate-100 mx-4  md:w-auto mt-2 md:mt-0">
                    <input
                        className='p-1 pr-6 pl-3 text-sm  focus:outline-none rounded-md bg-slate-100 w-full md:w-auto'
                        placeholder='Find your Favourite Shoes'
                        type='text'
                    />
                    <CiSearch className=' hover:text-2xl text-xl ml-2 mr-3' />
                </div>

                
                <div className="profile-box flex flex-row  justify-center items-center space-x-7 mt-2 md:mt-3    ">
                    <button><FaCartShopping className='text-xl hover:scale-125 hover:duration-150' /></button>
                    <button><FaUserLarge className='text-xl hover:scale-125 hover:duration-150' /></button>
                </div>
            </nav>
        </>
    )
}
