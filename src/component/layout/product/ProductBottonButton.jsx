import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AddCartUtil from '../../../utils/AddCartUtil';
import AddWishUtil from '../../../utils/AddWishUtil';
import CommonCartParts from '../../parts/commonsParts/CommonCartParts';
import CommonPresent from '../../parts/commonsParts/CommonPresent';
import CommonWishListParts from '../../parts/commonsParts/CommonWishListParts';
import ProductOptionSelect from '../../components/product/ProductOptionSelect';

function ProductBottonButton({detailData}) {

console.log(detailData);


  const params = useParams(); 
  const navigate = useNavigate();

  const [purchaseCondition, setPurchaseCondition] = useState(true);
  const [productOptId, setProductOptId] = useState([])
  
  
  console.log(productOptId)


// console.log(productOptId);

  const handleCartInput = () => {
    console.log(productOptId,productOptId);

    if(productOptId[0] === undefined){
      window.alert('옵션을 선택해주세요!')
    } else { 
      AddCartUtil(productOptId)
    }

    
  }

  const handleOpenOptionSelect = () => {

    if(!purchaseCondition){
      navigate('/order')
    } else {
      setPurchaseCondition(false);
    }

    
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
      detailData={detailData}
      handleCloseOptionSelect={handleCloseOptionSelect}
      setPurchaseCondition={setPurchaseCondition}
      setProductOptId={setProductOptId}
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