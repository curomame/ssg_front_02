import React from 'react'
import { Link } from 'react-router-dom'

function MainFourCard({imgUrl}) {

  // src, link

  return (
    <>
      <div className='MainItemsRight'>

        <div  className='MainItemLeftParts'>
          <img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Rimg1" />
        </div>
        <div className='MainItemRightParts'>
          <div><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg1" /></div>
          <div><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg2" /></div>
          <div><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg3" /></div>
          <div><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg4" /></div>
        </div>

      </div>
    </>
  )
}

export default MainFourCard