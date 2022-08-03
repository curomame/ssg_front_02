import React from 'react'
import MainTitleSub from '../parts/MainTitleSub'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function MainContentslider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  return (
    <>
    <MainTitleSub/>

    <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

    {/* <div className='MainSlider'>
      <img src="" alt="슬라이더 콘텐츠 이미지" />
      <MainTitleSub/>
    </div> */}
    </>
  )
}

export default MainContentslider