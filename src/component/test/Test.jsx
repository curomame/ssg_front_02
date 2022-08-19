import React, { useState } from 'react'
import axios from 'axios'

function Test() {

  const getDataFunc = () => {

    // 1 카테고리 http://10.10.10.167:8083/ProductCategory/findAll/mCtg 
    // 2 메인상품 http://10.10.10.167:8083/productCtgList/list/5 
    // 3 M카테고리 눌렀을때 s카테고리까지 쫙 나올수 있도록 http://localhost:8080/productCtgList/mCtg/1/4 
    // 보내는 방식은 똑같은데 주소가 다름 



    axios.get("http://10.10.10.167:8083/productCtgList/mCtg/1/4")
                    .then(res => console.log(res.data))
                    
  }

  const postDataFunc = () => {

    axios.post("http://10.10.10.108:8080/user/review/add",{
        "userId":1,
        "orderId":8,
        "productId":2,
        "comment":"하잉",
        "star":4,
        "size":9,
        "color":8,
        "thickness":8,
        "fit":88,
        "reviewImgList":[
          {"name":'imgName',
          "path":"imgPath"}
        ]

    }).then(Response => {
      console.log(Response.data)
    })}





  return (
    <>
      <div>
        <h1>axios GET</h1>
        <h3 onClick={getDataFunc}>Click this</h3>
        <h3 onClick={postDataFunc}>Post Click this</h3>

      </div>

    </>
  )
}

export default Test