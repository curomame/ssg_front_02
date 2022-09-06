import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MyPagePointBox() {

  const [userPoint,setUserPoint] = useState(0);

  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+'/user/point',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => setUserPoint((res.data.data.point).toLocaleString()))
      .catch(err => console.error(err))

  },[])

  return (
    <>
    
    <div className='myPagePointBoxContainer'>
 
      <div><h3>신세계 포인트</h3></div>
      <div><p>{userPoint}원</p></div>

    </div>

    </>
  )
}

export default MyPagePointBox