import React from 'react'
import MainTitleSub from '../parts/MainTitleSub'

function MainItemsRight() {
  return (
    <>
      <MainTitleSub/>
      
      <div className='MainItemsRight'>

        <div className='MainItemLeftParts'>
          <img src="" alt="Rimg1" />
        </div>
        <div className='MainItemRightParts'>
          <div><img src="" alt="Limg1" /></div>
          <div><img src="" alt="Limg2" /></div>
          <div><img src="" alt="Limg3" /></div>
          <div><img src="" alt="Limg4" /></div>
        </div>

      </div>

      <div className='titleUnderIcon'>
        <div className='titleBuying'><i>N명구매중</i></div>
        <div className='titleIcons'>
          <div><i>O</i></div>
          <div><i>O</i></div>
        </div>
      </div>
    </>
  )
}

export default MainItemsRight