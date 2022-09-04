import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'
import MainFourCardSet from '../../parts/mainParts/MainFourCardSet'



function MainItemsRight() {

  //해당 메인 아이템 이미지 들고오기
  const [cardDatas, setCardDatas] = useState('')

  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+`/productCtgList/lCtg/1/1`)
    .then(res => setCardDatas(res.data.productTitleDtoList.slice(0,3)))
    .catch(err => console.error(err))

  },[])

  return (
    <>
    
      <CommonTitleSub
        title="Happy Lounge"
        sub="당신의 쇼핑이 특별해지는, 매일 오전 9시"
        link="/"
        type="mainTitleSubTotal"
        />
      
      <div className='mainFourCard'>

      {cardDatas && cardDatas.map((item,idx) => {
        return <MainFourCardSet
                  key={idx}
                  data={item}/>
      })}

      
      </div>


    </>
  )
}

export default MainItemsRight