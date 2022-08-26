import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SignUpCheckBox from "../../parts/signUpParts/SignUpCheckBox";
import termsPointInfo from "../../../assets/datas/signupDatas/signUpPointTerms.json";
import termsSsgInfo from "../../../assets/datas/signupDatas/signUpSsgTerms.json";

function SignUpPoint() {
  const [checkData, setCheckData] = useState({
    allCheck: false,
    point1: false,
    point2: false,
    point3: false,
    point4: false,
    ssg1: false,
    ssg2: false,
  });

  // 각 checkbox 상태값을 받아오기 위해 요소명을 배열로 작성
  const pointList = [
    checkData.point1,
    checkData.point2,
    checkData.point3,
    checkData.point4,
  ];
  const ssgList = [checkData.ssg1, checkData.ssg2];

  // url 이동
  const [url, setUrl] = useState("#");

  // 전체 선택 여부 확인
  const [checkCount, setCheckCount] = useState(0);

  // 클릭에 대해 늦은 반응에 대응하기 위해 useEffect 사용
  useEffect(() => {}, [checkData, url, checkCount]);

  // 개별 checkbox 선택
  const handleCheck = (e) => {
    setCheckData({ ...checkData, [e.target.value]: e.target.checked });

    if (e.target.checked === true) {
      setCheckCount((prevCount) => prevCount + 1);
    } else {
      setCheckCount((prevCount) => prevCount - 1);
    }
  };

  // 전체 선택
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

    if (e.target.checked === true) {
      setCheckCount((prevCount) => 6);
    } else {
      setCheckCount((prevCount) => 0);
    }
  };

  // 다음 버튼 눌렀을 때, 이동할 url을 지정
  const handleTermCheck = (e) => {
    if (checkCount !== 6) {
      alert("필수 약관 안내 모두 동의해주세요.");
    } else {
      setUrl("/signup/info");

      // 작업을 위해 임시로 처리
      window.location.href = "/signup/info";
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
          {/* 포인트 약관 시작 */}
          {termsPointInfo &&
            termsPointInfo.map((info, i) => (
              <SignUpCheckBox
                key={i}
                handleName={handleCheck}
                value={info.value}
                title={info.title}
                checkBoxName={pointList[i]}
              />
            ))}
          {/* 포인트 약관 끝. */}
        </div>
      </div>

      <hr />

      <div>
        <h4>SSG.COM</h4>
        <div>
          {/* SSG 약관 시작 */}
          {termsSsgInfo &&
            termsSsgInfo.map((info, i) => (
              <SignUpCheckBox
                key={i}
                handleName={handleCheck}
                value={info.value}
                title={info.title}
                checkBoxName={ssgList[i]}
              />
            ))}
          {/* SSG 약관 끝. */}
        </div>
      </div>

      {/* 다음 버튼 */}
      <div style={{ textAlign: "center" }}>
        <Link to='/signup/info'>
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
        </Link>
      </div>
    </div>
  );
}

export default SignUpPoint