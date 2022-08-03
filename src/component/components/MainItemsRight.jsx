import React from 'react'
import MainFourCard from '../parts/MainFourCard'
import MainNowBuying from '../parts/MainNowBuying'
import MainTitleSub from '../parts/MainTitleSub'

function MainItemsRight() {

  //해당 메인 아이템 이미지 들고오기

  return (
    <>
      <MainTitleSub
        title="Happy Lounge"
        sub="당신의 쇼핑이 특별해지는, 매일 오전 9시"
        link="'/'"
        />
      <MainFourCard/>
      {/* 아이템 이미지 넘기기 */}
      <MainNowBuying/>

      <MainFourCard/>
      {/* 아이템 이미지 넘기기 */}
      <MainNowBuying/>

      <MainFourCard/>
      {/* 아이템 이미지 넘기기 */}
      <MainNowBuying/>
    </>
  )
}

export default MainItemsRight