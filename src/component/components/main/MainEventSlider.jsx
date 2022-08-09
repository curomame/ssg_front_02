import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainEventSliderDatas from "../../../assets/datas/mainDatas/mainEventSliderDatas.json"

function MainEventSlider({datas, height, numbering, }) {

  const [current, setCurrent ] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    afterChange: () => {
      // 숫자 수동 변경시 안바뀌는 오류 잡기
      // 숫자 css 오류 잡기

      if(current >= mainEventSliderDatas.length){
        setCurrent(1);
      } else{
        setCurrent(current+1);
      }
      
    }
  }




  return (
    <>
    <div style={{"width":"100%"}}>

      <p style={{"position":"absolute","top":"30%",color:"white",fontSize:"20px","fontWeight":"600","marginLeft":"15px"}}>{current} - {mainEventSliderDatas.length}</p>

      <Slider className="mainUpperSlider" {...settings}>
        
        {mainEventSliderDatas 
        ? mainEventSliderDatas.map((img) => (
          <div key={img.id}>
            <img style={{"width":"100%"}} src={img.url} alt={img.alt}/>
            <div style={{"position":"fixed","bottom":"10%",color:"white",fontSize:"20px","fontWeight":"600","marginLeft":"15px"}}>
              <h2>{img.title}</h2>
              <p>{img.sub}</p>
            </div>
          </div>
        ))
        :""}
      </Slider>
    </div>

    </>
  )
}

export default MainEventSlider