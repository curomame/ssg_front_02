import React from 'react'
import ProductOptionDetail from '../../parts/productParts/ProductOptionDetail'
import { useState } from 'react';
import ProductOptionSurface from './ProductOptionSurface';

function ProductOptionSelect({handleCloseOptionSelect,setPurchaseCondition,detailData,setProductOptId}) {


  return (
    <>



      <div className='productBottomButtonOption'>
      <div onClick={handleCloseOptionSelect} className='productBottomButtonOptionDown'>
        <span className="material-icons-outlined">keyboard_arrow_down</span>
      </div>

      
      <ProductOptionSurface
        detailData={detailData}
        setProductOptId={setProductOptId}/>
      


      <div className='productBottomButtonPrice'>
        <h4>총 합계 <span>0원</span></h4>
      </div>

    </div>
    </>
  )
}

export default ProductOptionSelect