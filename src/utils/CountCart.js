import axios from "axios";
import { useState } from "react";


function CountCart () {
  const [count, setCount] = useState(0);
  const token = localStorage.getItem("Authorization")

  if(token !== null){
    axios.get(process.env.REACT_APP_TEST_URL+'/cart',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => setCount(res.data.data.cartOutputDtoList.length))
      .catch(err => console.error(err))

      return count;
  }

  

}


export default CountCart;