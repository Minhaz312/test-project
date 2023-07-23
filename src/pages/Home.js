import React from 'react'
import Layout from '../components/common/Layout'
import Hero from '../components/home/Hero'
import { Link } from 'react-router-dom'
import categories from "./../categories.json"
import ProductList from '../components/products/ProductList'
import AdCarousel from '../components/home/AdCarousel'

export default function Home() {
  return (
    <Layout>
      {/* Hero section for category list and carousel */}
      <Hero />
      <section className='grid grid-cols-12 gap-y-6 gap-x-0 sm:gap-y-0 sm:gap-x-10 my-5 md:mx-0 sm:mx-3'>
        <Link to="/product" className='col-span-12 sm:col-span-6'>
          <img alt="" src="/images/ads1.jpg" className='h-auto sm:mx-0 sm:h-[250px] rounded-xl w-full object-cover' />
        </Link>
        <Link to="/product" className='col-span-12 sm:col-span-6'>
          <img alt="" src="/images/ads2.jpeg" className='h-auto sm:mx-0 sm:h-[250px] rounded-xl w-full object-cover' />
        </Link>
      </section>
      {/* Category list section */}
      <section className='grid lg:grid-cols-8 lg:gap-7 grid-flow-col lg:grid-flow-row gap-4 auto-cols-max overflow-auto py-5'>
          {
            categories.map((cat,i)=><div key={i} className='p-5 flex justify-center items-center border rounded-md'><img alt="" src={`/images/category/${cat.icon}`} className='h-[100px] w-[100px]' /></div>)
          }
      </section>
      {/* Featured product list */}
      <ProductList className="text-left" title="featured product" />
      {/* Offer carrousel */}
      <AdCarousel />
      {/* Fresh arrival product list */}
      <ProductList className="text-center" title="Fresh Arrival" />
    </Layout>
  )
}
