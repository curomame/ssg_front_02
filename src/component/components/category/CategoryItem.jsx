import axios from 'axios'
import React, { Suspense, useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import CategoryFilter from '../../parts/categoryParts/CategoryFilter';

function CategoryItem({type,ctgId,tempId,setTempId}) {

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
  const [tempFilter, setTempFilter] = useState(filterCategory[1])

  const [offset, setOffset] = useState(1)

  const [itemDatas, setItemDatas] = useState([]);
  


  const getTempDatas = () => {

    axios.get(process.env.REACT_APP_TEST_URL+`/productCtgList/lCtg/${tempId}/${offset}?sort=${tempFilter.sort}`)
    .then(res => {
      console.log(res.data.productTitleDtoList);
      setItemDatas((prev) => [...prev,...res.data.productTitleDtoList])
    })
    .catch(err => console.error(err))  
    setOffset(offset+1)
    return null;
  }

  const handleScroll = (e) => {
    if(window.innerHeight + e.target.documentElement.scrollTop +1 >= e.target.documentElement.scrollHeight){
      getTempDatas()
    }
  }

  useEffect(() => {

    if(tempId===1){
      getTempDatas()
      window.addEventListener("scroll",handleScroll)
    } 
  },[tempId])
  

  useEffect(() => {
    setItemDatas([])
    getTempDatas()
    setOffset(1)

  },[tempFilter])


  // console.log(itemDatas);

  return (
    <>
  <CategoryFilter
  tempFilter={tempFilter}
  setTempFilter={setTempFilter}
  filterCategory={filterCategory}/>

  <div className='categoryItemTopContainer'> 
    {itemDatas[0] && 
      itemDatas.map((item,idx) => (

      <div key={idx} className="categoryItemContainer">
      <div>
        <div><img style={{"width":"100%"}} src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="" /></div>
        
        <div className='categoryItemText'>
        
            <div><h3>신세계몰</h3></div>
            <div><h2>{item.brandName}</h2></div>
            <div><p className='categoryItemSub'>{item.productName}</p></div>
            <div><p className={`categoryItemPrice ${item.discount ? "categoryline" : null}`}>{(item.price).toLocaleString()}원</p></div>
            {item.discountRate
              ? <div className='categoryItemDiscount'>
                  <p>{(item.price * (100 - item.discountRate)/100).toLocaleString()}원</p>
                  <p>{item.discountRate}%</p>
                </div> 
              : null}
            <div className='categoryItemStar'><p>★</p><p>{item.avgStar}</p><p>|</p><p>{(item.productReviewCnt).toLocaleString()}건</p></div>
  
          <div style={{display:"flex"}}>
            
            {item.import ? <div className='categoryAttBox'><p>해외직구</p></div> :null}
            {item.freeShip ? <div className='categoryAttBox'><p>무료배송</p></div> :null}
                  </div>
                </div>
      </div>
      </div>
      ))
    }
</div>

  



      
      </>
  )
}

export default CategoryItem