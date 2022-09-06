import React, { useState } from 'react'

function ProductStandardOpt({detailData,setProductOptId}) {

  const [tempCount,setTempCount] = useState(1)

  // console.log(detailData.productGetDto.productId)

  const hanleSetProductOptId = () => {

    console.log(detailData.productGetDto.productId);
    setProductOptId([detailData.productGetDto.productId])

  }


  console.log(detailData)
  // console.log(setProductOptId)
// productStandardOptContainer
  return (
    <>
    <div onClick={()=>hanleSetProductOptId()} className='productSelectedOptItemContainer productStandardOptContainer'>
                
                <div className='productSelectedOptItemTitle'>
                  <div><p><span>{detailData.productGetDto.productName}</span> </p></div>
                  
                </div>

                <div className='productSelectedOptItemPrice'>
                  <div className='productSelectedOptItemPriceInput'>
                    <div onClick={()=>setTempCount(tempCount-1)}><span className="material-icons-outlined">remove</span></div>
                      <input type="number" value={tempCount}/>
                    <div onClick={()=>setTempCount(tempCount+1)}><span className="material-icons-outlined">add</span></div>
                    </div>
                    <div><p>{(detailData.productGetDto.price).toLocaleString()}원</p></div>
                </div>

              </div>


    </>
  )
}

export default ProductStandardOpt