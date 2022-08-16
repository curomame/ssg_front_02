import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SignupButton from "../../parts/signUpParts/SignupButton";
import SignUpCheckBox from "../../parts/signUpParts/SignUpCheckBox";

function SignUpTermsBody() {
  const [checkData, setCheckData] = useState({
    allCheck: false,
    point1: false,
    point2: false,
    point3: false,
    point4: false,
    ssg1: false,
    ssg2: false,
  });

  useEffect(() => {
    console.log(checkData);
  }, [checkData]);

  const handleAllCheck = (e) => {
    setCheckData({
      allCheck: e.target.checked,
      point1: e.target.checked,
      point2: e.target.checked,
      point3: e.target.checked,
      point4: e.target.checked,
      ssg1: e.target.checked,
      ssg2: e.target.checked,
    });
  };

  const handleCheck = (e) => {
    setCheckData({ ...checkData, [e.target.value]: e.target.checked });
  };

  const handleTermCheck = (e) => {
    if (e) {
      // console.log("Hi");
    }
  };

  return (
    <div>
      {/* 약관 전체 동의 */}
      <div>
        <input type="checkbox" onChange={handleAllCheck} name="allCheck" />
        약관 전체 동의
      </div>

      <br />

      <div>
        <h4>신세계 포인트</h4>
        <div>
          {/* 포인트 약관 1 */}
          <div style={{ display: "flex" }}>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                value="point1"
                checked={checkData.point1}
              />
            </div>
            <div style={{ width: "70%" }}>
              (필수) 신세계포인트 회원 이용약관
            </div>
            <div style={{ textAlign: "right" }}>
              <button>내용보기</button>
            </div>
          </div>
          {/* 포인트 약관 2 */}
          <div style={{ display: "flex" }}>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                value="point2"
                checked={checkData.point2}
              />
            </div>
            <div style={{ width: "70%" }}>
              (필수) 개인정보 수집 및 이용 동의
            </div>
            <div style={{ textAlign: "right" }}>
              <button>내용보기</button>
            </div>
          </div>
          {/* 포인트 약관 3 */}
          <div style={{ display: "flex" }}>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                value="point3"
                checked={checkData.point3}
              />
            </div>
            <div style={{ width: "70%" }}>
              (필수) 필수 정보 이마트/신세계백화점 공동 개인정보 수집 이용 동의
            </div>
            <div style={{ textAlign: "right" }}>
              <button>내용보기</button>
            </div>
          </div>
          {/* 포인트 약관 4 */}
          <div style={{ display: "flex" }}>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                value="point4"
                checked={checkData.point4}
              />
            </div>
            <div style={{ width: "70%" }}>
              (필수) 통합회원 서비스 제공을 위한 개인정보 제3자 제공 동의
            </div>
            <div style={{ textAlign: "right" }}>
              <button>내용보기</button>
            </div>
          </div>
          {/* 약관 끝. */}
        </div>
      </div>

      <hr />

      <div>
        <h4>SSG.COM</h4>
        <div>
          {/* SSG 약관 1 */}
          <div style={{ display: "flex" }}>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                value="ssg1"
                checked={checkData.ssg1}
              />
            </div>
            <div style={{ width: "70%" }}>(필수) SSG.COM회원 이용 약관</div>
            <div style={{ textAlign: "right" }}>
              <button>내용보기</button>
            </div>
          </div>
          {/* SSG 약관 2 */}
          <div style={{ display: "flex" }}>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                value="ssg2"
                checked={checkData.ssg2}
              />
            </div>
            <div style={{ width: "70%" }}>
              (필수) 개인정보 수집 및 이용 동의
            </div>
            <div style={{ textAlign: "right" }}>
              <button>내용보기</button>
            </div>
          </div>
          {/* 약관 끝. */}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            width: "90%",
            backgroundColor: "#ff5b59",
            border: 0,
            outline: 0,
            color: "#fff",
          }}
          onClick={handleTermCheck}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default SignUpTermsBody;
