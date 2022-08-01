import React from 'react'
import { Link } from 'react-router-dom'
function MainUpperCategory() {
  return (
    <>
    <ul className='upperCategory'>

        <Link to='/'><li>홈</li></Link>
        <Link to='/'><li>추석</li></Link>
        <Link to='/'><li>명품관</li></Link>
        <Link to='/'><li>해피라운지</li></Link>
        <Link to='/'><li>베스트</li></Link>

    </ul>
    </>
  )
}

export default MainUpperCategory