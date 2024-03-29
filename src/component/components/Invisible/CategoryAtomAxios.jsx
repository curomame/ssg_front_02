import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import CategoryState from '../../../recoil/atoms/CategoryState'

function CategoryAtomAxios() {
  
  // const a = useLocation()

  // console.log(a.pathname)
  
  const [ categoryList, setCategoryList ] = useRecoilState(CategoryState);

  // console.log(categoryList)

  useEffect(()=> {
    
    if(categoryList){
      // console.log('카테고리 내용이 이미 있어요!')
    } else {
    axios.get(process.env.REACT_APP_TEST_URL+"/ProductCategory/findAll/mCtg")
    .then(res => {
      // console.log(res)
      setCategoryList(res.data)
    })
    // console.log('카테고리 셋팅이 요청 완료 되었습니다.')
    }

  },[])

  return (
    <>
    </>
  )
}

export default CategoryAtomAxios