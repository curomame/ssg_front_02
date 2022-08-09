import React from 'react'

function SignUpTitleText({title}) {
  return (
    <>
      <div style={{"width":"100%", "fontWeight":"bold", "textAlign":"center"}}>
        { title ? <h2>{title}</h2> : "" }
      </div>
    </>
  )
}

export default SignUpTitleText