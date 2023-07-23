import React from 'react'

export default function ProductItem({id,title,image,price,discount,type}) {
    const sellingPrice = Number(price)-((Number(discount)/100)*Number(price))
  return (
    <div className='hover:shadow p-2'>
        <div>
            <img src={image} alt="" className='h-48 w-full object-contain' />
        </div>
        <div class="sm:text-center flex flex-col">
        <a href="/product/1235213/product-slug">
            <p class="text-[13px] md:text-sm text-gray-12 md:mt-2 dm-regular line-clamp">{title}</p>
        </a>
        <p class="font-semibold text-sm text-gray-12 dm-sans">{sellingPrice}TK</p>
        <p class="mt-1 md:mt-0 text-11 font-medium line-through text-gray-10 pl-1">{price}</p>
        </div>
        
    </div>
  )
}
