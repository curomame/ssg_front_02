import React, { useState } from 'react'
import ProductStandardOptList from './ProductStandardOptList'

function ProductStandardOpt({detailData,setProductOptId}) {

  const [tempCount,setTempCount] = useState(1)

  const [openModal,setOpenModal] = useState(false)

  const [tempItem, setTempItem] = useState([])

  const hanleSetProductOptId = () => {
        setProductOptId([...[detailData.standardOptionDTOList[0].productOptionId]])
    
  }


  // console.log(detailData.standardOptionDTOList.length);

  return (
    <>

    {detailData.standardOptionDTOList.length >=2
    
    ? <>

      {/* <div onClick={()=>setOpenModal(true)} className="productOptBox"><p>선택하세요.(사이즈)</p></div> */}
      
      <div onClick={()=>setOpenModal(true)} className="productOptBox"><div><p>선택하세요({detailData.standardOptionDTOList[0].optionName})</p>
      </div><div><span className="material-icons-outlined">keyboard_arrow_down</span></div>
      </div>
      
      {openModal && 
        <ProductStandardOptList
        setTempItem={setTempItem}
        setProductOptId={setProductOptId}
        detailData={detailData}
        setOpenModal={setOpenModal}
        />}

        {tempItem &&
        tempItem.map((item,idx) => {
            console.log(item)
          return <div key={idx}>

            <div className='productSelectedOptItemContainer productStandardOptContainer'>
                    <div className='productSelectedOptItemTitle'>
                      <div><p><span>{detailData.productGetDto.productName}</span> </p></div>
                      <div><p><span>{item.optionName}:{item.optionDescription}</span> </p></div>
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


          </div>
        })}

      </>

    : <div onClick={()=>hanleSetProductOptId()} className='productSelectedOptItemContainer productStandardOptContainer'>
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
    
    }




    </>
  )
}

export default ProductStandardOpt