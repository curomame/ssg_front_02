import React from 'react'
import { useState } from 'react'

function ProductQNAPart({QNAdatas}) {


  const [viewQna, setViewQna] = useState(false);

  const clickCheckFunc = (qnaId) => {}

  // console.log(QNAdatas);

  return (
    <>

      {QNAdatas && QNAdatas.productQnASetDtoList.map((qna)=>(

        <div key={qna.qnaId} onClick={()=>clickCheckFunc(qna.qnaId)}>
          <div className='productQNABubbleQuestionBox'>
                        
          <div className='productQNABubbleQuestionInfo'>
            <div>{qna.answer ? "답변완료" : "답변중"}</div>
            <div>date</div>
            <div>{qna.userId}</div>
          </div>

          <div className='productQNABubbleQuestionContent'>
            <div>{qna.qnAType}</div>
            <div>{qna.userComment}</div>
          </div>


          
          </div>

          {qna.answer && 
          <div className= {viewQna ? 'productQNABubbleAnswerView': 'productQNABubbleAnswerNonView'} >
            <div className='productQNABubbleAnswerBox' >
              <div className='productQNABubbleAnswerInfo'>
                <div>A아이콘</div>
                <div>답변일</div>
                <div>{qna.productQnAReplyDto.replyModDate}</div>
              </div>

              <div className='productQNABubbleAnswerContent'>{qna.productQnAReplyDto.replyComment}</div>
            </div>
          </div>
          }
          
          


          </div>

      ))}

    </>
  )
}

export default ProductQNAPart