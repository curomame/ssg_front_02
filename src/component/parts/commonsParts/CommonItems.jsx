import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddWishUtil from '../../../utils/AddWishUtil';
import AddCartUtil from '../../../utils/AddCartUtil';



function CommonItems({itemDatas}) {

  // const [itemDatass, setItemDatass] = useState([]);

  const [tempHeart,setTempHeart] = useState([])


  const handleWishFunc = (id,i) => {

    const prevHeart = tempHeart.slice()
    if(prevHeart[i] === true){
      prevHeart[i]= false;
    } else {
      prevHeart[i]= true;
    }

    setTempHeart([...prevHeart])
    AddWishUtil(id)
  }

  useEffect(() => {

    const newheartArr = [];
    {itemDatas && 
      itemDatas.map((item) => newheartArr.push(item.wishList))
      setTempHeart([...newheartArr])
    }

  },[itemDatas])

  return (
    <>
    {itemDatas[0] && 
      itemDatas.map((item,idx) => (

      <div key={item.productId} className="categoryItemContainer">


        


      
      <div>

      <Link to={`/product/${item.productId}`}>
        <div><img style={{"width":"100%"}} src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="" /></div>
      </Link>

        <div style={{"display":"flex","justifyContent":"right"}}>
          {tempHeart[idx]
            ?<span onClick={()=>handleWishFunc(item.productId,idx)} className="material-icons-outlined" style={{"color":"red"}}>favorite</span> 
            :<span onClick={()=>handleWishFunc(item.productId,idx)} className="material-icons-outlined">favorite_border</span>}
            <span onClick={()=>AddCartUtil(item.productId)} className="material-icons-outlined">shopping_cart</span>
        </div>


        <Link to={`/product/${item.productId}`}>
        <div className='categoryItemText'>



            <div><h3>신세계몰</h3></div>
            <div><h2>{item.brandName}</h2></div>
            <div><p className='categoryItemSub'>{item.productName}</p></div>
            <div><p className={`${item.discountRate ? "categoryItemPrice categoryline" : "categoryItemPrice"}`}>{(+(item.price).toFixed()).toLocaleString()}원</p></div>
            {item.discountRate
              ? <div className='categoryItemDiscount'>
                  <p>{(+(item.price * (100 - item.discountRate)/100).toFixed()).toLocaleString()}원</p>
                  <p>{item.discountRate}%</p>
                </div> 
              : null}
            <div className='categoryItemStar'><p>★</p><p>{item.avgStar}</p><p>|</p><p>{(item.productReviewCnt).toLocaleString()}건</p></div>
  

  
          <div style={{display:"flex"}}>
            
            {item.import ? <div className='categoryAttBox'><p>해외직구</p></div> :null}
            {item.isFreeDeliverFee ? <div className='categoryAttBox'><p>무료배송</p></div> :null}
                  </div>
                </div>
        </Link>
      
      </div>
      
      </div>
      ))
    }
    </>
  )
}

export default CommonItems