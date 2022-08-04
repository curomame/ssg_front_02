import React, { useState } from 'react'
import axios from 'axios'

function Test() {

  const [getDatas, setGetDatas] = useState([])

  const getDataFunc = () => {

    const datas = axios.get("10.10.10.167:8000/json/test")
                    .then(res => console.log(res));

  }

  



  return (
    <>
      <div>
        <h1>axios GET</h1>
        <h3 onClick={getDataFunc}>Click this</h3>


      </div>


      <div>
        <h1>axios POST</h1>
      </div>
    </>
  )
}

export default Test