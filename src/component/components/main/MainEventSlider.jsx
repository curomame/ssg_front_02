import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainEventSliderDatas from "../../../assets/datas/mainDatas/mainEventSliderDatas.json"
import { useEffect } from 'react';

function MainEventSlider() {

  const [current, setCurrent ] = useState(1);

  const [pause, setPause] = useState(false)

  const [settings,setSettings] = useState({

    state:{
      slideIndex: 0,
      updateCount: 0,
    },

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    afterChange: (e) => {
      setCurrent(e+1);
    }

  })

  const handlePause = () => {
    
    if(!pause){
      setSettings((prev) => ({...prev,...{"autoplay":false}}))
    } else {
      setSettings((prev) => ({...prev,...{"autoplay":true}}))
    }

    setPause(!pause);
    
  }

  // useEffect(()=>{
  // },[settings])

  return (
    <>
    
    <div className='mainEventSliderContainer' >

      <p className='mainEventSliderBox' >{current} - {mainEventSliderDatas.length}</p>

      <Slider className="mainUpperSlider" {...settings}>
        
        {mainEventSliderDatas 
        ? mainEventSliderDatas.map((img) => (
          <div key={img.id}>
            <img style={{"width":"100%"}} src={img.url} alt={img.alt}/>
            <div style={{"position":"fixed","bottom":"20%",color:"white",fontSize:"16px","fontWeight":"600","marginLeft":"15px"}}>
              <h2>{img.title}</h2>
              <p>{img.sub}</p>
            </div>
          </div>
        ))
        :""}

      </Slider>

      
      <div onClick={()=>handlePause()} className='mainEventSliderStop'>
          {pause 
          ? <span className="material-icons">play_arrow</span>
          : <span className="material-icons-outlined">pause</span>}
      </div>
    
    </div>

    </>
  )
}

export default MainEventSlider