import React from 'react'
import CategoryList from './hero/CategoryList'
import Carousel from './hero/Carousel'

export default function Hero() {
  return (
    <section className='flex'>
        <div className='lg:min-w-[20%] min-w-[25%] md:block hidden'>
            <CategoryList />
        </div>
        <div className='lg:min-w-[80%] md:min-w-[75%] w-[100%]'>
            <Carousel />
        </div>
    </section>
  )
}
