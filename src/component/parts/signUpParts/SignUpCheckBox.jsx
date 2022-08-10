import React from 'react'

function SignUpCheckBox({label, hideoption}) {
  return (
    <div>
        <label>
            <input
                type="checkbox"
            />
            {label}
        </label>
        {hideoption ==='Y' ? "" : <button>내용보기</button>}
    </div>
  )
}

export default SignUpCheckBox