import axios from 'axios';

function AddCartUtil(productId) {
  //카트에 상품을 넣는 유틸
  const inputData = [{
    "productId": productId,
    "qty" : 1}
  ]

  axios.post(process.env.REACT_APP_TEST_URL+'/cart/add',
  inputData
  ,
  {
    headers:{
      "Authorization":localStorage.getItem("Authorization")
    }
  }).then(res => console.log(res.data))
    .catch(err => console.error('카트 상품 넣는 도중 에러 발생'+err));

  return null;
}

export default AddCartUtil