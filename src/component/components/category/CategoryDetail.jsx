import React from 'react'

import BottomNav from '../../layout/BottomNav'
import Header from '../common/Header'
import MainFooter from '../common/CommonFooter'
import CategoryItem from './CategoryItem'
import CategoryUpperMenu from '../../layout/Category/CategoryUpperMenu'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import CategoryFilter from '../../parts/categoryParts/CategoryFilter'

function CategoryDetail() {
  
  const location = useLocation()

  const [tempStatus,setTempStatus] = useState('')
  const [tempId,setTempId] = useState('')


  useEffect(() => {

    setTempStatus(location.state.tempStatus)
    setTempId(location.state.Mid)

  },[])

  return (
    <>
      <Header/>

      <CategoryUpperMenu
      setTempStatus={setTempStatus}
      setTempId={setTempId}
      />

      <CategoryItem
        type={tempStatus}
        tempId={tempId}
        setTempId={setTempId}
      />

      <MainFooter/>
      <BottomNav/>
    </>
  )
}

export default CategoryDetail