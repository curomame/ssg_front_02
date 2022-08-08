import React from 'react'
import BottomNav from '../../layout/BottomNav'
import MainBlankSpace from '../../parts/mainParts/MainBlankSpace'
import Header from '../main/Header'
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
      <BottomNav/>
    </>
  ) 
}

export default CategoryMain