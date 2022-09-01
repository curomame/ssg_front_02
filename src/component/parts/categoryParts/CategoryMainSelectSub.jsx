import React from 'react'
import { Link } from 'react-router-dom';

function CategoryMainSelectSub({atomCategoryDatas,tempId,underId}) {

  // console.log(underId);
  // console.log(tempId,underId)

  const calculedNum = Math.floor(tempId%4);
  
  // console.log(calculedNum);
  if(tempId === ''){
    return null;
  }

  


  return (

    
    <>
    {(tempId === underId) ?
      <div className='categoryMainSubBoxBackGround' 
            style={{"transform":`translateX(${-25*calculedNum}%)`}}>
      <div className='categoryMainSubBox' >

        {atomCategoryDatas[tempId] && 
          <div>

        {atomCategoryDatas[tempId].lcategoryList.map((data) => {

          // console.log(tempId,data.id);
          return <div key={data.id}><Link to='detail' state={{"Lid":tempId+1, "Mid":data.id, "tempStatus":"lCtg"}}>{data.name}</Link></div>;
        
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