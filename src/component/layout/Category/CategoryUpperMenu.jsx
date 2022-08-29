import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import CategoryState from '../../../recoil/atoms/CategoryState'
import BackToPage from '../../../utils/BackToPage';
import CategoryUnderMenu from '../../parts/categoryParts/CategoryUnderMenu';

function CategoryUpperMenu() {

  const location = useLocation()
  const navigate = useNavigate();
  const categoryDatas = useRecoilValue(CategoryState);  

  // console.log(categoryDatas);

  const [Lid, setLid] = useState(location.state.Lid ? location.state.Lid : 1)
  const [Mid, setMid] = useState(location.state.Mid ? location.state.Mid : 1)


  const [LDatas, setLDatas] = useState(null);
  const [MDatas, setMDatas] = useState(null);

  useEffect(()=>{
    
    // console.log(categoryDatas);
    console.log(Lid,Mid);
    console.log(categoryDatas[Lid-1]);
    console.log(categoryDatas[Lid-1].lcategoryList);
    {categoryDatas &&
      // console.log(categoryDatas[Lid-1],'here1');
      // console.log(categoryDatas[Lid-1].lcategoryList) 

      setLDatas(categoryDatas[Lid-1].lcategoryList);
    }


    {
      // categoryDatas &&
      // console.log(categoryDatas[Lid-1].lcategoryList[Mid-1],'here1'); 
      
      // console.log(categoryDatas[Lid-1].lcategoryList.filter((item)=> {if(item.id === Mid) return item[0].mcategoryList}));

      // console.log(categoryDatas[Lid-1].lcategoryList[Mid-1].mcategoryList,'here2');
      // setMDatas(categoryDatas[Lid-1].lcategoryList.filter((item)=> {if(item.id === Mid) return item}))

    }


  },[categoryDatas,Lid,Mid])


  return (
    <>

    {LDatas && 

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
              // console.log(data.id);
              return <div onClick={()=>{
                // console.log(data.id)
                setMid(data.id)}} key={i}>
                    <p>{data.name}</p>
                    </div>}
            )
            }
          
        </div>
      </div>

      <CategoryUnderMenu
        MDatas={MDatas}
      />


    </div>

    }


        </>
      )
    }

export default CategoryUpperMenu