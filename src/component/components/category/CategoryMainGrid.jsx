import React, { useEffect, useState } from 'react'
import categoryMainDatas from '../../../assets/datas/categoryDatas/categorymainDatas.json'
import CategoryMainSelectSub from '../../parts/categoryParts/CategoryMainSelectSub';
import axios from 'axios';

function CategoryMainGrid() {

  const [categoryDatas, setCategoryDatas] = useState('');


  useEffect(()=>{
    axios.get("http://10.10.10.167:8083/ProductCategory/findAll/mCtg")
      .then(res => setCategoryDatas(res.data))
      .then(err => console.error('카테고리 통신'+err))
  },[])

    
  const testData = categoryMainDatas;

  const [tempId, setTempId] = useState('');
  

  const ClickFunc = (id) => {
    setTempId(id);

  }


  return (

    <>


      <div className='categoryMainGridContainer' >

      {
          categoryDatas[0] 
          && 
          <>
            {categoryDatas.map((data) => 
                  (
                    <div onClick={() => ClickFunc(data.id-1)} key={data.id} className='categoryMainGridContainerIconBox' >

                      <div>
                        <div><img src="//simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e" alt=""/></div>
                        <div style={{"margin":"auto","textAlign":"center"}} ><h2>{data.name}</h2></div>
                      </div>
                      <CategoryMainSelectSub
                        underId={data.id-1}
                        categoryDatas={categoryDatas} 
                        tempId={tempId}
                        /> 
                    </div>
                    
                    
                    )   
                  )}
                  

          </>

          }      



        </div>    
    </>
  )
}

export default CategoryMainGrid