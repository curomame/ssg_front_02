import axios from 'axios';
import React from 'react'

function AddWishUtil({productId}) {
  
  axios.post(process.env.REACT_APP_TEST_URL+`/user/wish/add`,{
    "productId": productId
  },{
    headers:{
      "Authorization":localStorage.getItem("Authorization")
    }
  })

  return null;
}

export default AddWishUtil