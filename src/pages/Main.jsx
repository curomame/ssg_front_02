import React from 'react'
import MainCategoryBox from '../component/components/main/MainCategoryBox'
import MainEventSlider from '../component/components/main/MainEventSlider'
import MainUpperCategory from '../component/components/main/MainUpperCategory'
import MainItemsRight from '../component/components/main/MainItemsRight'
import MainContentslider from '../component/components/main/MainContentslider'
import MainIconGrid from '../component/components/main/MainIconGrid'

import MainCardPromotion from '../component/components/main/MainCardPromotion'
import MainBrandGrid from '../component/components/main/MainBrandGrid'
import MainBottomNav from '../component/layout/BottomNav'
import MainBrandRank from '../component/components/main/MainBrandRank'
import MainFooter from '../component/components/common/CommonFooter'
import Header from '../component/components/common/Header'
import MainSpecialGift from '../component/components/main/MainSpecialGift'
import MainBestItem from '../component/components/main/MainBestItem'
import MainLetsTryOn from '../component/components/main/MainLetsTryOn'
import MainSSGLuxury from '../component/components/main/MainSsgLuxury'
import MainPremiumNewArrival from '../component/components/main/MainPremiumNewArrivals'
import MainCrossBorderShopping from '../component/components/main/MainCrossBorderShopping'
import MainBrandLookBook from '../component/components/main/MainBrandLookBook'
import MainLifeMegazine from '../component/components/main/MainLifeMegazine'
import MainBestItems from '../component/components/main/MainBestItems'

import '../assets/css/mainPage.css'

import MainBlankSpace from '../component/parts/mainParts/MainBlankSpace'
import MainImgBanner from '../component/parts/mainParts/MainImgBanner'

function Main() {
  return (
    <>
      <Header/>
      <MainEventSlider/>
      <MainUpperCategory/>
      <MainCategoryBox/>
      <MainBlankSpace px={60}/>

      <MainItemsRight/>
      <MainBlankSpace px={60}/>

      <MainContentslider/>
      <MainBlankSpace px={60}/>

      <MainIconGrid/>
      <MainBlankSpace px={60}/>

      <MainImgBanner/>
      <MainBlankSpace px={60}/>

      <MainCardPromotion/>
      <MainBlankSpace px={60}/>

      <MainBrandGrid column={3}/>
      <MainBlankSpace px={60}/>
      
      <MainBrandRank/>
      
      {/* <hr />
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
      <MainBestItems/> */}
      <hr />
      <MainFooter/>
      <hr />
      <MainBlankSpace px={100}/>
      <MainBottomNav/>
    </>
  )
}

export default Main