import React from 'react'
import { Link } from 'react-router-dom'

function MainFourCard({imgUrl}) {

  // src, link

  return (
    <>
      <div className='MainItemsRight'>

        <div  className='MainItemLeftParts'>
          <Link to='/'><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Rimg1" /></Link>
        </div>
        <div className='MainItemRightParts'>
          <div><Link to='/'><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg1" /></Link></div>
          <div><Link to='/'><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg2" /></Link></div>
          <div><Link to='/'><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg3" /></Link></div>
          <div><Link to='/'><img src={process.env.REACT_APP_DISPLAY_IMG_URL+imgUrl} alt="Limg4" /></Link></div>
        </div>

      </div>
    </>
  )
}

export default MainFourCard