import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MainCategorySelect({isSelected,setIsSelected}) {

  const [boxColor,setBoxColor] = useState(true);

  //boxColor 기본 설정 0

  const datas = [
    {
        id: 0,
        icon : "/",
        title : "전체"
    },
    {
        id: 1,
        icon : "/",
        title : "패션"
    },
    {
        id: 2,
        icon : "/",
        title : "뷰티잡화"
    },
    {
        id: 3,
        icon : "/",
        title : "스포츠레저"
    },
    {
        id: 4,
        icon : "/",
        title : "디지털"
    },
    {
        id: 5,
        icon : "/",
        title : "디지털"
    },
    {
        id: 6,
        icon : "/",
        title : "디지털"
    }
];

  const handleRank = (e) => {
    setIsSelected(e.target.id)
  }


  return (
    <>
      <div className='mainRankLinkContainer'>
        <ul className='mainRankLink'>
          {datas.map(data => (
            <li 
              key={data.id}
              onClick={(e) => handleRank(e)}
              id={data.id}>
                {data.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MainCategorySelect