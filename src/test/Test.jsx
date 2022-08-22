import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Test() {

  const PhotoUrl = "http://10.10.10.167:8083/uploadAjax/product"


  const [formdata, setFromdata] = useState(new FormData())


  const [files,setFiles] = useState('');

  const onLoadFile = (e) => {
    const file = e.target.files;
      setFiles(file);
  }

  const [testImg, setTestImg] = useState('')
  const [inputImg, setInputImg] = useState('')

  const handleClick = (e) =>{

    const formdata = new FormData();
    formdata.append('uploadFiles',files[0])

    const config = {
      Headers : {
        'content-type':'multipart/form-data'
      }
    }
    
    axios.post(PhotoUrl,formdata,config)
      .then(res => setTestImg(res.data[0].imageURL))

  }


  useEffect(() => {


    if(testImg){
      setInputImg(axios.get(`http://10.10.10.167:8083/display?fileName=${testImg}`,
      {
      Headers:{
        'content-type':'image/png'
      }})
      .then(res => res.data)
      
      )
    }
    
    console.log(testImg)
    

  },[testImg])




  return (
    <>
      
      
      <input onChange={onLoadFile} type="file" id="imgs" name="imgs"/>
      <div onClick={handleClick}>이미지 보내기!</div>
      
      <div className='img_box' style={{"background":`url(http://10.10.10.167:8083/display?fileName=${testImg})`, width:"100px", height:"100px" }}> </div>
      <img src={inputImg} alt="" />

    </>
  )
}

export default Test