import React from 'react'
import Items from '../layout/Items'
import MainCategorySelect from '../parts/MainCategorySelect'
import MainHyperLink from '../parts/MainHyperLink'
import MainTitleSub from '../parts/MainTitleSub'

function MainBrandRank() {
  return (
    <>
      <MainTitleSub title="Brand Ranking"/>
      <MainCategorySelect/>
      {/* modal */}
      <Items/>
      <MainHyperLink/>
    </>
  )
}

export default MainBrandRank