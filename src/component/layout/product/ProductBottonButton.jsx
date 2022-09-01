import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import AddCartUtil from '../../../utils/AddCartUtil';
import AddWishUtil from '../../../utils/AddWishUtil';
import CommonCartParts from '../../parts/commonsParts/CommonCartParts';
import CommonPresent from '../../parts/commonsParts/CommonPresent';
import CommonWishListParts from '../../parts/commonsParts/CommonWishListParts';
import ProductOptionSelect from '../../parts/productParts/ProductOptionSelect';

function ProductBottonButton() {

  const params = useParams(); 

  const [purchaseCondition, setPurchaseCondition] = useState(true);

  const handleCartInput = () => {
    AddCartUtil(params.id)
  }

  const handleOpenOptionSelect = () => {
    setPurchaseCondition(false);
  }

  const handleCloseOptionSelect = () => {
    setPurchaseCondition(true);
  }

  const handleWishToggle = () => {
    AddWishUtil(params.id);
    alert('위시리스트에 저장되었습니다.')
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
        <div onClick={handleWishToggle} className='productBottomButtonHeart'><span className="material-icons-outlined">favorite_border</span></div>
      </div>
      :
      <div onClick={handleCartInput} className='productBottomButtonOne'>
        <h2>장바구니</h2>
      </div>
  }

      <div onClick={handleOpenOptionSelect} className='productBottomButtonPurchase'>구매하기</div>
 
    </div>

    </>
  )
}

export default ProductBottonButton