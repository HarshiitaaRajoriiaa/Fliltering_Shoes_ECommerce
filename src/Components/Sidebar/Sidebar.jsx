import React from 'react'
import Color from './Color'
import Category from './Category'
import Price from './Price'
export default function Sidebar() {
  return (
    <aside className='h-full w-fit text-center fixed  z-3 p-8 bg-white  shadow-lg'>
        <Category/>
        <Price/>
        <Color/>
    </aside>
  )
}
