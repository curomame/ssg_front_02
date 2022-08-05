import React from 'react'

function MainBlankSpace({px}) {
  
  {px ? px = px/2 : px=0}

  return (
    <div style={{"margin":`${px}px`}}>

    </div>
  )
}

export default MainBlankSpace