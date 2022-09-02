import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../common/Header'

function ProductQuestion({setQModal,setDetailData}) {

  const params = useParams()
  const navigate = useNavigate();
  // console.log(params.id);



  const [qnaPushDatas,setQnaPushDatas] = useState({

    "title": "",
    "comment": "",
    "qnaType": 'PRODUCT_INQUIRY',
    "secret": false,
    "answer": false,
    "productId": params.id
})

  const [tempCheck, setTempCheck] = useState('PRODUCT_INQUIRY')

  const changeCheck = (e) => {
    setTempCheck(e.target.name)
    setQnaPushDatas({...qnaPushDatas,"qnaType":tempCheck})
  }

  const handleChangeData = (e) => {
    setQnaPushDatas({...qnaPushDatas, [e.target.name]:e.target.value})
  }

  const updateAllReivew = () => {
    axios.get(process.env.REACT_APP_TEST_URL`/product/detail/${params.id}`)
    .then(res => {
      setDetailData(res.data)
    })
    .catch(err => console.error('상품을 받아오는 도중 에러발생'))
  }

  const handleWriteQNA = () => {

    axios.post(process.env.REACT_APP_TEST_URL+'/productQnA',qnaPushDatas,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {
      window.alert('리뷰 등록이 완료되었습니다 :)')  
      console.log(res)
    })
      .catch(err => console.error(err))
  
  navigate(`/product/${params.id}`)

  // updateAllReivew();



  }


  console.log(qnaPushDatas);

  return (
    <>
      <div className='productQuestionModalContainer'>
          <Header
            type={'text'}
            text={'상품 Q&A 쓰기'}
            func={setQModal}
          />


          <div>
            <div>상품이미지</div>
            <div>상품 이름,상품코드</div>
          </div>

          <hr />

          <div>
            
            <input 
              type="radio" 
              name="PRODUCT_INQUIRY"
              onClick={(e) => changeCheck(e)} 
              checked={tempCheck==="PRODUCT_INQUIRY" ? true: false}
              />
              
            <label>상품문의</label>
            
            <input 
              type="radio" 
              name="DELIVERY_INQUIRY" 
              onClick={(e) => changeCheck(e)}
              checked={tempCheck==="DELIVERY_INQUIRY" ? true: false}
              />
            <label>배송문의</label>
            
            <input 
              type="radio" 
              name="OTHER_INQUIRIES" 
              onClick={(e) => changeCheck(e)}
              checked={tempCheck==="OTHER_INQUIRIES" ? true: false}
              />
            <label>기타</label>
          </div>

        <div className='productQuestionInputBox'>

          <div>
            <input 
              type="text" 
              placeholder='제목을 입력해주세요' 
              value={qnaPushDatas.title} 
              name="title"
              onChange={handleChangeData}/>
          </div>

          <div>
            <input 
              type="textarea"
              placeholder='이메일, 휴대폰번호, 주민등록번호와 같은 개인정보의 입력은 금지되어 있습니다.' 
              value={qnaPushDatas.comment} 
              name="comment"
              onChange={handleChangeData}/>
          </div>

        </div> 

          <hr />


          <div className='productQNABottom'>
            <div onClick={handleWriteQNA}><p>확인</p></div>
            <div onClick={() => setQModal(false)}><p>취소</p></div>
          </div>
      </div>
    </>
  )
}

export default ProductQuestion