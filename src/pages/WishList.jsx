import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import CommonItem from '../component/parts/commonsParts/CommonItem'
import '../assets/css/wishList.css'
import WishListUpperMenu from '../component/components/wishList/WishListUpperMenu'
import MainBlankSpace from '../component/parts/mainParts/MainBlankSpace'

function WishList() {

  const [wishDatas, setWishDatas] = useState([])

  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+'/user/wish',{
      headers:{
        "Authorization":localStorage.getItem('Authorization')
      }
    })
    .then(res => {
      setWishDatas(res.data.data)
    })

  },[])


  const handleDeleteWish = () => {
    
  }

  return (
    <>
      <Header
        type={"wish"}/>
        <div>

          <div>
          <WishListUpperMenu
            datas={wishDatas.wishFolderOutputDtoList}
          />
            
              <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between"}}>
            <CommonItem
                datas={wishDatas.wishListOutputDtoList}
                type={'wishlist'}
              />
              
              </div>

          </div>
          
          <div>
            
          </div>

        </div>
        <MainBlankSpace px={140}/>
      <BottomNav/>
    </>
  )
}

export default WishList