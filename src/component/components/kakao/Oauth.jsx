import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { TempAuthState } from '../../../recoil/atoms/TempAuthState';

function Oauth() {

  const navigate = useNavigate();
  const params = useParams();
  const [tempAuth, setTempAuth] = useRecoilState(TempAuthState);
  

  useEffect(() => {

    setTempAuth(true);
    
    localStorage.setItem('Authorization',params.params)
    navigate('/')

  },[])
  return (
    <>
    </>
  )
}

export default Oauth