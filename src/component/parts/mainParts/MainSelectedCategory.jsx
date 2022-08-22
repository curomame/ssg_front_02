import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Items from '../../layout/Items'
import MainCategorySelect from './MainCategorySelect'

function MainSelectedCategory() {
  
  let row = 10
  // 카테고리 셀렉트에서 인지 하는 값을 설정
  // 해당 값을 아래 프롭으로 넘기기
  // maincategoryselect에서 해당 값 선택시 css변경 및 아래 내용으로 변경
  
  const [itemDatas, setItemDatas] = useState('');
  const [isSelected, setIsSelected] = useState(0)
  const [url, setUrl] = useState(`http://10.10.10.167:8083/productCtgList/list/1`)

  useEffect(() => {
    { url && 
      axios.get(url)
      .then(res => setItemDatas(res.data))
    }
    
  },[url]);

  useEffect(()=> {
    setUrl(`http://10.10.10.167:8083/productCtgList/list/${+isSelected+1}`)
  },[isSelected])


  return (
    <>


      <MainCategorySelect
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />


      <div style={{"marginLeft":"15px", "marginTop":"10px"}}>
        <Items
          itemDatas={itemDatas}
          row={row}
        />
      </div>


    </>
  )
}

export default MainSelectedCategory