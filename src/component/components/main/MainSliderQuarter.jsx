import React from 'react'
import Slider from 'react-slick';
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub';

function MainSliderQuarter() {


  const dummyDatas = [
    {
      id:1,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072217195349135856376585_644.png"
    },
    {
      id:2,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072217190693512854525285_422.jpg"
    },
    {
      id:3,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072510290015700334005033_491.png"
    },
  ]


  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "20px",
    slidesToShow: 1.1,
    swipeToSlide: true,
    }

  return (
    <>
      <div className='mainSliderQuarterContainer'>
        <Slider {...settings}>
          
          {dummyDatas &&
          
          dummyDatas.map((data) => (
          <div style={{"marginRigth":"3px"}}>
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

export default MainSliderQuarter