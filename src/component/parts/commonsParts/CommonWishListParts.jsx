import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function CommonWishListParts({type,productId}) {
  

  //type inner outer
  const url = "http://10.10.10.117:8080/user/wish/add"
  const [wish,setWish] = useState(false);

  const handleWishListToggle = () => {
  
    console.log('토글 작동');
    axios.post(url,{
        "userId":"101",
        "productId":productId
    }).then(res => {
      console.log(res.data.data.isWish)
      setWish(res.data.data.isWish)
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