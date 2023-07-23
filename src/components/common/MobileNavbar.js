import React from 'react'
import {IoMdClose} from "react-icons/io"
import {AiOutlineUser} from "react-icons/ai"
import {FiHome} from "react-icons/fi"
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'
import {BiLogInCircle} from "react-icons/bi"

import categories from "./../../categories.json"

export default function MobileNavbar({showSidebar,handleShowSidebar}) {
  return (
    <div className={`absolute max-h-screen w-full top-0 bottom-0 right-0 left-0 bg-black/30 md:hidden ${showSidebar===true?"block":"hidden"} z-20 overflow-hidden`}>
        <div className='relative overflow-hidden w-[250px] bg-[#2c2c2c] text-slate-200 h-full p-3 leftbar'>
            <div className='mb-7'>
                <div className='flex items-center justify-between'>
                    <img src="/images/logo.png" alt="" className='h-[50px]' />
                    <IoMdClose className="text-[30px] cursor-pointer" onClick={handleShowSidebar} />
                </div>
            </div>
            <div className='flex items-center gap-x-3'>
                <div className='bg-slate-100/10 h-[50px] w-[50px] flex justify-center items-center rounded-full'>
                    <AiOutlineUser className="text-[30px]" />
                </div>
                <div>
                    <p>No Account</p>
                    <p>Register or Login</p>
                </div>
            </div>
            <div className='mt-7 mb-5 border-b border-slate-500 pb-5'>
                <Link to="/" className='flex items-center mt-3 gap-x-3'>
                    <FiHome />
                    <p>Home</p>
                </Link>
                <Link to="/trace-order" className='flex items-center mt-3 gap-x-3'>
                    <img src="/images/icon/trace-order.svg" alt="" />
                    <p>Trace Order</p>
                </Link>
            </div>
            <ul>
                {
                    categories.map((category,i)=><li key={i}>
                    <Link to={`/${category.name}`} className='flex justify-between items-center py-3'>
                        <p>{category.name}</p>
                        <MdKeyboardArrowRight className='text-[20px]' />
                    </Link>
                </li>)
                }
                <li>
                    <Link to={`/all-category`} className='flex gap-x-3 items-center py-3'>
                        <p className='uppercase'>see all categories</p>
                        <FaLongArrowAltRight className='text-[20px]' />
                    </Link>
                </li>
            </ul>
            <div className='flex gap-x-2 items-center bottom-4 absolute py-5 border-t border-slate-500 w-full'>
                <BiLogInCircle className='text-[20px] text-white' />
                <p>Login</p>
            </div>
        </div>
      </div>
  )
}
