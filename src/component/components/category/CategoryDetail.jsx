import React from 'react'

import BottomNav from '../../layout/BottomNav'
import Header from '../common/Header'
import MainFooter from '../common/CommonFooter'
import CategoryItem from './CategoryItem'
import CategoryUpperMenu from '../../layout/Category/CategoryUpperMenu'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function CategoryDetail() {
  
  const location = useLocation()

  const [tempStatus,setTempStatus] = useState(location.state.tempStatus)
  const [tempId,setTempId] = useState(location.state.Mid)

  return (
    <>
      <Header/>

      

      <CategoryUpperMenu
      setTempStatus={setTempStatus}
      setTempId={setTempId}
      />

      <div>배열</div>

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