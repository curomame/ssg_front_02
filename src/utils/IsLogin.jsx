import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { TempAuthState } from '../recoil/atoms/TempAuthState'

function IsLogin() {

  const tempAuth = useRecoilValue(TempAuthState);
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(1)
    if(!tempAuth){
      return navigate('/login')
    }
  },[])

  

  return null;
}

export default IsLogin