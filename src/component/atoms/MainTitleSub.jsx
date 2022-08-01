import React from 'react'
import { Link } from 'react-router-dom'

function MainTitleSub() {

  return (
    <>
      <div className='mainTitle titleTop'><h2>메인 타이틀 제목입니다.</h2></div>
      <div className='titleBottom'>
        <div className='subTitle'><p>서브 부분의 내용입니다.</p></div>
        <div className='linkToAll'><Link to="/"><p>전체보기</p></Link></div>
      </div>
      <div className='titlePrice'>1,995원~</div>
    
    </>
  )
}

export default MainTitleSub