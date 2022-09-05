import React from 'react'
import CommonTitleSub from '../commonsParts/CommonTitleSub';
import MainFourCard from './MainFourCard';
import MainNowBuying from './MainNowBuying';

function MainFourCardSet({data}) {


  // console.log(data)
  return (
    <>
    <div>
      <MainFourCard
        imgUrl={data.titleImgUrl}/>

        <CommonTitleSub
          title={"빈폴 레이디스"}
          sub={"신세계백화점 단 3일! 보내기 아쉬운 특가, 앵콜 세일로 다시 만나다! 최대 ~87% 세일" }
          type="mainFourTitleSub"
          price="25,234"
          />  

        <MainNowBuying
          productId={data.productId}/>

        <div style={{"borderTop":"1px solid rgba(0, 0, 0, 0.03)", margin:"8px"}}></div>
    </div>
    </>
  )
}

export default MainFourCardSet