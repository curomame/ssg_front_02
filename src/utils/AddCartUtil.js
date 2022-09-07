import axios from 'axios';

function AddCartUtil(productOptId) {

  const tempToken = localStorage.getItem("Authorization")

  console.log(productOptId);



  //카트에 상품을 넣는 유틸
  // const inputData = [{
  //   "productOptionId": productOptId[0],
  //   "qty" : 1}]

  const lastInputData = [];

  for(let i of productOptId){
    const newInput = {}
    newInput.productOptionId = +i;
    newInput.qty = 1
    lastInputData.push(newInput);
  }


    if(tempToken === null){
      window.alert('로그인후 장바구니 담기가 가능합니다. :>)')
    } else {
      axios.post(process.env.REACT_APP_TEST_URL+'/cart/add',
      lastInputData
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
        .catch(err => {
          window.alert('옵션 선택이 필요한 상품입니다 :-)')
          console.error('카트 상품 넣는 도중 에러 발생'+err)
        });
    
      return null;
    }


}

export default AddCartUtil