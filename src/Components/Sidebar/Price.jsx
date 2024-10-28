import React from 'react'
import { MdOutlineAttachMoney } from "react-icons/md";
export default function Price() {
  return (
    <div className='flex flex-col items-start mb-3 mt-3'>
      <h1 className='font-semibold text-xl items-center flex flex-row mb-2 mt-2'> Price <MdOutlineAttachMoney className='mt-1' /></h1>
      <span><input type='radio'/> All</span>
      <span><input type='radio'/> $0-50</span>
      <span><input type='radio'/> $50-100</span>
      <span><input type='radio'/> $100-200</span>
      <span><input type='radio'/> Over $150</span>
    </div>
  )
}
