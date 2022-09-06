import React from 'react'
import { useState } from 'react'

function ProductSelectedOptItem({fullItem,setFullItem,setTotalprice}) {

  const [tempCount,setTempCount] = useState(1)


  return (
    <>
    
    <div>
      {fullItem && fullItem.map((item) => {
        console.log(item)
        return <div className='productSelectedOptItemContainer'>
                
                <div className='productSelectedOptItemTitle'>
                  <div><p>본점 {'색상'}:{item.optionAName} / {item.name}:{item.optionBName} {item.optionCName}</p></div>
                </div>

                <div className='productSelectedOptItemPrice'>
                  <div className='productSelectedOptItemPriceInput'>
                    <div onClick={()=>setTempCount(tempCount-1)}><span className="material-icons-outlined">remove</span></div>
                      <input type="number" value={tempCount}/>
                    <div onClick={()=>setTempCount(tempCount+1)}><span className="material-icons-outlined">add</span></div>
                    </div>
                    <div><p>{(item.price*tempCount).toLocaleString()}원</p></div>
                </div>

              </div>

      })}
    </div>

    </>
  )
}

export default ProductSelectedOptItem