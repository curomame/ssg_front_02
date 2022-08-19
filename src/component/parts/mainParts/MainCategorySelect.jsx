import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import datas from '../../../assets/datas/mainDatas/mainBrandSelectDatas.json'

function MainCategorySelect({setIsSelected}) {

  const [boxColor,setBoxColor] = useState(0);
  //boxColor 기본 설정 0


  const handleRank = (e) => {
    setIsSelected(Number(e.target.id))
  }


  return (
    <>
      <div className='mainRankLinkContainer'>
        <ul className='mainRankLink'>
          {datas.map((data,i) => (
            <li 
              className='mainRankLinkList'
              key={data.id}
              onClick={(e) => handleRank(e)}
              id={i}>
                {data.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MainCategorySelect