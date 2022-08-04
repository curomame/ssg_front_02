import React, { useState } from 'react'
import axios from 'axios'

function Test() {

  const [getDatas, setGetDatas] = useState([]);
  const [putDatas, setPutDats] = useState([]);

  const getDataFunc = () => {

    axios.get("http://10.10.10.167:8080/json/test")
                    .then(res => console.log(res.data));
                    
  }

  const postDataFunc = () => {

    axios.post("http://10.10.10.167:8080/json/test",{
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

      <div>

        <h1>axios POST</h1>
        <h3 onClick={postDataFunc}>Click this</h3>
      </div>
    </>
  )
}

export default Test