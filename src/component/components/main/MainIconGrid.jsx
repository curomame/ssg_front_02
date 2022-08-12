import React from 'react'
import contents from '../../../assets/datas/mainicongrid.json'
import MainIcon from '../../parts/mainParts/MainIcon'
import mainicongrid from '../../../assets/datas/mainicongrid.json'

function MainIconGrid() {

  return (
    <>
        <MainIcon 
          type="mainIconGrid"
          Indatas={mainicongrid} 
          Incolumn={2}
        />
    </>
  )
}

export default MainIconGrid