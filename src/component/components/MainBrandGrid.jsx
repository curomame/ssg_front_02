import React from 'react'
import MainIcon from '../parts/MainIcon'
import icons from '../../datas/mainBrandGrid.json'

function MainBrandGrid() {

  return (
    <>
        <MainIcon contents={icons} column={icons.length/3}/>
    </>
  )
}

export default MainBrandGrid