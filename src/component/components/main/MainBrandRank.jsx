import React from 'react'
import MainCategorySelect from '../../parts/mainParts/MainCategorySelect'
import MainHyperLink from '../../parts/mainParts/MainHyperLink'
import MainTitleSub from '../../parts/mainParts/MainTitleSub'
import Items from '../../layout/Items'


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