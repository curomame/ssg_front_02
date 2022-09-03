import React from 'react'
import ProductOptionDetail from '../../parts/productParts/ProductOptionDetail'
import { useState } from 'react';
import ProductOptionSurface from './ProductOptionSurface';

function ProductOptionSelect({handleCloseOptionSelect,setPurchaseCondition,detailData}) {

  //1. 아래 적혀있는 옵션에 맞춰서 메뉴 바 만들기(map)  /po/comOption/{optionAId}
  //2. 해당 메뉴 누르고 다음 메뉴 누를때마다 옵션 호출하기   /po/comOption/{optionAId}/{optionBId}
  //3. 마지막 옵션 선택시 해당 값 들고오고 그 값은 상품으로 추가하기   /po/comOption/{optionAId}/{optionBId}/optionCId

  

  return (
    <>



      <div className='productBottomButtonOption'>
      <div onClick={handleCloseOptionSelect} className='productBottomButtonOptionDown'>
        <span className="material-icons-outlined">keyboard_arrow_down</span>
      </div>

      <ProductOptionSurface
        detailData={detailData}/>
      


      <div className='productBottomButtonPrice'>
        <h4>총 합계 <span>0원</span></h4>
      </div>

    </div>
    </>
  )
}

export default ProductOptionSelect