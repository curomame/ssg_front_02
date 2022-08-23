import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import BottomNav from '../../layout/BottomNav';
import Header from '../common/Header';

function MyReviewUpdate() {
  
  const pathid = useParams();
  const [contents, setContents] = useState();


  const handleUpdateReview = () => {
    axios.put('http://10.10.10.108:8080/user/review/mod',{
      "userId": 1,
      "reviewId": pathid.id,
      "comment": contents,
      "star": 4,
      "size": 1,
      "color": 1,
      "thickness": 1, 
      "fit": 1,
      "reviewImgList":[
          {
              "name": "imageName",
              "path": "pathName"
          }]

    }).then(res => console.log(res))
}

  const upLoadImg = (e) => {
    const file = e.target.files;
    console.log(file);
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

          <div>사진 업로드</div>
          <input onChange={upLoadImg} type="file" id="imgs" name="imgs"/>

          <div className='myreviewCreateButton' onClick={handleUpdateReview}>리뷰 작성!</div>
    

      </div>

      <BottomNav/>
      </>
  )
}

export default MyReviewUpdate