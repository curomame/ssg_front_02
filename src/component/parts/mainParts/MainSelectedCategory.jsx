import React from 'react'
import { useState } from 'react'
import Items from '../../layout/Items'
import MainCategorySelect from './MainCategorySelect'

function MainSelectedCategory() {
  
  // 카테고리 셀렉트에서 인지 하는 값을 설정
  // 해당 값을 아래 프롭으로 넘기기
  // maincategoryselect에서 해당 값 선택시 css변경 및 아래 내용으로 변경
  
  const [isSelected, setIsSelected] = useState(0)

  return (
    <>


      <MainCategorySelect
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />

      <div style={{"marginLeft":"15px", "marginTop":"10px"}}>
        <Items/>
      </div>


    </>
  )
}

export default MainSelectedCategory