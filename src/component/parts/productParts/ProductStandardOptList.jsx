import React from 'react'
import { useEffect } from 'react';

function ProductStandardOptList({detailData,setOpenModal,setProductOptId,setTempItem}) {

  // console.log(detailData.standardOptionDTOList[0].optionName)
  
  const handleProductOptId = (item) =>{
    
    console.log(item);
    // console.log(item.productOptionId);

    setTempItem((prev)=>[...prev,item])
    setProductOptId((prev) =>{ 
      console.log(prev)
      return [...prev,item.productOptionId]}
      )
    setOpenModal(false)
  }

  return (
    <>
    
    <div className="productCombOptContainer">
      <div onClick={()=>setOpenModal(false)}> 아랫버튼 </div>
      

      
      <div className="productOptBox"><div><p>선택하세요.({detailData.standardOptionDTOList[0].optionName})</p></div></div>
        {detailData.standardOptionDTOList.map((item) => {
          return <div onClick={()=>handleProductOptId(item)} key={item.productOptionId} className="productOptBox"><div>
            <p>{item.optionDescription}</p></div>
            </div>
        })}
      </div>
    
    </>
  )
}

export default ProductStandardOptList