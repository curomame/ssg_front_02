import React from 'react'

function ProductOptionDetail() {

  // console.log(opt)
  //{handleCloseDetailOpt1,opt,setOpt}

  // const handleSelectOpt = (e) => {
  //   setOpt(e.target.innerText);
  //   handleCloseDetailOpt1();
  // }

  return (
    <>
      <div className='productOptionDetailContainer'>
      
        <div className='productBottomButtonOptionDown'>
          <span class="material-icons-outlined">keyboard_arrow_down</span>
        </div>

        <div className='productBottomButtonOptionSelect'>
          <h2>선택하세요.(색상)</h2>
          <span class="material-icons-outlined">keyboard_arrow_up</span>
        </div>



      </div>
    </>
  )
}

export default ProductOptionDetail