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
<<<<<<< Updated upstream
=======
import MainBestItem from '../component/components/MainBestItem'
import MainLetsTryOn from '../component/components/MainLetsTryOn'
import MainSSGLuxury from '../component/components/MainSsgLuxury'
import MainPremiumNewArrival from '../component/components/MainPremiumNewArrivals'
import MainCrossBorderShopping from '../component/components/MainCrossBorderShopping'
import MainBrandLookBook from '../component/components/MainBrandLookBook'
import MainLifeMegazine from '../component/components/MainLifeMegazine'
import MainBestItems from '../component/components/MainBestItems'
import MainBlankSpace from '../component/parts/MainBlankSpace'
>>>>>>> Stashed changes
// import JsonTest from '../component/atoms/JsonTest'
function Main() {
  return (
    <>
      {/* <JsonTest/> */}
      <Header/>
      <MainEventSlider/>
      <MainUpperCategory/>
      <MainCategoryBox/>
      <MainBlankSpace px={60}/>
      <MainItemsRight/>
      <MainBlankSpace px={60}/>
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
      <MainSpecialGift/>
      <hr />
      <MainFooter/>
      <hr />
      <MainBottomNav/>
    </>
  )
}

export default Main