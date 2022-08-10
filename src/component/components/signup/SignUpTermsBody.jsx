import React from 'react'
import SignupButton from '../../parts/signUpParts/SignupButton'
import SignUpCheckBox from '../../parts/signUpParts/SignUpCheckBox'

function SignUpTermsBody() {
  return (
    <>
    <div>
    <SignUpCheckBox label="약관 전체 동의" hideoption="Y"/>
    </div>
    <br/>
    <div>
      <h3>신세계 포인트</h3>
    <ul>
        <li><SignUpCheckBox label="(필수) 신세계포인트 회원 이용약관"/></li>
        <li><SignUpCheckBox label="(필수) 개인정보 수집 및 이용 동의"/></li>
        <li><SignUpCheckBox label="(필수) 필수 정보 이마트/신세계백화점 공동
개인정보 수집 이용 동의"/></li>
      </ul>
    </div>
    <br/>
    <div>
      <h3>SSG.COM</h3>
    <ul>
        <li><SignUpCheckBox label="(필수) SSG.COM 회원 이용약관"/></li>
        <li><SignUpCheckBox label="(필수) 개인정보 수집 및 이용 등의"/></li>
      </ul>
    </div>

      <br/>
      <SignupButton url="../signup/info" title="다음"/>
    </>
  )
}

export default SignUpTermsBody