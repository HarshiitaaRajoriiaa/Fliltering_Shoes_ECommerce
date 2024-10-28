import React from 'react'
import { MdInvertColors } from "react-icons/md";
export default function Color() {
  return (
    <div className='flex flex-col items-start mt-2 mb-2'>
      <h1 className='font-semibold text-xl items-center mb-2 mt-2 flex flex-row'> Color <MdInvertColors  className='mt-1'/></h1>
      <span><input type='radio'/> All</span>
      <span><input type='radio'/> Black</span>
      <span><input type='radio'/> Blue</span>
      <span><input type='radio'/> Red</span>
      <span><input type='radio'/> White</span>
    </div>
  )
}
