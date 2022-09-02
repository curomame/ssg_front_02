import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import datas from '../../../assets/datas/mainDatas/mainBrandSelectDatas.json'

function MainCategorySelect({isSelected,setIsSelected}) {

  const handleRank = (e) => {
    setIsSelected(e.target.id)
  }

  let idx = datas.length

  const [colorIndex, setColorIndex] = useState(new Array(idx))

  useEffect(() => {
    colorIndex[0] = 1;
    setColorIndex(colorIndex)

  },[])

  useEffect(() => {
    
    const temp = colorIndex.indexOf(1) 
    colorIndex[temp] = 0;
    colorIndex[isSelected] = 1;
    setColorIndex(colorIndex);

  },[isSelected])

  return (
    <>
      <div className='mainRankLinkContainer'>
        <ul className='mainRankLink'>
          {datas.map((data,i) => (
            <li 
              className={colorIndex[i]===1
                ? 'mainRankLinkList selected_red' 
                : "mainRankLinkList"} 
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