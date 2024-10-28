import React from 'react'
import { useState } from 'react';
import { TbCategoryPlus } from "react-icons/tb";
export default function Category() {
  const [optionSelect , SetOptionSelect] = useState()
  

  return (
    <div className='flex flex-col items-start'>
      <h1 className='font-semibold text-xl items-center mb-2 mt-2 flex flex-row'> Category <TbCategoryPlus className='mt-2' /></h1>
      <span>
        <input
          className='mr-3'
          type='radio'
        />
        All</span>
      <span><input
        className='mr-3'
        value="All"
        type='radio'
        // onChange={handleOnChange}
      /> Sneakers</span>
      <span><input
        className='mr-3'
        value="All"
        type='radio'
        // onChange={handleOnChange}
      /> Flats</span>
      <span><input
        className='mr-3'
        value="All"
        type='radio'
        // onChange={handleOnChange}
      /> Sandals</span>
      <span><input
        className='mr-3'
        value="All"
        type='radio'
        // onChange={handleOnChange}
      /> Heels</span>
    </div>
  )
}
