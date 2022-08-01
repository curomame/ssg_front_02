import React from 'react'
import MainCategoryBox from '../component/components/MainCategoryBox'
import MainEventSlider from '../component/components/MainEventSlider'
import MainUpperCategory from '../component/components/MainUpperCategory'
import MainItemsRight from '../component/components/MainItemsRight'
import MainContentslider from '../component/components/MainContentslider'
import MainIconGrid from '../component/components/MainIconGrid'
import '../css/MainPage/MainPage.css'
import MainImgBanner from '../component/atoms/MainImgBanner'
import MainCardPromotion from '../component/components/MainCardPromotion'
import MainBrandGrid from '../component/components/MainBrandGrid'
import MainBottomNav from '../component/components/MainBottomNav'
function Main() {
  return (
    <>
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

      <hr />
      <MainBottomNav/>

    </>
  )
}

export default Main