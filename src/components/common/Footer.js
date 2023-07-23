import React from 'react'
import categories from "./../../categories.json"
import {GrLocation} from "react-icons/gr"
import { FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <>
    <div className='xl:w-7/12 md:w-10/12 w-10/12 mx-auto px-3 py-10 grid grid-cols-12 gap-x-12 md:gap-y-0 gap-y-5 text-[#7d7768]'>
        <div className='col-span-12 sm:col-span-6 md:col-span-3'>
            <img src="/images/logo.png" alt="" className='w-auto h-[60px]' />
            <p className='text-sm my-5'>Trenzyy is a trendy online clothing website that offers a wide range of fashionable apparel for men and women, catering to the latest fashion trends. </p>
            <img src="/images/transactions.png" alt="" className='w-auto h-[60px] mb-5' />
        </div>
        <div className='col-span-12 sm:col-span-6 md:col-span-3'>
            <h3 className='text-lg font-semibold mb-5'>Useful Links</h3>
            <ul>
                <li className='mb-2'><a href="/">Home</a></li>
                <li className='mb-2'><a href="/">About</a></li>
                <li className='mb-2'><a href="/">Privacy Policy</a></li>
                <li className='mb-2'><a href="/">Shipping & Refund Policy</a></li>
                <li className='mb-2'><a href="/">Digital Payments</a></li>
                <li className='mb-2'><a href="/">Contact Us</a></li>
                <li className='mb-2'><a href="/">Be A Seller</a></li>
                <li className='mb-2'><a href="/">Track Order</a></li>
                <li className='mb-2'><a href="/">Terms of Use</a></li>
            </ul>
        </div>
        <div className='col-span-12 sm:col-span-6 md:col-span-3'>
            <h3 className='text-lg font-semibold mb-5'>Categories</h3>
            <ul>
                {
                    categories.map((cat,i)=><li key={i} className='mb-2'><a href={`/product/${cat.name}`}>{cat.name}</a></li>)
                }
            </ul>
        </div>
        <div className='col-span-12 sm:col-span-6 md:col-span-3'>
            <h3 className='text-lg font-semibold mb-5'>Contact Us</h3>
            <div>
                <div className='flex items-center gap-x-4 mb-5'>
                    <GrLocation className='text-lg text-[#7d7768]' />
                    <p>support@trenzyy.com</p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <FiMail className='text-lg text-[#7d7768]' />
                    <p>help@trenzyy.com</p>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-[#fcca19] py-3 text-center font-semibold text-[#2f2605]'> &copy;{new Date(Date.now()).getFullYear()} Trenzyy | All Rights Reserved</div>
    </>
  )
}
