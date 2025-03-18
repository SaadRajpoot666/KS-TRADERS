import Slider from "react-slick";
// Import css files
import "./slick.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
export function Slick({ children }) {
  let sliderRef = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <Slider
        ref={(slider) => (sliderRef = slider)}
        {...settings}
        className="h-[30rem] slick  "
      >
        {children}
      </Slider>
      
        <img className="custom-prev" onClick={()=>sliderRef.slickPrev()} src="/images/leftArrow.png" alt="" />
      
      {/* <button className="custom-next" onClick={() => sliderRef.slickNext()}> */}
      <img src="/images/rightArrow.png" className="custom-next" alt=""  onClick={()=>sliderRef.slickNext()}/>
      {/* </button> */}
    </>
  );
}

export function SlickCards({ children ,ClassName}) {
  let sliderRef = React.useRef(null)
  const settings = {
    dots: true,
    arrows:false,
    infinite:  true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings} className={` sm:h-[35rem] sliderSlick`} ref={slider=>sliderRef = slider}>
        {children}
        </Slider>
      <img src="/images/ChevronLeft.png" className="prev " alt="LEFT ARROW" onClick={()=>sliderRef.slickPrev()} />
      <img src="/images/ChevronRight.png" alt="RIGHT ARRROW " className="next" onClick={()=> sliderRef.slickNext()} />        
          </div>
  );
}
