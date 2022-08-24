import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import BottomNav from '../../layout/BottomNav';
import Header from '../common/Header';

function MyReviewUpdate() {
  
  const pathid = useParams();
  const [contents, setContents] = useState();

  const [preview, setPreview] = useState([]);

  const [landingImg, setLandingImg] = useState([]);
  const [formImgs, setFormImgs] = useState('')

  const handleUpdateReview = async (e) => {

    e.preventDefault()

    pushImg()


    // console.log(landingImg)
    // await axios.put('http://10.10.10.108:8080/user/review/mod',{
    //   "userId": 1,
    //   "reviewId": pathid.id,
    //   "comment": contents,
    //   "star": 4,
    //   "size": 1,
    //   "color": 1,
    //   "thickness": 1, 
    //   "fit": 1,
    //   "reviewImgList":[
    //       {
    //           "name": "imageName",
    //           "path": "pathName"
    //       }]

    // }).then(res => console.log(res))
}


  const encodeFileToBase = (fileBlob) => {

    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve()
      }
    })
  }


const pushImg = () => {



  console.log([].concat(...formImgs)[1])

  // const data = {
  //     "uploadFiles":[].concat(...formImgs)[1],
  //     "entityName":"review"
  // }


  const config = {
    'content-type':'multipart/form-data'
  }

  axios.post("http://10.10.10.167:8080/img/upload",formImgs,config)
    .then(res => console.log(res))

  // for(let i of formImgs.entries()){
  //   console.log(i)
  // }

}

  const LandingImg = (e) => {
    const files = e.target.files;

    const formData = new FormData();

    formData.append('uploadFiles',files[0]);
    formData.append('entityName',"review");

    setFormImgs(formData);

    encodeFileToBase(files[0]);

  }

  


  return (<>
    <Header
      type={'writeReview'}/>

      <div>상품상세 내용 사진있고 제목있고 막 그런거임</div>
      
      <div className='myreviewCreateInputBox'>
          <div>
            <div>별점을 선택해 주세요.</div>
            <div>
              <div>별별별별별</div>
            </div>
          </div>
        
          

          <div><p>리뷰를 수정할수있습니다.</p></div>
          <div><input type="textarea" onChange={(e)=>setContents(e.target.value)}/></div>

          <form onSubmit={handleUpdateReview}>
            <div>미리보기 이미지</div>

            {preview && <img style={{"width":"100px"}}  src={preview} alt="이미지"/>}

            <div>사진 업로드</div>
            <input 
              onChange={LandingImg} 
              type="file" 
              id="imgs" 
              name="imgs"
              />

            <button className='myreviewCreateButton'>리뷰 작성!</button>
          </form>

      </div>

      <BottomNav/>
      </>
  )
}

export default MyReviewUpdate