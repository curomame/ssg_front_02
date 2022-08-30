import React from 'react'

import BottomNav from '../../layout/BottomNav'
import MainImgBanner from '../../parts/mainParts/MainImgBanner'
import Header from '../common/Header'
import MainEventSlider from '../main/MainEventSlider'
import MainFooter from '../common/CommonFooter'
import CategoryItem from './CategoryItem'
import CategoryMainGrid from './CategoryMainGrid'
import CommonSlider from '../common/CommonSlider'
import CategoryUpperMenu from '../../layout/Category/CategoryUpperMenu'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


const dummys = [

  {
      "id":1,
      "mall":"신세계몰",
      "title":"버버리",
      "sub":"다이아몬드",
      "price":1620000,
      "src":"//sitem.ssgcdn.com/56/23/61/item/1000456612356_i1_232.jpg",
      "link":"/",
      "discount":15,
      "freeShip":false,
      "gurantee":false,
      "import":true,
      "star":4.5,
      "reviewCount":10000
  
  },
  {
    "id":2,
    "mall":"신세계몰",
    "title":"쿠라라",
    "sub":"뽀롤ㄹ로로",
    "price":1620000,
    "src":"//sitem.ssgcdn.com/56/23/61/item/1000456612356_i1_232.jpg",
    "link":"/",
    "discount":null,
    "freeShip":true,
    "gurantee":false,
    "import":false,
    "star":4.5,
    "reviewCount":100
  
  },
  {
    "id":3,
    "mall":"신세계몰",
    "title":"바바리",
    "sub":"아이다몬스",
    "price":1620000,
    "src":"//sitem.ssgcdn.com/56/23/61/item/1000456612356_i1_232.jpg",
    "link":"/",
    "discount":15,
    "freeShip":false,
    "gurantee":false,
    "import":false,
    "star":4.5,
    "reviewCount":100
  
  }
  
  ]


function CategoryDetail() {

  return (
    <>
      <Header/>

      <CategoryUpperMenu/>

      

      <div style={{"display":"flex", "flexWrap":"wrap"}}>
        {dummys && 
          dummys.map((item,i)=> (
            <CategoryItem key={i} item={item}/>
          ))
        }
      </div>



{/* 상품 간단 그리드 2/2 */}

      {/*  */}
      <div><h2>공식 브랜드관</h2></div>

      <MainFooter/>
      <BottomNav/>
    </>
  )
}

export default CategoryDetail