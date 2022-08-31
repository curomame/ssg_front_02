import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import MyshipChange from '../../components/mypage/MyshipChange';

function MyshipCards({data,setTempShip,tempCheck,setTempCheck}) {

  const [changeModal,setChangeModal] = useState(false);

  const handleDeleteAddr = () => {

    const status = window.confirm('정말로 삭제하시겠습니까?')
    
    if(status){
      axios.delete(process.env.REACT_APP_TEST_URL+"/user/addr/del/"+data.addrId,{
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
      })
      .then(res => setTempShip([...res.data.data]))
      .catch(err => console.log(err))
    }
  }

  // console.log(data.addrDefault);

  return (
    <>
      <div className='myShipCardContainer'>

        <input 
          type="checkbox" 
          id={data.addrId} 
          onChange={(e) => setTempCheck(e.target.id)} 
          checked={Number(tempCheck)===Number(data.addrId) ? true : false}/>

        <div className='myShipCardAddressNameBox'>
          <div className='myShipCardAddressName'>
            <div><p>{data.addrName}</p>{data.addrDefault ? <span>기본배송지</span> : null}</div>
            <div style={{"display":"flex"}}>
              <p onClick={()=>setChangeModal(true)}>수정</p>
              
              {data.addrDefault 
              ? null
              : <p onClick={handleDeleteAddr}>삭제</p>}
            </div>
          </div>

          <div>{data.addrZipCode}</div>
          <div>도로명 주소 : {data.addrStreet}</div>
          <div>지번 주소 : {data.addrDetail}</div>
        </div>

      </div>

      <hr />


      {changeModal && 
      <MyshipChange
      data={data}
      setChangeModal={setChangeModal}
      setTempShip={setTempShip}
      />
      }
      
    </>
  )
}

export default MyshipCards