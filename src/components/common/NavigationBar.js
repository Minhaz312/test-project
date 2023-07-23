import React, { useState } from 'react'
import {BiChevronDown, BiMenuAltLeft} from "react-icons/bi"
import {CgMenuCake} from "react-icons/cg"
import MobileNavbar from './MobileNavbar'


export default function NavigationBar() {

    const [showSidebar,setShowSidebar] = useState(true) 

    const handleShowSidebar = () => {
        if(showSidebar){
            setShowSidebar(false)
        }else{
            setShowSidebar(true)
        }
    }

  return (
    <header>
        {/* Main navigation bar */}
      <nav className="bg-[#fcca19] py-5 w-full">
          <div className="mx-auto xl:w-8/12 lg:10/12 w-full md:px-0 sm:px-3 min-[560px]:px-0 px-3 grid grid-cols-12 items-center">
            {/* Brand logo */}
              <div className="md:col-span-3 col-span-6 flex items-center">
                  <BiMenuAltLeft className='text-[30px] mr-5 block md:hidden cursor-pointer' onClick={handleShowSidebar} />
                  <img alt="" src="/images/logo.png" className='md:w-[130px] w-[100px]' />
              </div>
              {/* Searching input box */}
              <div className="md:col-span-6 md:block hidden px-5">
                  <div className="flex bg-white py-2 border-0 rounded-sm">
                      <button className="bg-transparent border-r-2 px-2"><img alt="" src="/images/icon/search.png" width="20px" /></button>
                      <input type="search" className="w-[90%] px-3 outline-0 border-0 hover:outline-0 hover:border-0 focus:outline-0 focus:border-0" placeholder="type your product name..." />
                      <button className="bg-transparent px-2"><img alt="" src="/images/icon/filter-icon.svg" height="30px" /></button>
                  </div>
              </div>
              {/* User profile links */}
              <div className="md:col-span-3 col-span-6">
                  <div className="flex md:justify-center justify-end items-center gap-x-6">
                      <a href="#" className="flex flex-col gap-y-1 items-center">
                          <img alt="" src="/images/icon/user.png" width="20px" />
                          <span className="text-xs">Account</span>
                      </a>
                      <a href="#" className="hidden md:flex flex-col gap-y-1 items-center">
                          <img alt="" src="/images/icon/love.png" width="20px" />
                          <span className="text-xs">Whishlist</span>
                      </a>
                      <a href="#" className="flex flex-col gap-y-1 items-center">
                          <img alt="" src="/images/icon/shopping-bag.png" width="20px" />
                          <span className="text-xs">Your Cart</span>
                      </a>
                  </div>
              </div>
          </div>
          {/* Responsive searching input box for mobile, tablet */}
          <div className='md:hidden block mx-auto mt-5 xl:w-8/12 lg:10/12 md:w-full md:px-10 sm:px-3 min-[560px]:px-0 px-3'>
            <div className="flex bg-white py-2 border-0 rounded-sm">
                <button className="bg-transparent border-r-2 px-2"><img alt="" src="/images/icon/search.png" width="20px" /></button>
                <input type="search" className="w-[90%] px-3 outline-0 border-0 hover:outline-0 hover:border-0 focus:outline-0 focus:border-0" placeholder="type your product name..." />
                <button className="bg-transparent px-2"><img alt="" src="/images/icon/filter-icon.svg" height="30px" /></button>
            </div>
          </div>
      </nav>
        {/* Bottom Navigation bar */}
      <div className="border-b px-3 sm:px-0">
            <div className="w-full mx-auto flex xl:w-8/12 xl:10/12">
              <div className="hidden py-4 bg-[#f3f3f3] border border-slate-400/10  w-[25%] justify-between items-center px-5 md:flex lg:w-[20%]">
                  <div className="flex gap-3 items-center">
                      <CgMenuCake className="text-[30px]" />
                      <p className="font-semibold">Categories</p>
                  </div>
                  <BiChevronDown className='text-[20px]' />
              </div>
              <div className=" py-4 flex ml-3 items-center">
                  <ul className="flex gap-x-3 items-center">
                      <li className="border-r-2 text-center">
                          <a href="https://www.example.com/route" className="px-4 border-b-3 border-b-[#fcca19] text-sm font-semibold sm:text-md">Home</a>
                      </li>
                      <li className="border-r-2 text-center">
                          <a href="https://www.example.com/route" className="px-4 text-sm font-semibold sm:text-md">Shope</a>
                      </li>
                      <li className="border-r-2 text-center">
                          <a href="https://www.example.com/route" className="px-4 text-sm font-semibold sm:text-md">Be A Seller</a>
                      </li>
                      <li className="border-r-0 text-center">
                          <a href="https://www.example.com/route" className="pe-3 text-sm font-semibold sm:text-md">Coupon</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      {/* Mobile navigation bar */}
      <MobileNavbar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
    </header>
  )
}
