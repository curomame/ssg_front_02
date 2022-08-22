import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import SignUpAddressPopup from "./SignUpAddressPopup";

/* 모든 입력란에 대해 나눌 필요가 있으며,
이 파일은 Layout으로 변경될 예정 */

/**
 * zoneCode : 우편번호
 * roadAddress : 도로명주소
 * detailAddress : 상세주소
 */

function SignUpInfoField({ integrateInfo, setIntegrateInfo }) {
  // 2개의 비밀번호 입력란 비교 결과값에 따라 출력되는 메시지를 저장
  const [passwordValidate, setpasswordValidate] = useState("");

  // Address Parts에서 주소 결과값을 저장
  const [addressValue, setAddressValue] = useState("");

  const [signUpData, setSignUpData] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    userName: "",

    zoneCode: "",
    roadAddress: "",
    detailAddress: "",

    phoneNumber: "",
    userEmail: "",
  });

  useEffect(() => {
    // 여기에 Test 코드를 작성
    // console.log(signUpData);
    setIntegrateInfo({
      ...integrateInfo,
      userId: signUpData.userId,
      password: signUpData.password,
      userName: signUpData.userName,

      zoneCode: signUpData.zoneCode,
      roadAddress: signUpData.roadAddress,
      detailAddress: signUpData.detailAddress,

      phoneNumber: signUpData.phoneNumber,
      userEmail: signUpData.userEmail,
    });
  }, [signUpData]);

  // 입력 값에 대한 제한 조건 검증을 위한 코드
  const handleChange = (e) => {
    // 영문, 숫자 외 값의 입력을 방지하기 위한 정규표현식
    let regex = /^[a-z0-9]*$/;

    // 입력 중인 필드가 "비밀번호 확인란"일 경우 동작
    if (e.target.name === "passwordCheck") {
      handlePassWordCheck(e.target.value);
    }

    // 전화번호 입력 시 적용될 정규표현식
    if (e.target.name === "phoneNumber") {
      regex = /^[0-9-]*$/;
    }

    // 이메일 주소 입력 시 적용될 정규표현식과 입력 중일 경우 검증 동작
    if (e.target.name === "userEmail") {
      regex = /^[@a-z0-9.]*$/;
      handleEmailCheck(e.target.value);
    }

    // 입력받은 문자열이 정규표현식을 만족여부를 판별하여 입력받음.
    if (regex.test(e.target.value)) {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }
  };

  // 비밀번호 검증을 위한 코드
  const handlePassWordCheck = (chk) => {
    if (signUpData.password === chk) {
      // console.log("비밀번호 검증 성공");
      setpasswordValidate("비밀번호가 일치합니다.");
    } else {
      // console.log("비밀번호 검증 실패(불일치)");
      setpasswordValidate("비밀번호가 일치하지 않습니다.");
    }
  };

  // 이메일 주소 형식 검증을 위한 코드(구현중)
  const handleEmailCheck = (chk) => {
    // 값이 정상적으로 들어오는지 확인을 위한 출력
    // console.log(chk);
  };

  // 아이디 중복확인을 위한 코드(구현중)
  const handleCheckId = (chk) => {
    const url = "";
    let result = "";

    axios
      .get(url, {
        userId: chk,
      })
      .then((Response) => {
        console.log(Response);
        console.log(result);

        if (result === true) {
          console.log("사용가능한 아이디입니다.");
        } else {
          console.log("사용할 수 없는 아이디입니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* 아이디 입력칸 */}
      <div>
        <label>
          아이디
          <input
            type="text"
            name="userId"
            placeholder="영어 또는 숫자로 6~20자리"
            value={signUpData.userId}
            onChange={handleChange}
            maxLength="20"
          />
        </label>
        <button onClick={handleCheckId}>중복 확인</button>
      </div>

      <hr />

      {/* 비밀번호 입력칸 */}
      <div style={{ display: "flex" }}>
        <label>비밀번호</label>
        <div>
          <input
            type="password"
            name="password"
            placeholder="영문, 숫자 조합 8~20자리"
            value={signUpData.password}
            onChange={handleChange}
            maxLength="20"
          />

          <br />
          {/* 비밀번호 재입력칸 */}
          <input
            type="password"
            name="passwordCheck"
            placeholder="비밀번호 재확인"
            value={signUpData.passwordCheck}
            maxLength="20"
            onChange={handleChange}
          />

          <br />

          {/* 비밀번호 입력칸 */}
          <p>{passwordValidate}</p>
        </div>
      </div>

      <hr />

      {/* 이름칸 */}
      <div>
        <label>이름</label>
        <input
          type="text"
          name="userName"
          value={signUpData.userName}
          onChange={handleChange}
        />
      </div>

      <hr />

      {/* 주소 입력칸 */}
      <div>
        <SignUpAddressPopup
          addressValue={signUpData}
          setAddressValue={setSignUpData}
        />
      </div>

      <hr />

      {/* 휴대폰 번호칸 */}
      <div>
        <label>휴대폰 번호</label>
        <input
          type="text"
          name="phoneNumber"
          value={signUpData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <hr />

      {/* 이메일 주소칸 */}
      <div>
        <label>
          이메일주소
          <input
            type="text"
            name="userEmail"
            placeholder="이메일주소"
            value={signUpData.userEmail}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}

export default SignUpInfoField;
