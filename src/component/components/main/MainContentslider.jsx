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
    
    </>
  )
}

export default MainContentslider