import React from "react";
import SignUpInfoField from "../../parts/signUpParts/SignUpInfoField";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpInformation() {

  const url = process.env.REACT_APP_TEST_URL+"/user/signup";
  const navigate = useNavigate();


  const [integrateInfo, setIntegrateInfo] = useState({
    
    
    "userId" : "",
    "pwd" : "",
    "name" : "",
    "phoneNum" : "010-0000-0000",
    "email" : "",
    "birthDate" : "",
    "adonSsgPoint" : false,
    "adonSsgCom" : true,
    "pointEmail" : true,
    "pointSsgPoint" : true,
    "pointEmart" : true,
    "pointDepart" : false,
    "pointSms" : false,
    "pointPost" : false,
    "pointTele" : false,
    "comEmail" : false,
    "comSms" : false,
    "userAddress": {
          "addrStreet":"",
          "addrDetail":"",
          "addrZipCode":"",
          "addrDefault" : true
        }

  });
  

  useEffect(() => {
  }, [integrateInfo]);

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(integrateInfo);

    axios.post(url, integrateInfo)
      .then((res) => {
        if(res.data.status === 200){
          navigate('/signup/auth')
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="signupTopHead">회원정보</div>

      <SignUpInfoField
        integrateInfo={integrateInfo}
        setIntegrateInfo={setIntegrateInfo}
      />

      
      {/* <SignUpTopCard title="광고 정보 수신 동의" /> */}
      {/* <SignUpCheckAd
        integrateInfo={integrateInfo}
        setIntegrateInfo={setIntegrateInfo}
      /> */}

      <div className="signupEntryButton">
        <div onClick={handleSignUp}>
          가입하기
        </div>
      </div>

    </>
  );
}

export default SignUpInformation