import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext,GrFormPrevious } from "react-icons/gr"

export default function Carousel() {
  const ref = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    slidesToScroll: 1,
    beforeChange:(oldI,newI)=>{
      const prevSlideElement = ref.current.innerSlider.list.querySelector(`[data-index="${oldI}"]`);
  const nextSlideElement = ref.current.innerSlider.list.querySelector(`[data-index="${newI}"]`);

  prevSlideElement.classList.remove('next-slide-anim');
  nextSlideElement.classList.add('next-slide-anim');
    }
  };

  const handleGoNext = () => {
    ref.current.slickNext()
  }
  const handleGoPrevious = () => {
    ref.current.slickPrev()
  }

  const list = [
    {id:1,image:"/images/ads3.jpeg"},
    {id:2,image:"/images/ads4.png"},
    {id:3,image:"/images/ads5.jpeg"},
    {id:4,image:"/images/ads2.jpeg"},
  ]

  return (
    <div className='sm:h-[450px] h-auto w-full relative'>
      <Slider {...settings} ref={ref}>
        {list.map(item=><div key={item.id} className='sm:h-[450px] h-auto w-full'>
          <img src={item.image} alt="" className='h-full w-full' />
        </div>)}
      </Slider>
      <div className='absolute right-4 bottom-4'>
        <button onClick={handleGoPrevious} className='bg-white outline-none border-0 rounded-sm px-2 py-1 hover:bg-[#fcca19] mr-2'><GrFormPrevious /></button>
        <button onClick={handleGoNext} className='bg-white outline-none border-0 rounded-sm px-2 py-1 hover:bg-[#fcca19] mr-2'><GrFormNext /></button>
      </div>
    </div>
  )
}
