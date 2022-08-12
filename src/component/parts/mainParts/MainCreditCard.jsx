import React from 'react'
import MainTitleSub from './MainTitleSub'

function MainCreditCard({numbering}) {
  
  const datas = [
    {
      "id":1,
      "icon":"https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png",
      "link":"/",
      "title":"SSG.COM 카드",
      "sub":"첫 결제 쿠폰/ 즉시 할인 외",
      "color":"#363635"
    },
    {
      "id":2,
      "icon":"https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi75.png",
      "link":"/",
      "title":"SSG.COM 카드",
      "sub":"첫 결제 쿠폰/ 즉시 할인 외",
      "color":"#006bff"
    },
    {
      "id":3,
      "icon":"https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi75.png",
      "link":"/",
      "title":"SSG.COM 카드",
      "sub":"첫 결제 쿠폰/ 즉시 할인 외",
      "color":"#006bff"
    },
    
    
  ]
  
  return (
    <>

<div className='mainCardsContainer' >
    {datas && 
    
    datas.map((data) => (
      
        <div className='mainCards' style={{"background":`${data.color}`}}>
          <div className='mainCardsBox'>
            <div className='upperCard'>
              <div><span style={{"fontSize":"20px"}}>~5</span>만원</div>
              <div className="upperCardIcon"><img src={data.icon} alt="" /></div>
            </div>
            
            <div className='mainCardTitleSub'>
              <div>{data.title}</div>
              <div>{data.sub}</div>
            </div>

          </div>
        </div>
      
    ))
    }
    </div>
    </>
  )
}

export default MainCreditCard