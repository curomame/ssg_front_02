import React from 'react'
import { useRecoilValue } from 'recoil'
import CategoryState from '../../../recoil/atoms/CategoryState'

function CategoryUpperMenu() {

  const categoryDatas = useRecoilValue(CategoryState);

  console.log(categoryDatas);
  
  return (
    <>
    <div className='categoryUpperMenuContainer'>
      
      <div className='categoryUpperMenuTop'>
        <div>화살표</div>
        <div>패션의류 {'>'} <span>여성브랜드 패션</span></div>
      </div>

      <div className='categoryUpperMenuMiddle'>
        <div>미들 카테고리 map</div>
      </div>

      <div className='categoryUpperMenuBottom'>
        {/* small category map */}
      </div>

    </div>
    </>
  )
}

export default CategoryUpperMenu