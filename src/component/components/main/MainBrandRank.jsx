import React from 'react'
import MainCategorySelect from '../../parts/mainParts/MainCategorySelect'
import MainHyperLink from '../../parts/mainParts/MainHyperLink'
import MainTitleSub from '../../parts/mainParts/MainTitleSub'
import Items from '../../layout/Items'
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


      <MainSelectedCategory/>



      <MainHyperLink/>
    </>
  )
}

export default MainBrandRank