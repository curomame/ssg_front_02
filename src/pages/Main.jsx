import React from 'react'
import MainCategoryBox from '../component/components/MainCategoryBox'
import MainEventSlider from '../component/components/MainEventSlider'
import MainUpperCategory from '../component/components/MainUpperCategory'
import MainItemsRight from '../component/components/MainItemsRight'
import MainContentslider from '../component/components/MainContentslider'
import MainIconGrid from '../component/components/MainIconGrid'
import '../css/MainPage/MainPage.css'
import MainImgBanner from '../component/parts/MainImgBanner'
import MainCardPromotion from '../component/components/MainCardPromotion'
import MainBrandGrid from '../component/components/MainBrandGrid'
import MainBottomNav from '../component/components/MainBottomNav'
import MainBrandRank from '../component/components/MainBrandRank'
import MainFooter from '../component/components/MainFooter'
import Header from '../component/components/Header'
import MainSpecialGift from '../component/components/MainSpecialGift'
import MainBestItem from '../component/components/MainBestItem'
import MainLetsTryOn from '../component/components/MainLetsTryOn'
import MainSSGLuxury from '../component/components/MainSsgLuxury'
import MainPremiumNewArrival from '../component/components/MainPremiumNewArrivals'
import MainCrossBorderShopping from '../component/components/MainCrossBorderShopping'
import MainBrandLookBook from '../component/components/MainBrandLookBook'
import MainLifeMegazine from '../component/components/MainLifeMegazine'
// import JsonTest from '../component/atoms/JsonTest'
function Main() {
  return (
    <>
      {/* <JsonTest/> */}
      <Header/>
      <hr />
      <MainEventSlider/>
      <hr/>
      <MainUpperCategory/>
      <hr/>
      <MainCategoryBox/>
      <hr/>
      <MainItemsRight/>
      <hr/>
      <MainContentslider/>
      <hr/>
      <MainIconGrid/>
      <hr />
      <MainImgBanner/>
      <hr />
      <MainCardPromotion/>
      <hr />
      <MainBrandGrid/>
      <hr />
      <MainBrandRank/>
      <hr />
      <MainLetsTryOn/>
      <hr />
      <MainBestItem/>
      <hr />
      <MainSSGLuxury/>
      <hr />
      <MainPremiumNewArrival/>
      <hr />
      <MainCrossBorderShopping/>
      <hr />
      <MainBrandLookBook/>
      <hr />
      <MainSpecialGift/>
      <hr />
      <MainLifeMegazine/>
      <hr />
      {/* Best Items와 네이밍 겹침(확인 필요) */}
      <MainBestItem/>
      <hr />
      <MainFooter/>
      <hr />
      <MainBottomNav/>
    </>
  )
}

export default Main