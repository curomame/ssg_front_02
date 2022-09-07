import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SignUpAuth() {

  const navigate = useNavigate()
  const location = useLocation()

  const [ userId , email, phoneNum] = [location.state.userId, location.state.email,location.state.phoneNum]

  const [authModal, setAuthMoal] = useState(false)
  const [authNumber, setAuthNumber] = useState('')

  const [count, setCount] = useState(60); 



  const handleEmailAuth = () => {
    // console.log('handleEmailAuth 클릭')

    setAuthMoal(true);
    axios.post(process.env.REACT_APP_TEST_URL+'/auth/email',{
      "userId":userId,
      "email":email
    }).then(res => console.log(res.data.status))
      .catch(err => console.error(err))
  }

  const handlePostAuthNumber = () => {
    axios.post(process.env.REACT_APP_TEST_URL+'/auth/confirm',{

        "email" : email,
        "phoneNum" :phoneNum,
        "userId": userId,
        "key" : authNumber

    }).then(res => {if(res.data.data ){
      window.alert('가입이 정상적으로 완료되었습니다 :->')
      setAuthNumber("");
      setAuthMoal(false);
      navigate('/');
    } else {
      window.alert(`인증번호가 올바르지 않습니다. :-(`)
    }})
    .catch(err => console.error(err))
    
    
  }

  const handleSMSAuth = () => {
    setAuthMoal(true);
    axios.post(process.env.REACT_APP_TEST_URL+'/auth/sms',{
        "phoneNum" : phoneNum,
         "userId": userId
    }).then(res => console.log(res))
      .catch(err => console.error(err))


  }

  // const counting = () => {
  //   setCount(count => count-1)
  // }

  // useEffect(() => {
  //   if(authModal===true){
  //     setInterval(() => {

  //       if(count<0){
  //         clearInterval()
  //       }

  //       counting()

  //     }, 1000);
  //   }

  // },[authModal])

  return (
    <>
      <div className='signupTopHead'>본인인증</div>

    <div className='signupAuthContainer'>
      <div className='signupAuthTop'>
        <div>자주 사용하시는 인증 수단으로 본인인증을 진행해주세요.</div>
      </div>


      <div className='signupAuthMethod'>

        <div className='signupAuthMethodParts'>

          <div onClick={handleSMSAuth}>
            <span className="material-icons-outlined">phone_iphone</span>
            <div >휴대폰 인증</div>
          </div>
          
          
        </div>

        <div onClick={handleEmailAuth} className='signupAuthMethodParts'>
          <div><span className="material-icons-outlined">email</span></div>
          <div >이메일 인증</div>
        </div>

      </div>

      <div className='signupAuthUnder'>
        <div>∙ 법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</div>
        <div>∙ 본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.</div>
        <div>NICE평가정보(주) 고객센터 : 1600-1522</div>
        <div>코리아크레딧뷰로(주) 고객센터 : 02-708-1000</div>
      </div>

      {authModal 
      ? 
        <div className='signupAuthModalContainer'>
          <div className='signupAuthModalBox'>
            <div>
              <div>인증 번호를 입력해주세요</div>
              {/* <div>남은시간 : {count} 초</div> */}
              <div><input type="number" value={authNumber} onChange={(e) => setAuthNumber(e.target.value)}/></div>
              <div className={authNumber ? "buttonChecked": null} onClick={handlePostAuthNumber} >인증확인</div>
            </div>
          </div>
        </div>

      : null}

    </div>
    </>
  )
}

export default SignUpAuth