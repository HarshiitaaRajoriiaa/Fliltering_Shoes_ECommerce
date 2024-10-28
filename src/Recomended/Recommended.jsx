import React from 'react'
import { TbCategoryPlus } from "react-icons/tb";
export default function Recommended() {
  return (
    <div className='recommended  w-full    mt-0 flex flex-row  flex-wrap   justify-between p-2'>
      
      <div className='w-full flex flex-wrap  space-x-3  justify-center'>
        <span className='text-black text-xl font-semibold mt-2'>Recommended</span>
        <button className=' rounded-md bg-slate-100 shadow-md  pl-3 pr-3 border border-slate-400 p-1'>All</button>
        <button className=' rounded-md bg-slate-100 shadow-md  pl-3 pr-3 border border-slate-400 p-1'>Nike</button>
        <button className=' rounded-md bg-slate-100 shadow-md  pl-3 pr-3 border border-slate-400 p-1'>Heels</button>
        <button className=' rounded-md bg-slate-100 shadow-md  pl-3 pr-3 border border-slate-400 p-1'>Addidas</button>
        <button className=' rounded-md bg-slate-100 shadow-md  pl-3 pr-3 border border-slate-400 p-1'>Puma</button>
      </div>
    </div>
  )
}
