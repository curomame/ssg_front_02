import React from 'react'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'
import MainFourCard from '../../parts/mainParts/MainFourCard'
import MainFourCardSet from '../../parts/mainParts/MainFourCardSet'
import MainNowBuying from '../../parts/mainParts/MainNowBuying'
import MainTitleSub from '../../parts/mainParts/MainTitleSub'


function MainItemsRight() {

  //해당 메인 아이템 이미지 들고오기

  return (
    <>
      <CommonTitleSub
        title="Happy Lounge"
        sub="당신의 쇼핑이 특별해지는, 매일 오전 9시"
        link="/"
        type="mainTitleSubTotal"
        />
      
      <div className='mainFourCard'>

        {/* 반복되는 부분 */}

        

        <MainFourCardSet/>
        <MainFourCardSet/>
        <MainFourCardSet/>
      
      
      </div>


    </>
  )
}

export default MainItemsRight