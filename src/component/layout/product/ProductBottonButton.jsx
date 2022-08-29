import React, { useState } from 'react'
import CommonCartParts from '../../parts/commonsParts/CommonCartParts';
import CommonPresent from '../../parts/commonsParts/CommonPresent';
import CommonWishListParts from '../../parts/commonsParts/CommonWishListParts';
import ProductOptionSelect from '../../parts/product/ProductOptionSelect';

function ProductBottonButton() {

  const [purchaseCondition, setPurchaseCondition] = useState(true);

  const handleOpenOptionSelect = () => {
    setPurchaseCondition(false);
  }

  const handleCloseOptionSelect = () => {
    setPurchaseCondition(true);
  }

  return (
    <>
    
    {purchaseCondition 
    || 
    <ProductOptionSelect
      handleCloseOptionSelect={handleCloseOptionSelect}
      setPurchaseCondition={setPurchaseCondition}
    />
  }
    <div className='productBottomButtonContainer'>
      {purchaseCondition 
      ?
      <div className='productBottomButtonTwo'>
        <div className='productBottomButtonHeart'><CommonWishListParts/></div>
        <div className='productBottomButtonPresent'><CommonPresent/></div>
      </div>
      :
      <div className='productBottomButtonOne'>
        <h2>장바구니</h2>
      </div>
  }

      <div onClick={handleOpenOptionSelect} className='productBottomButtonPurchase'>구매하기</div>
 
    </div>

    </>
  )
}

export default ProductBottonButton