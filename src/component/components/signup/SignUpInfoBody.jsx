import React from "react";
import SignUpInfoField from "../../parts/signUpParts/SignUpInfoField";
import SignUpTopCard from "../../parts/signUpParts/SignUpTopCard";
import MainFooter from "../../components/common/CommonFooter";
import SignUpCheckAd from "../../parts/signUpParts/SignUpCheckAd";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function SignUpInfoBody() {
  const url = "http://10.10.10.99:8080/user/signup";

  const [integrateInfo, setIntegrateInfo] = useState({
    userId: "",
    password: "",
    userName: "",
    address: "",
    phoneNumber: "",
    userEmail: "",

    pointOpt1: false,
    pointOpt2: false,

    pointOptEmail: false,
    pointOptSms: false,
    pointOptDm: false,
    pointOptTm: false,

    ssgOpt1: false,

    ssgOptEmail: false,
    ssgOptSms: false,
  });

  useEffect(() => {
    // console.log("정상적인 값");
    console.log(integrateInfo);
  }, [integrateInfo]);

  const handleSignUp = (e) => {
    // console.log(signUpData);
    e.preventDefault();

    axios
      .post(url, {
        userId: integrateInfo.userId,
        pwd: integrateInfo.password,
        name: integrateInfo.userName,
        address: integrateInfo.address,
        phoneNum: integrateInfo.phoneNumber,
        email: integrateInfo.userEmail,

        adonSsgPoint: integrateInfo.pointOpt2,

        pointEmail: integrateInfo.pointOptEmail,
        pointSms: integrateInfo.pointOptSms,
        pointPost: integrateInfo.pointOptDm,
        pointTele: integrateInfo.pointOptTm,

        adonSsgCom: integrateInfo.ssgOpt1,

        comEmail: integrateInfo.ssgOptEmail,
        comSms: integrateInfo.ssgOptSms,
      })
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SignUpTopCard title="회원 정보" />
      <SignUpInfoField
        integrateInfo={integrateInfo}
        setIntegrateInfo={setIntegrateInfo}
      />
      <SignUpTopCard title="광고 정보 수신 동의" />
      <SignUpCheckAd
        integrateInfo={integrateInfo}
        setIntegrateInfo={setIntegrateInfo}
      />

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            width: "90%",
            backgroundColor: "#ff5b59",
            border: 0,
            outline: 0,
            color: "#fff",
          }}
          onClick={handleSignUp}
        >
          가입하기
        </button>
      </div>

      <MainFooter />
    </>
  );
}

export default SignUpInfoBody;
