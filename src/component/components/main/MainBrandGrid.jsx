import React from 'react'
import icons from '../../../assets/datas/mainBrandGrid.json'
import MainIcon from '../../parts/mainParts/MainIcon'

function MainBrandGrid() {

  return (
    <>
        <MainIcon contents={icons} column={icons.length/3}/>
    </>
  )
}

export default MainBrandGrid