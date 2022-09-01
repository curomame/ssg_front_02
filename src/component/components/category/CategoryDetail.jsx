import React from 'react'

import BottomNav from '../../layout/BottomNav'
import Header from '../common/Header'
import MainFooter from '../common/CommonFooter'
import CategoryItem from './CategoryItem'
import CategoryUpperMenu from '../../layout/Category/CategoryUpperMenu'
import { useLocation } from 'react-router-dom'

function CategoryDetail() {
  
  const location = useLocation()

  return (
    <>
      <Header/>

      <CategoryUpperMenu/>

      <CategoryItem
        type={location.state.tempStatus}
        ctgId={location.state.Lid}
      />

      <MainFooter/>
      <BottomNav/>
    </>
  )
}

export default CategoryDetail