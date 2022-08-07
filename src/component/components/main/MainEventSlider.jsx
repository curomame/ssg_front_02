import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainEventSlider() {

  const settings = {
    classNmae:"",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  }

  //slick to go

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
       },
       {
        id:4,
        url:"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87",
        alt:"" 
       },
       {
        id:5,
        url:"https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87",
        alt:"" 
       }

  ]


  return (
    <>
    <Slider className="mainUpperSlider" {...settings}>

      {sliderjson 
      ? sliderjson.map((img) => (
        <div key={img.id}>
          <img style={{"width":"100%"}} src={img.url} alt={img.alt}/>
        </div>
      ))
      :""}
    </Slider>

    </>
  )
}

export default MainEventSlider