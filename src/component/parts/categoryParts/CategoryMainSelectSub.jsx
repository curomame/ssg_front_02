import React from 'react'

function CategoryMainSelectSub({testData,tempId,underId}) {

  // console.log(underId);
  console.log(tempId,underId)

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

        {testData[tempId] && 
          <div>

        {testData[tempId].productLCategories.map((data) => {

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