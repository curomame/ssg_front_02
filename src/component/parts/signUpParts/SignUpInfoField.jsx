import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import SignUpAddressPopup from "./SignUpAddressPopup";



function SignUpInfoField({ integrateInfo, setIntegrateInfo }) {

  const [idValid, setIdValid] = useState(null);

  const [passwordValidate, setpasswordValidate] = useState("");


  const [signUpData, setSignUpData] = useState({
    "userId": "",
    "pwd": "",
    "pwdCheck": "",
    "name": "",

    "zoneCode": "",
    "roadAddress": "",
    "detailAddress": "",

    "phoneNum": "",
    "email": "",
  });

  useEffect(() => {
    // 여기에 Test 코드를 작성
    // console.log(signUpData,'jere');
    setIntegrateInfo({
      ...integrateInfo,
      ...signUpData
    });
  }, [signUpData]);


  const handleChange = (e) => {

    if(e.target.name === "userId"){
      handleCheckId(e)
    }

    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // 비밀번호 검증을 위한 코드
  const handlePassWordCheck = (chk) => {
    if (signUpData.password === chk) {
      setpasswordValidate("비밀번호가 일치합니다.");
    } else {
      setpasswordValidate("비밀번호가 일치하지 않습니다.");
    }
  };


  const handleCheckId = (e) => {
    
    axios.get(process.env.REACT_APP_TEST_URL+'/user/idcheck',
    {
      headers:{
        "userId":e.target.value
      }
    })
    .then(res => {
      {res.data.data 
        ? setIdValid("사용이 불가능한 아이디입니다 :-(")
        : setIdValid("사용 가능한 아이디입니다 :-)")}
    })
    .catch(err => console.error(err))

    
    
  }

  return (


    <div className="signupInfoFieldContainer">

      <div className="signupInfoFieldBox">
        <div className="signupInfoFieldBoxUnder">
          <div><p>아이디</p></div>
          <div className="signupInfoIdInput">
            <input
              type="text"
              name="userId"
              placeholder="영어 또는 숫자로 6~20자리"
              value={signUpData.userId}
              onChange={handleChange}
              maxLength="20"
            />
          {idValid ? <span>{idValid}</span> : ""}
          </div>
          
        </div>


      </div>

      <hr />

      <div className="signupInfoFieldBoxUnder">
        <div><p>비밀번호</p></div>
        <div>
          <input
            type="password"
            name="pwd"
            placeholder="영문, 숫자 조합 8~20자리"
            value={signUpData.pwd}
            onChange={handleChange}
            maxLength="20"
          />

          <br />
          {/* 비밀번호 재입력칸 */}
          <input
            type="password"
            name="pwdCheck"
            placeholder="비밀번호 재확인"
            value={signUpData.pwdCheck}
            maxLength="20"
            onChange={handleChange}
          />

          <br />

          {/* 비밀번호 입력칸 */}
          <span>{passwordValidate}</span>
        </div>
      </div>

      <hr />

      <div className="signupInfoFieldBoxUnder">
        <div><p>이름</p></div>
        <input
          type="text"
          name="name"
          value={signUpData.name}
          onChange={handleChange}
        />
      </div>

      <hr />


        {/* <SignUpAddressPopup
          addressValue={signUpData}
          setAddressValue={setSignUpData}
        /> */}

      <div className="signupInfoFieldBoxUnder">
        <div><p>주소</p></div>
        <input
          type="text"
          name="detailAddress"
          value={signUpData.detailAddress}
          onChange={handleChange}
        />
      </div>

      <hr />

      <div className="signupInfoFieldBoxUnder">
        <div><p>휴대폰 번호</p></div>
        <input
          type="number"
          name="phoneNumber"
          value={signUpData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <hr />

        <div className="signupInfoFieldBoxUnder">
          <div><p>이메일주소</p></div>
          <input
            type="text"
            name="email"
            placeholder="이메일주소"
            value={signUpData.userEmail}
            onChange={handleChange}
          />
        </div>
    </div>
  );
}

export default SignUpInfoField;
