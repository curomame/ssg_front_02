import React from 'react'
import MainIcon from '../parts/MainIcon'

function MainBrandGrid() {

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
  {"id":"10","img":"link","alt":"내용","name":"이름"},
  {"id":"11","img":"link","alt":"내용","name":"이름"},
  {"id":"12","img":"link","alt":"내용","name":"이름"},
  {"id":"13","img":"link","alt":"내용","name":"이름"},
  {"id":"14","img":"link","alt":"내용","name":"이름"},
  {"id":"15","img":"link","alt":"내용","name":"이름"} ];

  return (
    <>
        <MainIcon contents={icons} column={icons.length/3}/>
    </>
  )
}

export default MainBrandGrid