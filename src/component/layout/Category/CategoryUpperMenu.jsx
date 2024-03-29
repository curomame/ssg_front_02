import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import CategoryState from '../../../recoil/atoms/CategoryState'
import CategoryUnderMenu from '../../parts/categoryParts/CategoryUnderMenu';

function CategoryUpperMenu({tempStatus,setTempStatus,setTempId,tempId}) {

  const location = useLocation()
  const navigate = useNavigate();
  const categoryDatas = useRecoilValue(CategoryState);  

  const [Lid, setLid] = useState(location.state.Lid)
  const [Mid, setMid] = useState(location.state.Mid+1)

  // console.log(location);

  const [LDatas, setLDatas] = useState(null);
  const [MDatas, setMDatas] = useState(null);

  const changeIds =(i) => {
    // console.log(i);
    setMid(i+1)
    setTempId(i+1)
    setTempStatus('lCtg')
  }
  // console.log(Mid, tempId)


  useEffect(()=>{

    if(categoryDatas[Lid-1]!==undefined){
      
      setLDatas(categoryDatas[Lid-1].lcategoryList)
      categoryDatas[Lid-1].lcategoryList.filter((item,i) => {if(item.id===Mid)
        setMid(i)
        setMDatas(item.mcategoryList)
      })
    } else {
      console.log('category data is undefined')
    }

  },[categoryDatas,Lid])

// console.log(categoryDatas[Lid-1],'here');

  return ( 
    <>

    {MDatas && 
    

    <div className='categoryUpperMenuContainer'>
            
    <div className='categoryUpperMenuTop'>
      <div className='categoryUpperMenuTopBack' onClick={() => navigate(-1)}>
        <span className="material-icons-outlined">arrow_back</span>
    </div>
  
    <div className='categoryUpperMenuTitle'> 
      {categoryDatas !== '' && <div>{categoryDatas[Lid-1].name}{' > '}</div>}
      {categoryDatas[Lid-1].lcategoryList[Mid-1] && <div><span>{categoryDatas[Lid-1].lcategoryList[Mid-1].name}</span></div>}
    </div>  


    

      
    </div>

      <div className='categoryUpperMenuMContainer'>
        <div className='categoryUpperMenuMBox' style={{"width":`${LDatas.length*90}px`}}>
          {LDatas && 
          
            LDatas.map((data,i) => 
            { 
              // console.log(i)
              return <div 
              onClick={()=>{changeIds(i)}}
              key={i}
              className={Mid === i+1 ? "categoryLselected" : null}
              >
                <p >{data.name}</p>
              </div>}
            )
            }
          
        </div> 
      </div>

      <CategoryUnderMenu
        setTempStatus={setTempStatus}
        setTempId={setTempId}
        setMDatas={setMDatas}
        MDatas={MDatas}
        LDatas={LDatas}
        Mid={Mid}
      />


    </div>

    }


        </>
      )
    }

export default CategoryUpperMenu