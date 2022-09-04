import React from 'react'

function ProductSelectedOptItem({fullItem,setFullItem}) {

  console.log(fullItem);
  
  return (
    <>
    
    <div>
      {fullItem && fullItem.map((item) => {

        return <div>
                
                <div>
                  <div>본점 {item.optionAName} {item.optionBName} {item.optionCName}</div>
                </div>

                <div>
                  <div><input type="number" defaultValue={1}/></div>
                  <div>가격</div>
                </div>

              </div>

      })}
    </div>

    </>
  )
}

export default ProductSelectedOptItem