import React from 'react'
import CommonFooter from '../common/CommonFooter'
import Header from '../common/Header'
import MyshipAddAddress from './MyshipAddAddress'
import { useState } from 'react';
import MyshipCards from '../../parts/mypage/MyshipCards';

function MyShipaddress() {

  const [tempShip,setTempShip] = useState(true);
  const [addModal,setAddModal] = useState(false);

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
      ? <MyshipCards/>
      : <div className='myshipNAN' >
          <img style={{"width":"90px"}} src="https://sui.ssgcdn.com/ui/m_ssg/img/cs/ico_myodr_nodata.png" alt="" />
          <div>등록된 My배송지가 없습니다.</div>
        </div>}

      

      <div onClick={()=>setAddModal(!addModal)} className='myshipAddNew'>+ 새 배송지 추가</div>
    </div>

    {addModal && 
    <MyshipAddAddress
    setAddModal={setAddModal}
    />}

    <CommonFooter/>

    </>
  )
}

export default MyShipaddress