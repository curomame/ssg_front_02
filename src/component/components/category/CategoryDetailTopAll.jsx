import React from 'react'

import BottomNav from '../../layout/BottomNav'
import MainImgBanner from '../../parts/mainParts/MainImgBanner'
import Header from '../main/Header'
import MainEventSlider from '../main/MainEventSlider'
import MainFooter from '../main/MainFooter'
import CategoryItem from './CategoryItem'
import CategoryMainGrid from './CategoryMainGrid'

function CategoryDetailTopAll() {
  return (
    <>
      <Header/>

      <div>위의 카테고리 부분</div>
      {/* 전체보기 카테고리 누르면 그 바로 아래를 기준으로 메뉴 드롭 com 1*/}
      <MainEventSlider/>
      <CategoryMainGrid/>
      <MainImgBanner/>
      <div><h2>공식 브랜드관</h2></div>
      {/* 브랜드 이미지 2/3 grid로 구성 , 전체보기 title 유*/}


{/* 상품 간단 그리드 2/2 */}
      {/* 반복되는 부분 */}
      {/* 반복되는 부분 */}
      <div><h2>명품/수입의류</h2></div>
      <div>ul로 카테고리 넘어가는 부분은 넘어가도록 </div>
      <div style={{"display":"flex", "flexWrap":"wrap"}}>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
      </div>



{/* 상품 간단 그리드 2/2 */}

      {/*  */}
      <div><h2>공식 브랜드관</h2></div>

      <MainFooter/>
      <BottomNav/>
    </>
  )
}

export default CategoryDetailTopAll