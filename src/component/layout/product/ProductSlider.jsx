import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import mainEventSliderDatas from "../../../assets/datas/mainDatas/mainEventSliderDatas.json"
import { useNavigate } from 'react-router-dom';

function ProductSlider({imgs}) {

  const [current, setCurrent ] = useState(1);
  const navigate = useNavigate();

  // console.log(imgs)

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

  // const 

  return (
    <>
    
    {imgs && 
    
    <div className='productSliderContainer'>
      
      <div onClick={() => navigate(-1)} className='productSliderBackArrow'>
        <span className="material-icons-outlined">arrow_back</span>
      </div>

      <div className='productSliderNumbering'>
        
        <p>
          0{current}/0{imgs.length}
        </p>
      </div>

        <Slider className="mainUpperSlider" {...settings}>
          
          {imgs 
          ? imgs.map((img) => (
            <div key={img.idx}>
              <img style={{"width":"100%"}} src={process.env.REACT_APP_DISPLAY_IMG_URL+'/'+`${img.imageURL}`} alt={img.imgName}/>
              <div style={{"position":"fixed","bottom":"20%",color:"white",fontSize:"16px","fontWeight":"600","marginLeft":"15px"}}>
              </div>
            </div>
          ))
          :""}
        </Slider>
    </div>
    }


    </>
  )
}

export default ProductSlider