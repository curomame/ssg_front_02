import React from 'react'
import CommonFooter from '../common/CommonFooter'
import Header from '../common/Header'
import MyshipAddAddress from './MyshipAddAddress'
import { useState } from 'react';
import MyshipCards from '../../parts/mypageParts/MyshipCards';
import axios from 'axios';
import { useEffect } from 'react';
import MyshipChange from './MyshipChange';

function MyShipaddress() {

  const [tempShip,setTempShip] = useState(null);
  const [addModal,setAddModal] = useState(false);
  const [tempCheck,setTempCheck] = useState('');

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
    
    // eslint-disable-next-line no-lone-blocks
    {window.confirm('기본 배송지를 변경하시겠습니까?') 
    ? changeShipDefault()
    : console.log('변경안함')}

  }

  console.log(tempCheck);

  const changeShipDefault = () => {
    axios.put(`${process.env.REACT_APP_TEST_URL}/user/addr/modDefault/${tempCheck}`,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => console.log(res.data))
      .catch(err => console.error(err))
  }


  useEffect(()=> {
    getShipData()
  }
  ,[])


  useEffect(() => {
    {tempShip && setTempCheck(tempShip[0].addrId)}
  },[tempShip])


  



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
          tempCheck={tempCheck}
          setTempCheck={setTempCheck}
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