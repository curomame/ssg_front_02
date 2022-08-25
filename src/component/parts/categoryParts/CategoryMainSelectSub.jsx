import React from 'react'

function CategoryMainSelectSub({atomCategoryDatas,tempId,underId}) {

  // console.log(underId);
  // console.log(tempId,underId)

  const calculedNum = Math.floor(tempId%4);
  
  // console.log(calculedNum);
  if(tempId === ''){
    return null;
  }

  // isShow = true

  return (

    
    <>
    {(tempId === underId) ?
      <div className='categoryMainSubBoxBackGround' style={{"transform":`translateX(${-25*calculedNum}%)`}}>
      <div className='categoryMainSubBox' >

        {atomCategoryDatas[tempId] && 
          <div>

        {atomCategoryDatas[tempId].lcategoryList.map((data) => {

          return <div key={data.id}>{data.name}</div>
        
        })}

        </div>
        }


        
      </div>
    </div>

    
    :null}
    
      
    </>
  )
}

export default CategoryMainSelectSub