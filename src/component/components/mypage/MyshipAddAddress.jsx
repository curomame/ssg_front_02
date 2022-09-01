import React from 'react'
import MyShipAddrAPI from '../../parts/mypageParts/MyShipAddrAPI';
import Header from '../common/Header'
import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';
import axios from 'axios';

function MyshipAddAddress({setAddModal,setTempShip}) {

  const [addrDatas,setAddrDatas] = useState(
    {
      "addrName" : "",
      "recipient" : "",
      "phoneNum" : "",
      "phoneNumSelect" : "",
      "addrStreet" : "",
      "addrDetail" : "defaultAddr",
      "addrZipCode" : "12345", 
      "addrDefault" : false
}
  ) 
  
const onChangeText = (e) => {
  setAddrDatas({ ...addrDatas, [e.target.name]: e.target.value })
}

  const handleCloseAddr = () => {
    setAddModal((prev) => !prev)
  }

  const handleResetAddr = () => {
    setAddrDatas({
      "addrName" : "",
      "recipient" : "",
      "phoneNum" : "",
      "phoneNumSelect" : "",
      "addrStreet" : "",
      "addrDetail" : "",
      "addrZipCode" : "",
      "addrDefault" : false
})
  }

  const handleAddAddr =() => {
    axios.post(process.env.REACT_APP_TEST_URL+'/user/addr/add',addrDatas,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }})
      .then(res => {
        setTempShip([...res.data.data])
      })
      
    handleResetAddr();
    setAddModal(prev => !prev);
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
          <div><input 
          type="text" 
          placeholder='주소별칭 입력' 
          name="addrName"
          value={addrDatas.addrName}
          onChange={(e) => onChangeText(e)}
          /></div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>받는분</p></div>
          <div>
            <input 
            type="text" 
            placeholder='받는분 성함 입력'
            name="recipient"
            value={addrDatas.recipient}
            onChange={(e) => onChangeText(e)}
            />
          </div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>휴대폰</p></div>
          <div><input 
          type="number" 
          placeholder='휴대폰(숫자만 입력)'
          name="phoneNum"
          value={addrDatas.phoneNum}
          onChange={(e) => onChangeText(e)}
          
          /></div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>전화번호(선택)</p></div>
          <div><input 
          type="text"
          placeholder='전화번호(숫자만 입력)'
          name="phoneNumSelect"
          value={addrDatas.phoneNumSelect}
          onChange={(e) => onChangeText(e)}
          
          /></div>
        </div>
        <div className='myShipInputLine'></div>

        <div className='myShipInputBoxs'>
          <div><p>배송주소</p></div>
          <div className='myShipInputAddr'>
            <input 
            type="text" 
            placeholder='배송 주소 입력'
            name="addrStreet"
            value={addrDatas.addrStreet}
            onChange={(e) => onChangeText(e)}
            
            />
            <div>우편번호</div>
            
          </div>
        </div>
        <div className='myShipInputLine'></div>


      <div style={{"display":"flex","justifyContent":"space-between","height":"100px","lineHeight":"100px"}}>
        <div onClick={handleResetAddr}>초기화</div>
        <div onClick={handleCloseAddr}>취소</div>
        <div onClick={handleAddAddr}>등록</div>
      </div>

      </div>
    </div>
    </>
  )
}

export default MyshipAddAddress