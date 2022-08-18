import React from "react";
import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

function SignUpAddressPopup({ addressValue, setAddressValue }) {
  /* react-daum-postcode에서 제공된 팝업 Reference Code 시작 */
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  // 주소 결과값 저장을 위해 usestate 사용
  const [result, SetResult] = useState("");

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // 사용자가 선택한 주소값을 console 출력
    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    // console.log(fullAddress);

    // 결과값으로 result 상태 저장
    SetResult(fullAddress);

    // Parts를 사용하는 Components에 값을 전달
    // setAddressValue(fullAddress);
    setAddressValue({ ...addressValue, ["address"]: fullAddress });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  /* react-daum-postcode에서 제공된 팝업 Reference Code 끝. */

  return (
    <>
      <label>주소</label>
      <input
        type="text"
        name="address"
        value={result}
        style={{ width: "60%" }}
        readOnly
      />
      <button type="button" onClick={handleClick}>
        우편번호
      </button>
    </>
  );
}

export default SignUpAddressPopup;
