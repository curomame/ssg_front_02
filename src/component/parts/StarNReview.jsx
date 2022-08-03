import React from 'react'

function StarNReview({point, count}) {
  return (
    <>
      <div className='starNReview'>
        <div>⭐️</div>
        <div>{point}</div>
        <div>|</div>
        <div>{count}건</div>
      </div>
    </>
  )
}

export default StarNReview