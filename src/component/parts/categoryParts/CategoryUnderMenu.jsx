import React from 'react'

function CategoryUnderMenu({MDatas}) {
  // console.log(MDatas);
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