import axios from 'axios';
import { useState } from 'react';

function AddWishUtil (productId) {

  // const [output,setOutput] =useState(false);

  axios.post(process.env.REACT_APP_TEST_URL+`/user/wish/add`,
  
  {"productId":productId}
  ,
  { 
    headers:{
      "Authorization":localStorage.getItem("Authorization")
    }
  }).then(res => {
    if(res.data.data.isWish===true){
      window.alert('좋아요가 완료되었습니다 :)')
    } else {
      window.alert('좋아요가 취소되었습니다.')
    }
  })
    .catch(err=> {
      console.error(err)
    })


  return;
}

export default AddWishUtil