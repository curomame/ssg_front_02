import React from "react";
import termsOptPointInfo from "../../../assets/datas/signupDatas/signUpOptionalPointTerms.json";
import termsOptPointPath from "../../../assets/datas/signupDatas/signUpOptionalPointReceivePath.json";
import termsOptSsgInfo from "../../../assets/datas/signupDatas/signUpOptionalSsgTerms.json";
import termsOptSsgPath from "../../../assets/datas/signupDatas/signUpOptionalSsgReceivePath.json";
import SignUpCheckBox from "./SignUpCheckBox";

function SignUpCheckAd() {
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
                // handleName={}
                value={info.value}
                title={info.title}
                // checkBoxName={}
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
              // handleName={}
              value={info.value}
              title={info.title}
              // checkBoxName={}
              hideButton="Y"
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
                // handleName={}
                value={info.value}
                title={info.title}
                // checkBoxName={}
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
              // handleName={}
              value={info.value}
              title={info.title}
              // checkBoxName={}
              hideButton="Y"
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
