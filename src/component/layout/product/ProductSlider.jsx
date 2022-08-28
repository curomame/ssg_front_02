import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainEventSliderDatas from "../../../assets/datas/mainDatas/mainEventSliderDatas.json"

function ProductSlider({datas, height, numbering, }) {

  const [current, setCurrent ] = useState(1);

  const settings = {

    prev:0,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    afterChange(e){
      setCurrent(e+1);
    }
  }


  return (
    <>
    
    <div className='productSliderContainer'>

    <div className='productSliderNumbering'>
      <div></div>
      <p>
        0{current}/0{mainEventSliderDatas.length}
      </p>
    </div>

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