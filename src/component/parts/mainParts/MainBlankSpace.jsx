import React from 'react'

function MainBlankSpace({px}) {
  
  {px ? px = px/2 : px=0}

  return (
    <div style={{height:`${px}px`,width:"100%"}}>

    </div>
  )
}

export default MainBlankSpace