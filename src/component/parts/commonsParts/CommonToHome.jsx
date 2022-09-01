import React from 'react'
import { Link } from 'react-router-dom'

function CommonToHome() {
  return (
    <>
    <Link to='/'>
      <div className='commonToHomeIcon'>
        <span className="material-icons-outlined">home</span>
      </div>
    </Link>
    </>
  )
}

export default CommonToHome