import React from 'react'
import { useState } from 'react'

function ProductQNAPart() {

  const [viewQna, setViewQna] = useState(false);

  return (
    <>
      
      <div onClick={() => setViewQna(!viewQna)} className='productQNABubbleQuestionBox'>
              
          <div className='productQNABubbleQuestionInfo'>
            <div>답변완료</div>
            <div>날짜</div>
            <div>아이디</div>
          </div>

          <div className='productQNABubbleQuestionContent'>
            <div>질문 제목</div>
            <div>질문 내용</div>
          </div>
        </div>


      {viewQna &&
      
      <div className='productQNABubbleAnswerBox'>
        <div className='productQNABubbleAnswerInfo'>
          <div>A</div>
          <div>답변일</div>
          <div>날짜</div>
        </div>

        <div className='productQNABubbleAnswerContent'>답변 내용</div>
      </div>

      }
      

    </>
  )
}

export default ProductQNAPart