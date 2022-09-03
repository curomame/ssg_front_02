import React from 'react'
import { useState } from 'react'
import Header from '../../components/common/Header'

function OrderShipCommentChange({setOpenChangeModal,setShipComment}) {

  const requestArr = ["부재 시 경비실에 맡겨주세요","부재 시 문 앞에 놓아주세요","직접 받겠습니다","배송 전에 연락주세요","직접 입력"]

  const [reqStatus, setReqStatus] = useState(0);

  const [reqMsg,setReqMsg] = useState('')


  const handleChangeReqStatus = (idx) => {
    setReqStatus(idx)
  }

  const handleChangeMessage =() => {
    
    if(reqStatus===4){
      setShipComment(reqMsg)
    } else {
      setShipComment(requestArr[reqStatus])
    }

    setOpenChangeModal(false)
  }

  return (
    <>
    <div className='orderShipCommentChangeBox'>

      <Header
        type={'text'}
        text="수령위치 선택"
        func={setOpenChangeModal}
      />

      <fieldset>
          <legend>택배배송 요청사항</legend>

        <div>

          {requestArr.map((req,idx) => {
            
            return <div key={idx}>
                <input 
                  type="radio"
                  id={idx}
                  name="contact"
                  value={idx}
                  checked={reqStatus===idx ? true : false}
                  onClick={()=>handleChangeReqStatus(idx)}
                  />
                <label htmlFor={idx}>{req}</label>

            {(idx===4)&&(reqStatus===4) ? <input type="textarea" value={reqMsg} onChange={(e) => setReqMsg(e.target.value)}/> : null}

          </div>


          })}


        </div>

      </fieldset>

      <div onClick={()=>handleChangeMessage()} className='orderShipCommentBottom'>
        변경하기
      </div>

    </div>
    
    </>
  )
}

export default OrderShipCommentChange