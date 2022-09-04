import axios from 'axios';

function AddCartUtil(productOptId) {

  console.log(productOptId[0]);

  //카트에 상품을 넣는 유틸
  const inputData = [{
    "productOptionId": productOptId[0],
    "qty" : 1}]


  axios.post(process.env.REACT_APP_TEST_URL+'/cart/add',
  inputData
  ,
  {
    headers:{
      "Authorization":localStorage.getItem("Authorization")
    }
  }).then(res => {
    
    if(res.data.data === true){
      window.alert('장바구니에 상품이 담겼습니다!')
    } else {
      window.alert(res.data.data)
    }
    
    

  })
    .catch(err => console.error('카트 상품 넣는 도중 에러 발생'+err));

  return null;
}

export default AddCartUtil