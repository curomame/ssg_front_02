import React from 'react'
import Slider from 'react-slick'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'

function CommonSlider() {

  const dummyDatas = [
    {
      id:1,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072816035474063543788354_518.jpg"
    },
    {
      id:2,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072816035474063543788354_518.jpg"
    },
    {
      id:3,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072816035474063543788354_518.jpg"
    },
  ]



  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    }

  return (
    <>
      <div>
        <Slider {...settings}>
          
          {dummyDatas &&
          
          dummyDatas.map((data,i) => (
          <div key={i}>
            <div>
              <img style={{"width":"100%","background":"red", "borderRight":"10px solid white"}} src={data.src} alt=''/>
              <CommonTitleSub
                title="title"
                sub="sub"/>
            </div>
          </div>
          ))

          
        }


        </Slider>
      </div>
    </>
    )
}

export default CommonSlider