import React from 'react'
import MainIcon from '../parts/MainIcon'

function MainIconGrid() {

  const icons = [ 
  {"id":"1","img":"link","alt":"내용","name":"이름"},
  {"id":"2","img":"link","alt":"내용","name":"이름"},
  {"id":"3","img":"link","alt":"내용","name":"이름"},
  {"id":"4","img":"link","alt":"내용","name":"이름"},
  {"id":"5","img":"link","alt":"내용","name":"이름"},
  {"id":"6","img":"link","alt":"내용","name":"이름"},
  {"id":"7","img":"link","alt":"내용","name":"이름"},
  {"id":"8","img":"link","alt":"내용","name":"이름"},
  {"id":"9","img":"link","alt":"내용","name":"이름"},
  {"id":"10","img":"link","alt":"내용","name":"이름"} ];

  return (
    <>
        <MainIcon contents={icons} column={icons.length/2}/>
    </>
  )
}

export default MainIconGrid