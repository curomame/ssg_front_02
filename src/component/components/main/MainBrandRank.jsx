import React from 'react'
import MainHyperLink from '../../parts/mainParts/MainHyperLink'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'
import MainSelectedCategory from '../../parts/mainParts/MainSelectedCategory'



function MainBrandRank() {


  return (
    <>
      <CommonTitleSub 
        title={"Brand Ranking"}
        link={'/'}
        type={'mainTitleSubTotal'}
      />

      <MainSelectedCategory
      />

      <MainHyperLink/>
    </>
  )
}

export default MainBrandRank