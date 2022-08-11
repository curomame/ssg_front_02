import React, { useState } from 'react'
import categoryMainDatas from '../../../assets/datas/categoryDatas/categorymainDatas.json'
import CategoryMainSelectSub from '../../parts/categoryParts/CategoryMainSelectSub';


function CategoryMainGrid() {


  const testData = categoryMainDatas;
  
  const [tempId, setTempId] = useState('');

  const ClickFunc = (id) => {
    setTempId(id);
    // console.log(id)
  }

  return (

    <>

      <div className='categoryMainGridContainer' >

      {testData && 
      
      testData.map((data) => (

          <div onClick={() => ClickFunc(data.id-1)} key={data.id} className='categoryMainGridContainerIconBox' >
            <div><img src={data.src} alt=""/></div>
            <div style={{"margin":"auto"}} ><h2>{data.category}</h2></div>
          </div>        
        
      ))
      
      }

    {/* 정보를 받아오면 해당 값으로 변경 */}
    <CategoryMainSelectSub 
      testData={testData} 
      tempId={tempId}
    />




        </div>    
    </>
  )
}

export default CategoryMainGrid