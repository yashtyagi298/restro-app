
import React from 'react'
import {data} from '../data/categories.js';
import Category from './Category';
const CategoryListing = () => {
  return (
    <div className='flex  mb-16 max-w-screen-xl mx-auto flex-col gap-8 px-2'>
      <div className='flex items-center justify-between'>
            <h3 className='text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tighter px-4'>
                Categories
            </h3>
      </div>
      <div className='flex flex-wrap items-center justify-between lg:gap-x-6'>
            {
                data.map((category)=>{
                    return  <Category key={category.id} title={category.title} imgUrl={category.imageUrl}/>
                })
            }
      </div>
    </div>
  )
}

export default CategoryListing
