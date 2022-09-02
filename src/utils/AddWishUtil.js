import axios from 'axios';

function AddWishUtil (productId) {

  axios.post(process.env.REACT_APP_TEST_URL+`/user/wish/add`,
  
  {"productId":productId}
  ,
  { 
    headers:{
      "Authorization":localStorage.getItem("Authorization")
    }
  }).then(res => {
    console.log(res.data.status)
    if(res.data.status===200){
      window.alert('좋아요가 완료되었습니다 :)')
    }
  })
    .catch(err=> console.error(err))


  return ;
}

export default AddWishUtil