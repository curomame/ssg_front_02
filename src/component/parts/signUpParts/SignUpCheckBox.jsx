import React from "react";

function SignUpCheckBox({
  handleName,
  value,
  title,
  checkBoxName,
  hideButton,
  disableButton,
}) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <input
          onChange={handleName}
          type="checkbox"
          value={value}
          checked={checkBoxName}
          disabled={disableButton}
        />
      </div>

      <div style={{ width: "70%" }}>{title}</div>
      {/* 내용보기 Modal 필요 */}
      {hideButton === "Y" ? (
        ""
      ) : (
        <div style={{ textAlign: "right" }}>
          <button>내용보기</button>
        </div>
      )}
    </div>
  );
}

export default SignUpCheckBox;
