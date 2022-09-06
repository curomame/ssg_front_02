import React from 'react'

function ProductStandardOptList({detailData,setOpenModal,setProductOptId}) {

  // console.log(detailData.standardOptionDTOList[0].optionName)

  const handleProductOptId = (optId) =>{
    
    setProductOptId([optId.productOptionId])
    setOpenModal(false)
  }

  return (
    <>
    
    <div className="productCombOptContainer">
      <div onClick={()=>setOpenModal(false)}> 아랫버튼 </div>
      

      
      <div class="productOptBox"><div><p>선택하세요.({detailData.standardOptionDTOList[0].optionName})</p></div></div>
        {detailData.standardOptionDTOList.map((item) => {
          return <div onClick={()=>handleProductOptId(item)} key={item.productOptionId} class="productOptBox"><div><p>{item.optionDescription}</p></div></div>
        })}
      </div>
    
    </>
  )
}

export default ProductStandardOptList