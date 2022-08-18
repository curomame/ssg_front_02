import React from 'react'

function CategoryMainSelectSub({testData,tempId,underId}) {

  // console.log(underId);

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
          <div className={'변수가 들어올 예정'}>

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