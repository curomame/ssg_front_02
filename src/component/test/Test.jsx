import React, { useState } from 'react'
import axios from 'axios'

function Test() {

  const getDataFunc = () => {

    axios.get("http://10.10.10.167:8083/productCategory/mCtg/1/4")
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