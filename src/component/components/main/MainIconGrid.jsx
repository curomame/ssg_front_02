import React from 'react'
import contents from '../../../assets/datas/mainicongrid.json'
import MainIcon from '../../parts/mainParts/MainIcon'
function MainIconGrid({column}) {

  return (
    <>
        <MainIcon contents={contents} column={column}/>
    </>
  )
}

export default MainIconGrid