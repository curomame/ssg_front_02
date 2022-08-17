import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function SignUpInfoField() {
  // 인증 성공 후 받아온 데이터
  const basicInfo = ["TestUser", "010-1234-5678"];

  const [signUpData, setSignUpData] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    userName: basicInfo[0],
    address: "",
    phoneNumber: basicInfo[1],
    userEmail: "",
  });

  useEffect(() => {
    // 여기에 Test 코드를 작성
    // console.log(signUpData);
  }, [signUpData]);

  // 입력 값에 대한 제한 조건 검증을 위한 코드
  const handleChange = (e) => {
    // 영문, 숫자 외 값의 입력을 방지하기 위한 정규표현식
    const regex = /^[a-z0-9]*$/;

    // 입력받은 문자열이 정규표현식을 만족여부를 판별
    if (regex.test(e.target.value)) {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }

    // 입력 중인 필드가 "비밀번호 확인란"일 경우 동작
    if (e.target.name === "passwordCheck") {
      handlePassWordCheck(e.target.value);
    }
  };

  // 비밀번호 검증을 위한 코드
  const handlePassWordCheck = (chk) => {
    if (signUpData.password === chk) {
      console.log("비밀번호 검증 성공");
    } else {
      console.log("비밀번호 검증 실패(불일치)");
    }
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
        <button>중복 확인</button>
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
        </div>
      </div>

      <hr />

      {/* 이름칸 */}
      <div>
        <label>이름</label>
        {basicInfo[0]}
      </div>
      <hr />
      {/* 주소 입력칸 */}
      <div>
        <label>
          주소
          <input
            type="text"
            name="address"
            value={signUpData.address}
            onChange={handleChange}
          />
          <button>우편번호</button>
        </label>
      </div>
      <hr />
      {/* 휴대폰 번호칸 */}
      <div>
        <label>휴대폰 번호</label>
        {basicInfo[1]}
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
