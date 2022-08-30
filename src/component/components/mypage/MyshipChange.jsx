import axios from 'axios'
import React, { useState } from 'react'

function MyshipChange({setTempShip,setChangeModal,data}) {
  
  const [addrDatas,setAddrDatas] = useState(
    {

      "addrId":data.addrId,
      "addrName" : data.addrName,
      "recipient" : data.recipient,
      "phoneNum" : data.phoneNum,
      "phoneNumSelect" : data.phoneNumSelect,
      "addrStreet" : data.addrStreet,
      "addrDetail" : "defaultAddr",
      "addrZipCode" : "12345", 
      "addrDefault" : false
}
  ) 
  
const onChangeText = (e) => {
  setAddrDatas({ ...addrDatas, [e.target.name]: e.target.value })
}

  const handleCloseAddr = () => {
    setChangeModal((prev) => !prev)
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

  const handleEditAddr =() => {
    axios.put(process.env.REACT_APP_TEST_URL+'/user/addr/mod',addrDatas,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }})
      .then(res => {
        setTempShip([...res.data.data])
      })
      
    handleResetAddr();
    setChangeModal(prev => !prev);
  }


  return (
    <>
    <div className='loginHeaderLayoutContainer'>
      <div className='loginHeaderLayout'>
        <div><span className="material-icons-outlined" onClick={() => setChangeModal((prev) => !prev)}>arrow_back</span></div>
        <div><h3>배송지 수정</h3></div>
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
        <div onClick={handleEditAddr}>수정완료</div>
      </div>

      </div>
    </div>
    </>
  )
}

export default MyshipChange