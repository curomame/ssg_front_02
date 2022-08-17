import React from "react";
import MainFooter from "../../component/components/common/CommonFooter";
import SignUpMainBody from "../../component/components/signup/SignUpMainBody";
import SignUpHeader from "../../component/components/signup/SignUpHeader";

// 회원가입 메인 화면

function SignUpMain() {
  return (
    <>
      <SignUpHeader title="회원가입" />
      <hr />
      <SignUpMainBody />
      <hr />
      <MainFooter />
    </>
  );
}

export default SignUpMain;
