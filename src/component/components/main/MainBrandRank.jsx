import React from 'react'
import MainCategorySelect from '../../parts/mainParts/MainCategorySelect'
import MainHyperLink from '../../parts/mainParts/MainHyperLink'
import MainTitleSub from '../../parts/mainParts/MainTitleSub'
import Items from '../../layout/Items'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'
import MainSelectedCategory from '../../parts/mainParts/MainSelectedCategory'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


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