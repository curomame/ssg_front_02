import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import datas from '../../../assets/datas/mainDatas/mainBrandSelectDatas.json'

function MainCategorySelect({isSelected,setIsSelected}) {

  const handleRank = (e) => {
    setIsSelected(e.target.id)
  }

  let idx = datas.length

  const [coloringMenu, setColoringMenu] = useState({});

  useEffect(() => {

    const inputObj = {};

    

  })


  useEffect(() => {
    const newer = []
    
    console.log(coloringMenu)
    console.log(coloringMenu[0],'here')


    {coloringMenu[0] && 
      (coloringMenu.filter((item,i) => {
        if(item === '1'){
          newer.push(0);
        } else if (+isSelected === i){
          newer.push(1);
        } else {
          newer.push(0);
        }

      }))
      
    }
    
    setColoringMenu(newer);
    
  },[isSelected])

  return (
    <>
      <div className='mainRankLinkContainer'>
        <ul className='mainRankLink'>
          {datas.map((data,i) => (
            <li 
              className={coloringMenu[i]===1 
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