import React from 'react'

function ProductOptionDetail({handleCloseDetailOpt1,opt,setOpt}) {

  // console.log(opt)

  const handleSelectOpt = (e) => {
    setOpt(e.target.innerText);
    handleCloseDetailOpt1();
  }

  return (
    <>
      <div className='productOptionDetailContainer'>
      
        <div onClick={handleCloseDetailOpt1} className='productBottomButtonOptionDown'>
          <span class="material-icons-outlined">keyboard_arrow_down</span>
        </div>

        <div onClick={handleCloseDetailOpt1} className='productBottomButtonOptionSelect'>
          <h2>선택하세요.(색상)</h2>
          <span class="material-icons-outlined">keyboard_arrow_up</span>
        </div>

        <div onClick={handleSelectOpt} className='productBottomButtonOptionSelect noBoder'>
          opt1
        </div>

        <div onClick={handleSelectOpt} className='productBottomButtonOptionSelect noBoder'>
          opt2
        </div>

        <div onClick={handleSelectOpt} className='productBottomButtonOptionSelect noBoder'>
          opt3
        </div>

      </div>
    </>
  )
}

export default ProductOptionDetail