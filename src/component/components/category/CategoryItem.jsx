import axios from 'axios'
import React, { Suspense, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import CategoryFilter from '../../parts/categoryParts/CategoryFilter';
import AddWishUtil from '../../../utils/AddWishUtil';
import AddCartUtil from '../../../utils/AddCartUtil';

function CategoryItem({tempStatus,ctgId,tempId,setTempId}) {

  const filterCategory = [

    {
      "id":1,
      "sort":"cnt",
      "desc":"리뷰 많은 순"
    },
    {
      "id":2,
      "sort":"regDate",
      "desc":"신 상품순"
    },
    {
      "id":3,
      "sort":"prcdsc",
      "desc":"가격 높은 순"
    },
    {
      "id":4,
      "sort":"prcasc",
      "desc":"가격 낮은 순"
    }
  ]

  const navigate = useNavigate();

  const [tempFilter, setTempFilter] = useState({...filterCategory[1]})
  const [offset, setOffset] = useState(1)
  const [itemDatas, setItemDatas] = useState([]);

  const [tempHeart,setTempHeart] = useState([])

  const getTempDatas = (newoffset) => {

    console.log(tempId, offset, tempStatus);

    if(tempStatus && newoffset===1){

      console.log('something change');
      console.log(tempStatus, tempId);

      axios.get(process.env.REACT_APP_TEST_URL+`/productCtgList/${tempStatus}/${tempId}/${newoffset}?sort=${tempFilter.sort}`,{
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
      })
      .then(res => {
        
        setItemDatas([...res.data.productTitleDtoList])
      })
      .catch(err => console.error(err))  
      setOffset(newoffset+1)
      return null;

    } else if (tempStatus){

      console.log('scroll');

      axios.get(process.env.REACT_APP_TEST_URL+`/productCtgList/${tempStatus}/${tempId}/${offset}?sort=${tempFilter.sort}`,{
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
      })
      .then(res => {

        console.log(itemDatas);
        console.log(res.data.productTitleDtoList)

        setItemDatas((prev) => {
          console.log(prev)
          return [...prev,...res.data.productTitleDtoList]})
      })
      .catch(err => console.error(err))  
      setOffset(offset+1)
      return null;
    }

    
  }

  const handleToProduct = (productId) => {
    navigate(`/product/${productId}`)
  }

  const handleScroll = (e) => {
    if(window.innerHeight + e.target.documentElement.scrollTop +1 >= e.target.documentElement.scrollHeight){
      getTempDatas()
    }
  }

  

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
    if(typeof tempId==='number'){  
      // setOffset(1)
      // setItemDatas([])
      getTempDatas(1)
      window.addEventListener("scroll",handleScroll)
    } 

  },[tempId,tempStatus,tempFilter])


  useEffect(() => {

    const newheartArr = [];
    {itemDatas && 
      itemDatas.map((item) => newheartArr.push(item.wishList))
      setTempHeart([...newheartArr])
    }

  },[itemDatas])


  useEffect(() => {

    

  },[])


  console.log(itemDatas);

  return (
    <>
  <CategoryFilter
  tempFilter={tempFilter}
  setTempFilter={setTempFilter}
  filterCategory={filterCategory}
  tempStatus={tempStatus}/>

  <div className='categoryItemTopContainer'> 
    {itemDatas[0] && 
      itemDatas.map((item,idx) => {
        // console.log(item);

      return <div key={idx} className="categoryItemContainer">

        
        <div onClick={()=>handleToProduct(item.productId)}><img style={{"width":"100%"}} src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="" /></div>
        
        <div className='categoryItemHeart' >
          
          {tempHeart[idx]
          ?<span onClick={()=>handleWishFunc(item.productId,idx)} className="material-icons-outlined" style={{"color":"red"}}>favorite</span> 
          :<span onClick={()=>handleWishFunc(item.productId,idx)} className="material-icons-outlined">favorite_border</span>}
          <span onClick={()=>AddCartUtil(item.productId)} className="material-icons-outlined">shopping_cart</span>
        </div>


        <div onClick={()=>handleToProduct(item.productId)} className='categoryItemText'>
            <div><h3>신세계몰</h3></div>
            <div><h2>{item.brandName}</h2></div>
            <div><p className='categoryItemSub'>{item.productName}</p></div>
            <div><p className={item.discountRate ? "categoryItemPrice categoryline" : 'categoryItemPrice'}>{(item.price).toLocaleString()}원</p></div>
            {item.discountRate
              ? <div className='categoryItemDiscount'>
                  <p>{(item.price * (100 - item.discountRate)/100).toLocaleString()}원</p>
                  <p>{item.discountRate}%</p>
                </div> 
              : null}
            <div className='categoryItemStar'><p>★</p><p>{(item.avgStar).toFixed(1)}</p><p>|</p><p>{item.productReviewCnt}건</p></div>
  
          <div style={{display:"flex"}}>
            
            {item.import ? <div className='categoryAttBox'><p>해외직구</p></div> :null}
            {item.isFreeDeliverFee ? <div className='categoryAttBox'><p>무료배송</p></div> :null}
                  </div>
                </div>

      </div>
      })
    }
</div>

  



      
      </>
  )
}

export default CategoryItem