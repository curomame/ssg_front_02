import React from 'react'
import ProductCombOpt from '../../parts/productParts/ProductCombOpt';
import ProductStandardOpt from '../../parts/productParts/ProductStandardOpt';

function ProductOptionSurface({detailData,setProductOptId}) {

  const productType = detailData.productGetDto.optionType
  
  //product type 기준 으로 총 4가지로 나뉨
  // STANDARD_TYPE(단독),
  // COMBINATION_TYPE(조합),
  // ALL_TYPE(단독+조합),
  // NOTHING(없음)



  switch (productType) {
    case 'STANDARD_TYPE':
      return <ProductStandardOpt
              detailData={detailData}
              setProductOptId={setProductOptId}/>
      
    case 'COMBINATION_TYPE':
      return <ProductCombOpt
              detailData={detailData}
              setProductOptId={setProductOptId}/>
    
      
    case 'ALL_TYPE':
      return (<div>단독+조합 타입</div>)
    

    case 'NOTHING':
      return (<div>없음</div>)
    
    default:
      break;
  }


 



  
}

export default ProductOptionSurface