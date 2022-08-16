import React from 'react'
import BottomNav from '../../layout/BottomNav'
import MainBlankSpace from '../../parts/mainParts/MainBlankSpace'
import Header from '../common/Header'
import CategoryFooter from './CategoryFooter'
import CategoryMainGrid from './CategoryMainGrid'
import CategoryMainReco from './CategoryMainReco'
import CategoryMainTheme from './CategoryMainTheme'


function CategoryMain() {
  return (
    <>
      <Header/>
      <CategoryMainGrid/>
      <MainBlankSpace px={60}/>

      <CategoryMainTheme/>
      <MainBlankSpace px={60}/>

      <CategoryMainReco/>
      <MainBlankSpace px={60}/>

      <CategoryFooter/>
      <MainBlankSpace px={120}/>
      <BottomNav/>
    </>
  ) 
}

export default CategoryMain