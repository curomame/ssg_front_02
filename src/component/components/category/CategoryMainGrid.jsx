import React, { useEffect, useState } from 'react'
import categoryMainDatas from '../../../assets/datas/categoryDatas/categorymainDatas.json'
import CategoryMainSelectSub from '../../parts/categoryParts/CategoryMainSelectSub';
import axios from 'axios';

function CategoryMainGrid() {


  const testData = categoryMainDatas;
  const [selectedId, setSelectedId] = useState(null);

  const [tempId, setTempId] = useState('');
  // const [ctDatas, setCtDatas] = useState('');
  const [cutDatas,setCutDatas] = useState([]);

  const [isShow, setIsShow] = useState(false);

  // useEffect(()=>{

  //   axios.get('http://10.10.10.167:8083/ProductCategory')
  //     .then(res => setCtDatas(res.data.slice(0,4)))
  //     .catch(err => console.error("get error "+err))

  //   },[])

  
  useEffect(() => {
    setCutDatas(CutTheAxios(testData,4));
  },[])

  const CutTheAxios = (arr, num) => {
    const result = [];
    if(arr){
      for(let i=0; i<arr.length; i += num){
        result.push(arr.slice(i,i+num));
      };
      return result;
    }
    return undefined;
  }


  const ClickFunc = (id) => {
    setTempId(id);
    setSelectedId(id)
  }

  // console.log(selectedId)
  return (

    <>


      <div className='categoryMainGridContainer' >

      {
          testData[0] 
          && 
          <>
            {testData.map((data) => 
                  (
                    <div onClick={() => ClickFunc(data.id-1)} key={data.id} className='categoryMainGridContainerIconBox' >

                      <div>
                        <div><img src="//simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e" alt=""/></div>
                        <div style={{"margin":"auto"}} ><h2>{data.name}</h2></div>
                      </div>
                      <CategoryMainSelectSub
                        underId={data.id-1}
                        testData={testData} 
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