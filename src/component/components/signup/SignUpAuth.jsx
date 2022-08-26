import axios from 'axios'
import React from 'react'

function SignUpAuth() {

  const 이메일인증 = () => {
    console.log('이메일인증 클릭')
    axios.post('http://10.10.10.167:8080/email/authen',{
      "userId":"test123123",
      "email":"curomame@naver.com"
    }).then(res => console.log(res.data))
      .catch(err => console.error(err))
  }


  return (
    <>
      <div className='signupTopHead'>본인인증</div>

    <div className='signupAuthContainer'>
      <div className='signupAuthTop'>
        <div>자주 사용하시는 인증 수단으로 본인인증을 진행해주세요.</div>
      </div>


      <div className='signupAuthMethod'>

        <div className='signupAuthMethodParts'>

          <div>
            <span class="material-icons-outlined">phone_iphone</span>
            <div onClick={이메일인증}>휴대폰 인증</div>
          </div>
          
          
        </div>

        <div className='signupAuthMethodParts'>
          <div><span class="material-icons-outlined">email</span></div>
          <div>이메일 인증</div>
        </div>

      </div>

      <div className='signupAuthUnder'>
        <div>∙ 법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</div>
        <div>∙ 본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.</div>
        <div>NICE평가정보(주) 고객센터 : 1600-1522</div>
        <div>코리아크레딧뷰로(주) 고객센터 : 02-708-1000</div>
      </div>

    </div>
    </>
  )
}

export default SignUpAuth