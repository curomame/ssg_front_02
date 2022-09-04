import React from 'react'
import Slider from 'react-slick';
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub';

function MainSliderQuarter() {


  const dummyDatas = [
    {
      id:1,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072217195349135856376585_644.png",
      "title":"2022 추석 명절",
      "sub":"미리 준비하는 올 추석 명절 선물"
    },
    {
      id:2,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072217190693512854525285_422.jpg",
      "title":"MONDAY MOON",
      "sub":"럭셔리 뷰티부터 다양한 뷰티 컨텐츠까지!"
    },
    {
      id:3,
      src:"//sui.ssgcdn.com/cmpt/banner/202207/2022072510290015700334005033_491.png",
      "title":"SSG Luxury",
      "sub":"명품의 신세계를 만나다"
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
          
          dummyDatas.map((data,i) => 

          {
            
            
            return <div key={i} className="mainSliderQuarterSide">
              <div>
                <img src={data.src} alt=''/>
                  <div><h2>{data.title}</h2></div>
                  <div><p>{data.sub}</p></div>
              </div>
            </div>}
          )

          
        }


        </Slider>
      </div>
    </>
  )
}

export default MainSliderQuarter