import React from 'react'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'
import MainFourCard from '../../parts/mainParts/MainFourCard'
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

        <MainFourCard/>
        <CommonTitleSub 
          title={"빈폴 레이디스"}
          sub={"신세계백화점 단 3일! 보내기 아쉬운 특가, 앵콜 세일로 다시 만나다! 최대 ~87% 세일" }
          type="mainFourTitleSub"
          price="25,234"
          />  
        <MainNowBuying/>
      
      
      </div>


    </>
  )
}

export default MainItemsRight