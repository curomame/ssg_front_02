import axios from 'axios';
import React from 'react'
import { useRecoilState } from 'recoil'
import { TempAuthState } from '../recoil/atoms/TempAuthState'

function useStatusUpdate() {
  
  // console.log('useSatusUpdate 발생')
  const tempToken = localStorage.getItem('Authorization');
  const [tempStatus, setTempStatus] = useRecoilState(TempAuthState);
  const url = `${process.env.REACT_APP_TEST_URL}/orders/mypage`
  // console.log(url)

  if(tempStatus === false){
    // console.log('스테이터스가 false라 실행됨')

    if(tempToken){
      // console.log('토큰 테스트 실행')
      axios.get(url,{
        headers:{
          "Authorization":tempToken
        }
      }).then(res => {
        // console.log(tempToken);
        // console.log(res.data.data,'useToken data  내용')
        {res.data.data==='good' ? setTempStatus(true) : setTempStatus(false)}
      })
        .catch(err => console.error('axios auth token 에러 발생'+err))

      return null; 
    }
    // console.log('토큰 없을 무')
    
  }
  
  return null;
}

export default useStatusUpdate