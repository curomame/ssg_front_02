import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AddCartUtil from '../../../utils/AddCartUtil';
import AddWishUtil from '../../../utils/AddWishUtil';
import CommonCartParts from '../../parts/commonsParts/CommonCartParts';
import CommonPresent from '../../parts/commonsParts/CommonPresent';
import CommonWishListParts from '../../parts/commonsParts/CommonWishListParts';
import ProductOptionSelect from '../../components/product/ProductOptionSelect';
import { useEffect } from 'react';

function ProductBottonButton({detailData}) {

// console.log(detailData);


  const params = useParams(); 
  const navigate = useNavigate();

  const [purchaseCondition, setPurchaseCondition] = useState(true);
  const [productOptId, setProductOptId] = useState([])
  const [tempHeart, setTempHeart] = useState();
 

  useEffect(() => {    
    setTempHeart(detailData.wishList)
  },[])

  console.log(productOptId)


  const handleCartInput = () => {

    if((productOptId === undefined)||(productOptId[0] === undefined)){
      console.log('여기인데');
      window.alert('옵션을 선택해주세요!')
    } else { 
      AddCartUtil(productOptId)
    }

    
  }

  const handleOpenOptionSelect = () => {

    if(!purchaseCondition){
      navigate('/order')
    } else {

      if((detailData.productGetDto.optionType === 'STANDARD_TYPE') && (detailData.standardOptionDTOList.length === 1)){
        console.log(detailData.standardOptionDTOList[0]);
        setProductOptId([detailData.standardOptionDTOList[0].productOptionId])
      }

      setPurchaseCondition(false);
    }

    
  }

  const handleCloseOptionSelect = () => {
      setPurchaseCondition(true);
  }

  

  const handleWishToggle = () => {
    setTempHeart((prev) => (!prev))
    AddWishUtil(params.id);
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
        <div onClick={handleWishToggle} className='productBottomButtonHeart'>
          {tempHeart 
          ? <span className="material-icons hearChecked">favorite</span>
          : <span className="material-icons-outlined">favorite_border</span>}
          
          </div>
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