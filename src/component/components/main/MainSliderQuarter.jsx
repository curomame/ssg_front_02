import React from 'react'
import Slider from 'react-slick';

function MainSliderQuarter() {


  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "20px",
    slidesToShow: 2,
    swipeToSlide: true,
    }

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <h3 style={{height:"100px", "width":"100%","background":"red"}}>1</h3>
          </div>
          <div>
            <h3  style={{height:"100px", "width":"100%","background":"green"}}>2</h3>
          </div>
          <div>
            <h3  style={{height:"100px", "width":"100%","background":"blue"}}>3</h3>
          </div>
          <div>
            <h3  style={{height:"100px", "width":"100%","background":"blue"}}>4</h3>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default MainSliderQuarter