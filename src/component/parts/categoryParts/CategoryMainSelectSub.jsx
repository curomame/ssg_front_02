import React from 'react'

function CategoryMainSelectSub({ctDatas,tempId}) {

  // console.log(tempId);

  if(tempId === ''){
    return null;
  }

  // console.log(ctDatas)

  return (
    <>
      <div className='categoryMainSubBoxBackGround' >
        <div className='categoryMainSubBox' >

          {ctDatas[tempId] && 
            <div className={'변수가 들어올 예정'}>

          {ctDatas[tempId].productLCategories.map((data) => {

            return <div key={data.id}>{data.name}</div>
          
          })}

          </div>
          }


          
        </div>
    </div>
    </>
  )
}

export default CategoryMainSelectSub