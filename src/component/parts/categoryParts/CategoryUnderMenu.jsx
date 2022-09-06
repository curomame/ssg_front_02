import React from 'react'
import { useEffect } from 'react';

function CategoryUnderMenu(
  {Mid,
  MDatas,
  setMDatas,
  LDatas,
  setTempStatus,
  setTempId}
  ) {

// console.log(Mid);

const handleChangeStatus = (i) => {
  
  const id = i+1;

  setTempStatus('mCtg')
  setTempId(id)
}

useEffect(()=>{

  {LDatas[Mid-1] && 
    setMDatas(LDatas[Mid-1].mcategoryList)
  }

},[Mid]) 

  return (
    <>
      <div className='categoryUnderMenuContainer'>
        {MDatas.map((data,i) => 
        {
          return <div onClick={()=>handleChangeStatus(i)} key={i}><p>{data.name}</p></div>
          })}
      </div>
    </>
  )
}

export default CategoryUnderMenu