import React from 'react'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'

import '../assets/css/recent.css'
import RecentItem from '../component/components/recent/RecentItem'
import RecentUpperMenu from '../component/components/recent/RecentUpperMenu'
import recentUpperDatas from '../assets/datas/recent/recentUpperDatas.json'

function Recent() {
  return (
    <>
    <div className='recentBackground'>
      <Header
        type={'recent'}/>

      <RecentUpperMenu
        datas={recentUpperDatas}/>
      <RecentItem/>
      <BottomNav/>
    </div>
    </>
  )
}

export default Recent