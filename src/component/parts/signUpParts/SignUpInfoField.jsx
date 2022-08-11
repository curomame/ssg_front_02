import axios from "axios";
import React, { useState } from "react";

function SignUpInfoField() {
  // 인증 성공 후 받아온 데이터
  const basicInfo = ["TestUser", "010-1234-5678"];

  const url = "/";

  const [signUpData, setSignUpData] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    userName: basicInfo[0],
    address: "",
    phoneNumber: basicInfo[1],
    userEmail: "",
  });

  const handleCheck = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });

    if (signUpData.password != signUpData.passwordCheck)
      console.log("비밀번호 검증 실패(불일치)");
    else {
      console.log("비밀번호 검증 성공");
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.name);
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    // console.log(signUpData);
    e.preventDefault();

    axios
      .post(url, {
        userid: signUpData.userId,
        password: signUpData.password,
        userName: basicInfo[0],
        address: signUpData.address,
        phoneNumber: basicInfo[1],
        userEmail: signUpData.userEmail,
      })
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
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
            />
            <br />
            <input
              type="password"
              name="passwordCheck"
              placeholder="비밀번호 재확인"
              value={signUpData.passwordCheck}
              onChange={handleCheck}
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
        <hr />
        <button
          type="submit"
          style={{
            backgroundColor: "#ff5b59",
            border: 0,
            outline: 0,
            color: "#fff",
          }}
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignUpInfoField;
