import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import CategoryState from '../../../recoil/atoms/CategoryState'
import CategoryUnderMenu from '../../parts/categoryParts/CategoryUnderMenu';

function CategoryUpperMenu() {

  const location = useLocation()
  const navigate = useNavigate();
  const categoryDatas = useRecoilValue(CategoryState);  
  
  const [Lid, setLid] = useState(location.state.Lid)
  const [Mid, setMid] = useState(location.state.Mid)

  console.log(Lid,Mid)

  const [LDatas, setLDatas] = useState(null);
  const [MDatas, setMDatas] = useState(null);

  useEffect(()=>{

      setLDatas(categoryDatas[Lid-1].lcategoryList);
      categoryDatas[Lid-1].lcategoryList.filter((item,i)=> {if(item.id===Mid)
        // console.log(i);
        setMid(i)
        setMDatas(item.mcategoryList)
      });

  },[categoryDatas])

console.log(categoryDatas[Lid-1].name);

  return (
    <>

    {MDatas && 

    <div className='categoryUpperMenuContainer'>
          
    <div className='categoryUpperMenuTop'>
      <div className='categoryUpperMenuTopBack' onClick={() => navigate(-1)}>
        <span className="material-icons-outlined">arrow_back</span>
      </div>

      <div>{categoryDatas[Lid-1].name}{' > '} <span>{categoryDatas[Lid-1].lcategoryList[Mid-1].name}</span></div>
    </div>

      <div className='categoryUpperMenuMContainer'>
        <div className='categoryUpperMenuMBox' style={{"width":`${LDatas.length*90}px`}}>
          {LDatas && 
          
            LDatas.map((data,i) => 
            { 
              return <div onClick={()=>{
                setMid(i+1)}} key={i}>
                    <p>{data.name}</p>
                    </div>}
            )
            }
          
        </div>
      </div>

      <CategoryUnderMenu
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