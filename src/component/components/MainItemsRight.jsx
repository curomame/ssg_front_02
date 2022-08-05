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
      
      <div className='mainFourCard'>
      <MainFourCard/>
      <MainTitleSub 
        title={"바캉스 휴가 시작 8월 빅세일 start"}
        sub={"신세계백화점 단 3일! 보내기 아쉬운 특가, 앵콜 세일로 다시 만나다! 최대 ~87% 세일" }
        price={"46020"}
        />
      <MainNowBuying/>
      </div>

      <div className='mainFourCard'>
      <MainFourCard/>
      <MainTitleSub 
        title={"바캉스 휴가 시작 8월 빅세일 start"}
        sub={"신세계백화점 단 3일! 보내기 아쉬운 특가, 앵콜 세일로 다시 만나다! 최대 ~87% 세일" }
        price={"46020"}
        />
      <MainNowBuying/>
      </div>
      
      <div className='mainFourCard'>
      <MainFourCard/>
      <MainTitleSub 
        title={"바캉스 휴가 시작 8월 빅세일 start"}
        sub={"신세계백화점 단 3일! 보내기 아쉬운 특가, 앵콜 세일로 다시 만나다! 최대 ~87% 세일" }
        price={"46020"}
        />
      <MainNowBuying/>
      </div>

    </>
  )
}

export default MainItemsRight