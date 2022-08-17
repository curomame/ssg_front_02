import React from "react";

function SignUpCheckBox({ handleName, value, title, checkBoxName }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <input
          onChange={handleName}
          type="checkbox"
          value={value}
          checked={checkBoxName}
        />
      </div>
      {/* 내용보기 Modal 필요 */}
      <div style={{ width: "70%" }}>{title}</div>
      <div style={{ textAlign: "right" }}>
        <button>내용보기</button>
      </div>
    </div>
  );
}

export default SignUpCheckBox;
