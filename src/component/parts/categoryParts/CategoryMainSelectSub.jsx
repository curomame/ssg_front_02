import React from 'react'

function CategoryMainSelectSub({testData,tempId}) {


  if(tempId === ''){
    return null;
  }


  return (
    <>
      <div className='categoryMainSubBoxBackGround' >
        <div className='categoryMainSubBox' >

          {testData[tempId].underCategory && 
            <div className={'변수가 들어올 예정'}>

          {testData[tempId].underCategory.map((data) => {
            return <div>{data.title}</div>
          })}

          </div>
          }


          
        </div>
    </div>
    </>
  )
}

export default CategoryMainSelectSub