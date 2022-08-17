import React from "react";
import SignUpInfoField from "../../parts/signUpParts/SignUpInfoField";
import SignUpTopCard from "../../parts/signUpParts/SignUpTopCard";
import MainFooter from "../../components/common/Footer";
import SignUpCheckAd from "../../parts/signUpParts/SignUpCheckAd";
import { useState } from "react";
import axios from "axios";

function SignUpInfoBody() {
  // [Suggestion]
  // const [개인정보, set개인정보] = useState('')
  // const [수신동의, set수신동의] = useState('')

  // const handleFunc = () => {
  //   axios.post((),{

  //   })
  // }

  // [Origin Code for SignUp Button & axios]
  // const handleSignUp = (e) => {
  //   // console.log(signUpData);
  //   e.preventDefault();

  //   axios
  //     .post(url, {
  //       userid: signUpData.userId,
  //       password: signUpData.password,
  //       userName: basicInfo[0],
  //       address: signUpData.address,
  //       phoneNumber: basicInfo[1],
  //       userEmail: signUpData.userEmail,
  //     })
  //     .then((Response) => {
  //       console.log(Response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <SignUpTopCard title="회원 정보" />
      <SignUpInfoField
      // [Suggestion]
      // 개인정보={개인정보}
      // set개인정보={set개인정보}
      />
      <SignUpTopCard title="광고 정보 수신 동의" />
      <SignUpCheckAd />

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            width: "90%",
            backgroundColor: "#ff5b59",
            border: 0,
            outline: 0,
            color: "#fff",
          }}
        >
          가입하기
        </button>
      </div>

      <MainFooter />
    </>
  );
}

export default SignUpInfoBody;
