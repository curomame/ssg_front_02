import React from 'react'
import ProductOptionDetail from './ProductOptionDetail'
import { useState } from 'react';

function ProductOptionSelect({handleCloseOptionSelect,setPurchaseCondition}) {

  const [detailMenu1, setDetailMenu1] = useState(false);
  const [detailMenu2, setDetailMenu2] = useState(false);
  
  const [opt1, setOpt1] = useState(null);
  const [opt2, setOpt2] = useState(null);


  const handleOpenDetailOpt1 = () => {
    setDetailMenu1(true);
  }

  const handleCloseDetailOpt1 = () => {
    setDetailMenu1(false);
  }

  const handleOpenDetailOpt2 = () => {
    setDetailMenu2(true);
  }

  const handleCloseDetailOpt2 = () => {
    setDetailMenu2(false);
  }

  console.log(opt1,'옵션111');
  console.log(opt2,'옵션222');

  return (
    <>

      {detailMenu1 
      ? <ProductOptionDetail
        handleCloseDetailOpt1={handleCloseDetailOpt1}
        opt={opt1}
        setOpt={setOpt1}/> 
      : null}


    {detailMenu2 
      ? <ProductOptionDetail
        handleCloseDetailOpt1={handleCloseDetailOpt2}
        opt={opt1}
        setOpt={setOpt2}
        /> 
      : null}


      <div className='productBottomButtonOption'>
      <div onClick={handleCloseOptionSelect} className='productBottomButtonOptionDown'>
        <span class="material-icons-outlined">keyboard_arrow_down</span>
      </div>
      <div onClick={handleOpenDetailOpt1} className='productBottomButtonOptionSelect'>
        <h2>{opt1 ? opt1 : "선택하세요.(사이즈)"}</h2>
        <span class="material-icons-outlined">keyboard_arrow_down</span>
        </div>
      
      <div onClick={handleOpenDetailOpt2} className='productBottomButtonOptionSelect'>
        <h2>{opt2 ? opt2 : "선택하세요.(색상)"}</h2>
        <span class="material-icons-outlined">keyboard_arrow_down</span>
      </div>

      <div className='productBottomButtonPrice'>
        <h4>총 합계 <span>0원</span></h4>
      </div>

    </div>
    </>
  )
}

export default ProductOptionSelect