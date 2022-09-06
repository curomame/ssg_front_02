import axios from 'axios';
import React from 'react'
import { useRecoilState } from 'recoil'
import { TempAuthState } from '../recoil/atoms/TempAuthState'

function useStatusUpdate() {
  

  //만료되었을때의 리프래쉬 토큰

  // console.log('useSatusUpdate 발생')
  const tempToken = localStorage.getItem('Authorization');
  
  const refreshToken = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjI0NDE0MzUsImV4cCI6MTY2MzY1MTAzNX0.vn03TCKrCtqNy1TuSPPIRQOoywpv-suj2jbCRaRlnK8"
  // const tempToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjY29zc2cxIiwiSWQiOjEwMSwiUm9sZSI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpYXQiOjE2NjI0Mzk3NTQsImV4cCI6MTY2MjQzOTc1NX0.SWO0Y92CwyrpdmvaWHx-Z7wo462AmFi0v2ju51W0jRI"

  //
  const refreshMyToken = () => {


    axios.post(process.env.REACT_APP_TEST_URL+'/auth/refresh',{
      "refreshToken":refreshToken
    }
    ).then(res => console.log(res))
      .catch(err => console.error(err))

  }



  const [tempStatus, setTempStatus] = useRecoilState(TempAuthState);
  const url = `${process.env.REACT_APP_TEST_URL}/user/moduser`
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
        console.log(res.data,'useToken data  내용')
        {res.data.status===200 ? setTempStatus(true) : setTempStatus(false)}
      })
        .catch(err => {if(err.response.data.code === "JT001"){
          refreshMyToken()
        }})

      return null; 
    }
    // console.log('토큰 없을 무')
    
  }
  
  return null;
}

export default useStatusUpdate