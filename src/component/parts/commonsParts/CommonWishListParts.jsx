import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function CommonWishListParts({type,productId}) {
  
  

  //type inner outer
  const url = process.env.REACT_APP_TEST_URL+"/user/wish/add"
  const [wish,setWish] = useState(false);

  const handleWishListToggle = () => {
  
    console.log('토글 작동');
    axios.post(url,
      {
        "productId":productId
    },{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {
      console.log(res.data.data.isWish)
      if(res.data.data.isWish){
        window.alert('위시리스트에서 제품을 제거했습니다.')
        setWish(res.data.data.isWish)
      } else {
        window.alert('위시리스트에 제품을 담았습니다!')
        setWish(res.data.data.isWish)
      }
      
      
    })
      .catch(err => console.error('wish list error',err))

  }

  return (
    <div onClick={handleWishListToggle} className={`wishListIcon${type}Container`}>
      {wish
      ?<span className="material-icons-outlined redicon">favorite</span>
      :<span className="material-icons-outlined">favorite_border</span>}
    </div>
  )
}

export default CommonWishListParts