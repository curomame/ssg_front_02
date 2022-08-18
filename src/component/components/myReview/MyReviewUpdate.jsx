import React from 'react'
import { useParams } from 'react-router-dom';

function MyReviewUpdate() {

  const pathid = useParams();
  console.log(pathid)

  return (
    <div>MyReviewUpdate</div>
  )
}

export default MyReviewUpdate