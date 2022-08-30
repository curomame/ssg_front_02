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
        (
          <div key={i}>{data.name}</div>
        ))}
      </div>
    </>
  )
}

export default CategoryUnderMenu