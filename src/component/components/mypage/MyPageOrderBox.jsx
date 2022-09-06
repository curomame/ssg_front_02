import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MyPageOrderStatus from '../../parts/mypageParts/MyPageOrderStatus'

function MyPageOrderBox() {

  const [datas, setDatas] = useState(null)
  const [tempModal,setTempModal] = useState(false);

  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+'/orders/ordersList',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => setDatas(res.data.data))
      .catch(err => console.error(err))

  },[])


  return (
    <>
    
    <div onClick={()=>setTempModal(!tempModal)} className='mypageOrderBoxContainer'>

      <div><h2>주문/배송 조회 {'>'}</h2></div>
      <div><hr /></div>
      <div><p>주문/배송조회 보러가기 {'>'}</p></div>

    </div>

    {tempModal && <MyPageOrderStatus
                    datas={datas}/>}
      

    </>
  )
}

export default MyPageOrderBox