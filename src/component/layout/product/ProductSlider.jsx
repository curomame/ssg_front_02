import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainEventSliderDatas from "../../../assets/datas/mainDatas/mainEventSliderDatas.json"

function ProductSlider({datas, height, numbering, }) {

  const [current, setCurrent ] = useState(1);

  const settings = {

    state:{
      slideIndex: 0,
      updateCount: 0
    },
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    afterChange: () => {

      if(current >= mainEventSliderDatas.length){
        setCurrent(1);
      } else{
        setCurrent(current+1);
      }
      
    }
  }


  return (
    <>
    
    <div style={{"width":"100%", "height":"60%", "position":"relative"}}>

      <p style={{"border":"1px solid white","backgroundColor":"gray","padding":"2px 6px", "zIndex":"100" ,"position":"absolute",color:"white",fontSize:"14px","fontWeight":"600","letterSpacing":"-1px", "bottom":"5%","right":"45%"}}>
        {current}/{mainEventSliderDatas.length}
      </p>

      <Slider className="mainUpperSlider" {...settings}>
        
        {mainEventSliderDatas 
        ? mainEventSliderDatas.map((img) => (
          <div key={img.id}>
            <img style={{"width":"100%"}} src={img.url} alt={img.alt}/>
            <div style={{"position":"fixed","bottom":"20%",color:"white",fontSize:"16px","fontWeight":"600","marginLeft":"15px"}}>
            </div>
          </div>
        ))
        :""}
      </Slider>
    </div>

    </>
  )
}

export default ProductSlider