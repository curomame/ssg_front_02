import React, { useState } from "react";
import SignupButton from "../../parts/signUpParts/SignupButton";
import SignUpCheckBox from "../../parts/signUpParts/SignUpCheckBox";

function SignUpTermsBody() {
  // SSG Point 약관 Title 및 id 정보
  const termListSsgPoint = [
    { idx: 0, title: "(필수) 신세계포인트 회원 이용약관", value: false },
    { idx: 1, title: "(필수) 개인정보 수집 및 이용 동의", value: false },
    {
      idx: 2,
      title:
        "(필수) 필수 정보 이마트/신세계백화점 공동 개인정보 수집 이용 동의",
      value: false,
    },
  ];

  // SSG.COM 약관 Title 및 id 정보
  const termListSsgCom = [
    { idx: 3, title: "(필수) SSG.COM 회원 이용약관", value: false },
    { idx: 4, title: "(필수) 개인정보 수집 및 이용 동의", value: false },
  ];

  // 약관별 동의 여부 정보 확인
  const [checkedList, setCheckedList] = useState(new Array(5));

  const handleCheck = (e) => {
    // setCheckedList([...checkedList, chk.target.value]);
    // console.log(chk);
  };

  const handleSend = (e) => {
    console.log(checkedList);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSend}>
        {/* 전체 약관 동의 */}
        <div>
          <label>
            <input type="checkbox" />
            전체 약관 동의
          </label>
        </div>

        <br />

        {/* SSG Point 약관 Title 및 id 정보 */}
        <div>
          {termListSsgPoint.map((item, i) => (
            <label key={i}>
              <input
                type="checkbox"
                value={item.idx}
                onChange={(e) => handleCheck(e)}
              />
              {item.title}
              <br />
            </label>
          ))}
        </div>

        <br />

        {/* SSG.COM 약관 Title 및 id 정보 */}
        <div>
          {termListSsgCom.map((item, i) => (
            <label key={i}>
              <input type="checkbox" value={item.idx} onChange={handleCheck} />
              {item.title}
              <br />
            </label>
          ))}
        </div>
        <button type="submit">다음</button>
      </form>
    </div>
  );
}

export default SignUpTermsBody;
