import React from 'react'
import MainIcon from '../../parts/mainParts/MainIcon'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'
import mainBrandGridDatas from '../../../assets/datas/mainDatas/mainBrandGridDatas.json'

function MainBrandGrid() {
 
  return (
    <>
        <CommonTitleSub
        title='Hot Brand'
        type='mainTitleSubTotal'/>
        
        <MainIcon
          type="mainIconGrid"
          Indatas={mainBrandGridDatas} 
          Incolumn={3}
        />
    </>
  )
}

export default MainBrandGrid