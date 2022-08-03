import React from 'react'
import MainIcon from '../parts/MainIcon'
import icons from '../../datas/mainicongrid.json'
function MainIconGrid() {

  

  return (
    <>
        <MainIcon contents={icons} column={icons.length/2}/>
    </>
  )
}

export default MainIconGrid