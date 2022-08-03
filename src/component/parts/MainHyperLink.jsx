import React from 'react'
import {Link} from 'react-router-dom'

function MainHyperLink() {

  //상위 url text
  const [url, text] = ['/','바로가기']

  return (
    <>
      <Link className='mainHyper' to="{url}"><p>{text}</p></Link>
    </>
  )
}

export default MainHyperLink