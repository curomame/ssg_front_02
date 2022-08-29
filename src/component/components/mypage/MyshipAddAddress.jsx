import React from 'react'
import MyShipAddrAPI from '../../parts/mypage/MyShipAddrAPI';
import Header from '../common/Header'
import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';

function MyshipAddAddress({setAddModal}) {

  const [address,setAddress] = useState(null);
  const [zonecode,setZonecode] = useState(null);
  const [isModalVisible,setIsModalVisible] = useState(true);

const onCompleteDaumPostCode = (data) => {
    setAddress(data.address);
    setZonecode(data.zoneCode);
    setIsModalVisible(false);
    console.log(data);
};

  const handleSubmit = (e) => {
    e.preventDefault()  
    console.log(e);
  }

  return (
    <>
    <div className='loginHeaderLayoutContainer'>
      <div className='loginHeaderLayout'>
        <div><span className="material-icons-outlined" onClick={() => setAddModal((prev) => !prev)}>arrow_back</span></div>
        <div><h3>배송지 관리</h3></div>
        <div></div>
      </div>


      <div className='myShipInputContainer'>
        <div className='myShipInputBoxs'>
          <div><p>주소별칭</p></div>
          <div><input type="text" placeholder='주소별칭 입력'/></div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>받는분</p></div>
          <div><input type="number" placeholder='받는분 성함 입력'/></div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>휴대폰</p></div>
          <div><input type="number" placeholder='휴대폰(숫자만 입력)'/></div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>전화번호(선택)</p></div>
          <div><input type="text" placeholder='전화번호(숫자만 입력)'/></div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>배송주소</p></div>
          <div className='myShipInputAddr'>
            <input type="text" placeholder='배송 주소 입력'/>
            <div>우편번호</div>
            
          </div>
        </div>
        <div className='myShipInputLine'></div>

        <DaumPostCode onComplete={onCompleteDaumPostCode} />

      </div>
    </div>
    </>
  )
}

export default MyshipAddAddress