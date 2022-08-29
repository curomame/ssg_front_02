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
          console.log(data.id);

          return <div key={data.id}><Link to={`${data.id}`}>{data.name}</Link></div>;
        
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