import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import categoryMainDatas from '../../../assets/datas/categoryDatas/categorymainDatas.json'


function CategoryMainGrid() {




  const testData = categoryMainDatas;
  
  const [isClick, setIsClick] = useState(false);

  const clickedClass = useRef(null)

  const ClickFunc = () => {
    console.log(1)
  }

  return (


    <>
    

      <div className='categoryMainGridContainer' >
{/* 반복화 진행 */}
{/* 받아올 값 카테고리 이름들 */}
{/* 컴포넌트로 만든 후 작업 진행해보기 */}
      <div onClick={ClickFunc} className='categoryMainGridContainerIconBox' >
          <div><img src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e' alt=""/></div>
          <div style={{"margin":"auto"}} ><h2>카테고리</h2></div>
      </div>


      <div onClick={(e) => ClickFunc(e)} value={2} className='categoryMainGridContainerIconBox' >
          <div><img src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e' alt=""/></div>
          <div style={{"margin":"auto"}} ><h2>카테고리1</h2></div>
          


      </div>

      <div className='categoryMainGridContainerIconBox' >
          <div><img src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e' alt=""/></div>
          <div style={{"margin":"auto"}} ><h2>카테고리</h2></div>
          


      </div>

      <div className='categoryMainGridContainerIconBox' >
          <div><img src='https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202109/2021090117370424472933833393_256.jpg&w=150&h=150&edit=c&t=1563dd18551f16231432da715468c33acc03630e' alt=""/></div>
          <div style={{"margin":"auto"}} ><h2>카테고리</h2></div>
          


      </div>


    {/* 정보를 받아오면 해당 값으로 변경 */}
    <div className='categoryMainSubBoxBackGround' >
      <div className='categoryMainSubBox' >

        {testData[0].underCategory && 
          <div className={'변수가 들어올 예정'}>

        {testData[0].underCategory.map((data) => {
          return <div>{data.title}</div>
        })}

        </div>
        }


          
        </div>
    </div>
        </div>
      



        
    </>
  )
}

export default CategoryMainGrid