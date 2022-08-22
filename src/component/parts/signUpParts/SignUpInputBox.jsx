import React from "react";

function SignUpInputBox({
  label,
  title,
  value,
  placeHolder,
  handleName,
  hideBox,
}) {
  return (
    <div>
      {hideBox === "Y" ? (
        ""
      ) : (
        <div>
          <label>{label}</label>
          <input
            onChange={handleName}
            type="text"
            name={title}
            value={value}
            placeholder={placeHolder}
          />
        </div>
      )}
    </div>
  );
}

export default SignUpInputBox;
