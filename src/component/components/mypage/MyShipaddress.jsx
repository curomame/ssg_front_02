import React from 'react'
import CommonFooter from '../common/CommonFooter'
import Header from '../common/Header'
import MyshipAddAddress from './MyshipAddAddress'
import { useState } from 'react';
import MyshipCards from '../../parts/mypage/MyshipCards';
import axios from 'axios';
import { useEffect } from 'react';
import MyshipChange from './MyshipChange';

function MyShipaddress() {

  const [tempShip,setTempShip] = useState(null);
  const [addModal,setAddModal] = useState(false);

  const [tempCheck, setTempCheck] = useState(0);

  const getShipData = async () => {
    const shipData = await axios.get(process.env.REACT_APP_TEST_URL+'/user/addr/get',{
      headers:{
        'Authorization':localStorage.getItem('Authorization')
      }
    })
    .then(res => res)
    .catch(err => console.error(err))
    setTempShip(shipData.data.data);
  }

  const handleChangeDefaultShip =() => {
    
  }

  useEffect(()=> {
    getShipData()    
  }
  ,[])


  return (
    <>

    
    <Header
      type={'myship'}/>


    <div className='myshipContainer'>
      <div className='myshipTop' >[MY배송지]</div>
      <div className='myshipList'>
        <h2>MY배송지</h2>
      </div>


      {tempShip 
      ? 
      <fieldset>
        {tempShip.map((data,i) => (
          <MyshipCards
          setTempShip={setTempShip}
          key={i}
          data={data}
          />
        ))}
      </fieldset>
      : <div className='myshipNAN' >
          <img style={{"width":"90px"}} src="https://sui.ssgcdn.com/ui/m_ssg/img/cs/ico_myodr_nodata.png" alt="" />
          <div>등록된 My배송지가 없습니다.</div>
        </div>}


      <div onClick={()=>setAddModal(!addModal)} className='myshipAddNew'>+ 새 배송지 추가</div>
    </div>

    
    {addModal && 
    <MyshipAddAddress
    setAddModal={setAddModal}
    setTempShip={setTempShip}
    />}

    <div className='myshipThisTime'>
      <div><p>이번만배송지 설정</p></div>
      <div onClick={handleChangeDefaultShip}><p>기본 배송지 설정</p></div>
    </div>

    <CommonFooter/>

    </>
  )
}

export default MyShipaddress