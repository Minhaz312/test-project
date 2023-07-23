
import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext,GrFormPrevious } from "react-icons/gr"
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function AdCarousel() {
    const ref = useRef(null)
    const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    fade:true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    };

    const handleGoNext = () => {
    ref.current.slickNext()
    }
    const handleGoPrevious = () => {
    ref.current.slickPrev()
    }

    const list = [
    {id:1,image:"/images/special/sp1.jpeg",title1:"Trenzyy's",title2:"Collar Blouse"},
    {id:2,image:"/images/special/sp2.jpeg",title1:"Summer Hot",title2:"Key Trends"},
    {id:3,image:"/images/special/sp3.jpeg",title1:" A Revolution",title2:"In Retail"},
    ]

    return (
    <section className='h-auto w-full relative sm:h-[450px] lg:block hidden'>
        <Slider {...settings} ref={ref}>
        {list.map(item=><div key={item.id} className='relative sm:h-[450px] h-auto w-full'>
            <div className='absolute h-full w-full bg-black/20 pt-24 pl-24'>
                <div className='special-offers'>
                    <h1 className='text-[60px] font-bold text-slate-900'>{item.title1}</h1>
                    <h3  className='text-[40px] text-slate-800'>{item.title2}</h3>
                    <button className='bg-slate-900 text-white font-semibold px-3 py-2 flex items-center gap-x-2 rounded border-0 outline-0 mt-5'>
                        <p>Shop Now</p>
                        <FaLongArrowAltRight className='text-[20px]' />
                    </button>
                </div>
            </div>
            <img src={item.image} alt="" className='h-full w-full' />
        </div>)}
        </Slider>
        {/* Slider controls button */}
        <div className='absolute right-4 bottom-4'>
        <button onClick={handleGoPrevious} className='bg-white outline-none border-0 rounded-sm px-2 py-1 hover:bg-[#fcca19] mr-2'><GrFormPrevious /></button>
        <button onClick={handleGoNext} className='bg-white outline-none border-0 rounded-sm px-2 py-1 hover:bg-[#fcca19] mr-2'><GrFormNext /></button>
        </div>
    </section>
    )
}

