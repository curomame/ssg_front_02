import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import CommonItem from '../component/parts/commonsParts/CommonItem'

function WishList() {

  const [wishDatas, setWishDatas] = useState([])

  useEffect(() => {

    axios.get('http://10.10.10.167:8080/user/wish/101')
    .then(res => setWishDatas(res.data.data))

  },[])


  return (
    <>
      <Header/>
        <div>
          
          {/* 위시 리스트 위에 클릭 부분 */}
          <div>
              <div>전체보기<span>숫자</span></div>
            
              <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between"}}>
            <CommonItem
                datas={wishDatas.wishListOutputDtoList}
              />
              </div>

          </div>
          
          <div>
            
          </div>

        </div>
      <BottomNav/>
    </>
  )
}

export default WishList