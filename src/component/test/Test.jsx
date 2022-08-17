import React, { useState } from 'react'
import axios from 'axios'

function Test() {

  const getDataFunc = () => {

    axios.get("http://10.10.10.167:8083/ProductCategory/mainCtg/findAll")
                    .then(res => console.log(res.data))
                    
  }

  const postDataFunc = () => {

    axios.post("http://10.10.10.167:8083/json/test",{
        one: 'this is string message',
        two: 999,
        three:true,
    }).then(Response => {
      console.log(Response.data)
    })}





  return (
    <>
      <div>
        <h1>axios GET</h1>
        <h3 onClick={getDataFunc}>Click this</h3>

      </div>

    </>
  )
}

export default Test