import React from 'react'

function ProductCombOptDetail(
  { setOpenDetail,
    optBoxSelect,
    selected,
    setSelected,
    detailType}) {

      console.log(optBoxSelect)

  const handleSetSelcetd = (id,desc) => {
    console.log(id,desc);
    setSelected({...{id,desc}})
    setOpenDetail(false)
  }

  return (
    <>
      <div className='productCombOptContainer'>
        
        <div onClick={() => setOpenDetail(false)}> 아랫버튼 </div>

        <div className='productOptBox'>
          <div><p>선택하세요.(색상)</p></div>
        </div>

        {optBoxSelect ? optBoxSelect.map((opt,i) => {

          let tempId = ''
          if(detailType==="opt1"){
            tempId = opt.comOptionAId
          } else if (detailType==="opt2"){
            tempId = opt.comOptionBId
          } else {
            tempId = opt.comOptionCId
          }
          

          return <div onClick={()=>handleSetSelcetd(tempId,opt.description)} key={i} className='productOptBox'>
                  <div><p>{opt.description}</p></div>
                </div>

        })
      
      : <div>빈 옵션</div>
      }

      </div>
    </>
  )
}

export default ProductCombOptDetail