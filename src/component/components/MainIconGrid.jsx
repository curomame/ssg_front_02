import React from 'react'
import MainIcon from '../parts/MainIcon'
import contents from '../../datas/mainicongrid.json'
function MainIconGrid({column}) {

  return (
    <>
        <MainIcon contents={contents} column={column}/>
    </>
  )
}

export default MainIconGrid