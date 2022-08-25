import axios from 'axios';
import { useContext } from 'react';
import { TokenVerifying } from '../context/TokenVerifying';

 function useAuthToken() {

  const {isAuth, setIsAuth} = useContext(TokenVerifying);
  const Token = localStorage.getItem('Authorization')

  if(!Token){
    return false;
  }

  const url = 'http://10.10.10.167:8080/user/mypage'
  // const [axiosStatus, setAxiosStatus] = useState('')

  const TokenAxios = () => {

     axios.get(url,{
      headers:{
        Authorization:Token
      }
    }).then(res => {
      console.log(res.data.data,'useToken data  내용')
      {res.data.data==='good' ? setIsAuth(true) : setIsAuth(false)}
    })
      .catch(err => console.error('axios auth token 에러 발생'+err))
  }

  TokenAxios()

  return isAuth;  
  
}

export default useAuthToken