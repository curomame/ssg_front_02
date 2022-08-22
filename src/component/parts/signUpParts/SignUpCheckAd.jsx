import React, { useEffect, useState } from "react";
import termsOptPointInfo from "../../../assets/datas/signupDatas/signUpOptionalPointTerms.json";
import termsOptPointPath from "../../../assets/datas/signupDatas/signUpOptionalPointReceivePath.json";
import termsOptSsgInfo from "../../../assets/datas/signupDatas/signUpOptionalSsgTerms.json";
import termsOptSsgPath from "../../../assets/datas/signupDatas/signUpOptionalSsgReceivePath.json";
import SignUpCheckBox from "./SignUpCheckBox";

function SignUpCheckAd({ integrateInfo, setIntegrateInfo }) {
  // 각 checkbox 상태값
  const [checkData, setCheckData] = useState({
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

  // 각 checkbox 상태값을 받아오기 위해 요소명을 배열로 작성
  const pointOptList = [checkData.pointOpt1, checkData.pointOpt2];

  const pointOptPathList = [
    checkData.pointOptEmail,
    checkData.pointOptSms,
    checkData.pointOptDm,
    checkData.pointOptTm,
  ];

  const ssgOptList = [checkData.ssgOpt1];

  const ssgOptPathList = [checkData.ssgOptEmail, checkData.ssgOptSms];

  const [isCheckedPoint, setIsCheckedPoint] = useState(true);

  const [isCheckedSsg, setIsCheckedSsg] = useState(true);

  // 클릭에 대해 늦은 반응에 대응하기 위해 useEffect 사용
  useEffect(() => {
    if (checkData.pointOpt1 === true && checkData.pointOpt2 === true) {
      setIsCheckedPoint(false);
    } else {
      setIsCheckedPoint(true);
    }

    if (checkData.ssgOpt1 === true) {
      setIsCheckedSsg(false);
    } else {
      setIsCheckedSsg(true);
    }

    // console.log(checkData);

    setIntegrateInfo({
      ...integrateInfo,
      pointOpt1: checkData.pointOpt1,
      pointOpt2: checkData.pointOpt2,
      pointOptEmail: checkData.pointOptEmail,
      pointOptSms: checkData.pointOptSms,
      pointOptDm: checkData.pointOptDm,
      pointOptTm: checkData.pointOptTm,
      ssgOpt1: checkData.ssgOpt1,
      ssgOptEmail: checkData.ssgOptEmail,
      ssgOptSms: checkData.ssgOptSms,
    });
  }, [checkData, isCheckedPoint, isCheckedSsg]);

  // 개별 checkbox 선택
  const handleCheck = (e) => {
    setCheckData({ ...checkData, [e.target.value]: e.target.checked });
  };

  return (
    <div>
      {/* 포인트 선택 약관 시작 */}
      <div>
        <h4>신세계포인트</h4>
        <div>
          {termsOptPointInfo &&
            termsOptPointInfo.map((info, i) => (
              <SignUpCheckBox
                key={i}
                handleName={handleCheck}
                value={info.value}
                title={info.title}
                checkBoxName={pointOptList[i]}
              />
            ))}
        </div>
      </div>
      {/* 포인트 선택 약관 끝. */}

      <hr />

      {/* 포인트 선택 약관 수신 경로 시작 */}
      <div>
        {termsOptPointPath &&
          termsOptPointPath.map((info, i) => (
            <SignUpCheckBox
              key={i}
              handleName={handleCheck}
              value={info.value}
              title={info.title}
              checkBoxName={pointOptPathList[i]}
              hideButton="Y"
              disableButton={isCheckedPoint}
            />
          ))}

        <div>
          <p style={{ color: "red" }}>
            광고 정보 수신동의를 하시면 신세계포인트 서비스 및 이벤트 정보를
            받으실 수 있습니다.
          </p>
        </div>
      </div>
      {/* 포인트 선택 약관 수신 경로 끝. */}

      <hr />
      <hr />

      {/* SSG 선택 약관 시작 */}
      <div>
        <h4>SSG.COM</h4>
        <div>
          {termsOptSsgInfo &&
            termsOptSsgInfo.map((info, i) => (
              <SignUpCheckBox
                key={i}
                handleName={handleCheck}
                value={info.value}
                title={info.title}
                checkBoxName={ssgOptList[i]}
              />
            ))}
        </div>
      </div>
      {/* SSG 선택 약관 끝. */}

      <hr />

      {/* SSG 선택 약관 수신 경로 시작 */}
      <div>
        {termsOptSsgPath &&
          termsOptSsgPath.map((info, i) => (
            <SignUpCheckBox
              key={i}
              handleName={handleCheck}
              value={info.value}
              title={info.title}
              checkBoxName={ssgOptPathList[i]}
              hideButton="Y"
              disableButton={isCheckedSsg}
            />
          ))}

        <div>
          <p style={{ color: "red" }}>
            광고 정보 수신동의를 하시면 신세계포인트 서비스 및 이벤트 정보를
            받으실 수 있습니다.
          </p>
        </div>
      </div>
      {/* SSG 선택 약관 수신 경로 끝. */}

      <hr />

      <div>
        <p style={{ fontWeight: "bold" }}>
          선택 항목에 동의하지 않더라도 SSG.COM회원가입 및 기본 서비스를
          이용하실 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default SignUpCheckAd;
