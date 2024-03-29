import React, { useEffect, useState } from 'react'
import CategoryMainSelectSub from '../../parts/categoryParts/CategoryMainSelectSub';
import { useRecoilValue } from 'recoil';
import CategoryState from '../../../recoil/atoms/CategoryState';

function CategoryMainGrid() {

  const atomCategoryDatas = useRecoilValue(CategoryState);
  const [tempId, setTempId] = useState('');

  const ClickFunc = (id) => {
    setTempId(id);
  }


  return (

    <>


      <div className='categoryMainGridContainer' >
      {
          atomCategoryDatas[0] 
          && 
          <>
            {atomCategoryDatas.map((data) => 
                  {
                    
                    return <div onClick={() => ClickFunc(data.id-1)} key={data.id} className='categoryMainGridContainerIconBox' >

                      <div>
                        <div><img src={data.imgUrl} alt=""/></div>
                        <div className='categoryMainGridContainerIconTitle'><h2>{data.name}</h2></div>
                      </div>
                      <CategoryMainSelectSub
                        underId={data.id-1}
                        atomCategoryDatas={atomCategoryDatas} 
                        tempId={tempId}
                        /> 
                    </div>
                    
                    
                  }   
                  )}
                  

          </>

          }      



        </div>    
    </>
  )
}

export default CategoryMainGrid