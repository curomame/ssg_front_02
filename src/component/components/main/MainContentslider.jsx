import React from 'react'
import MainTitleSub from '../../parts/mainParts/MainTitleSub';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub';
import MainSliderQuarter from './MainSliderQuarter';



function MainContentslider() {

  const sliderjson = [

    {
     id:1,
     url:"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87",
     alt:"" 
    },
    {
      id:2,
      url:"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87",
      alt:"" 
     },
     {
      id:3,
      url:"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87",
      alt:"" 
     }

]


  return (
    <>
    <CommonTitleSub
        title="New Service"
        sub="새롭게 오픈한 서비스를 소개해드려요"
        type="mainTitleSubTotal"
        />

    <MainSliderQuarter/>
    
    {/* <div style={{"width":"100%", "overflow":"scroll"}}>
      <div className='mainContentsSlider' style={{"width":`${sliderjson.length*100}%`, "display":"flex" }}>
              {sliderjson &&
                sliderjson.map((slide) => (

                <div style={{"display":"inline"}}>
                  <div><img style={{"width":"100%"}} src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87" alt="" /></div>
                  <div><MainTitleSub title={"2022 추석 명절"} sub={"미리 준비하는 올 추석 명절 선물"}/></div>
                </div>

                ))
              }

        </div>
      </div> */}
    </>
  )
}

export default MainContentslider