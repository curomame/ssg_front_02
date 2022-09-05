import React from 'react'
import { useEffect } from 'react';

function CategoryUnderMenu({Mid,MDatas,setMDatas,LDatas}) {

// console.log(Mid);


useEffect(()=>{

  setMDatas(LDatas[Mid-1].mcategoryList);

},[Mid])

  return (
    <>
      <div className='categoryUnderMenuContainer'>
        {MDatas.map((data,i) => 
        {
          return <div key={i}><p>{data.name}</p></div>
          })}
      </div>
    </>
  )
}

export default CategoryUnderMenu