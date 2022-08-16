import React from "react";
import MainFooter from "../../component/components/main/MainFooter";
import SignUpHeader from "../../component/components/signup/SignUpHeader";
import SignUpTermsBody from "../../component/components/signup/SignUpTermsBody";

// 회원가입 약관 동의 화면

function SignUpTerms() {
  return (
    <>
      <SignUpHeader title="신세계포인트 통합회원 가입" />
      <hr />
      <SignUpTermsBody />
      <hr />
      <MainFooter />
    </>
  );
}

export default SignUpTerms;
