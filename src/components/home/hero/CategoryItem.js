import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"
export default function CategoryItem({icon,name,arrow=true}) {
  return (
    <div className='hover:bg-[#fcca19] text-slate-400 hover:text-slate-900'>
      <a href={`/product/category/${name}`} className='flex items-center justify-between py-4 px-3 hover:translate-x-3 transition'>
          <div className='flex gap-x-2'>
              <img src={`/images/category/${icon}`} alt="" className={`${icon===false?"hidden":"block"} h-[20px]`} />
              <p className='text-sm font-semibold'>{name}</p>
          </div>
          <MdKeyboardArrowRight className={`text-[20px] ${arrow===true?"block":"hidden"}`} />
      </a>
    </div>
  )
}
