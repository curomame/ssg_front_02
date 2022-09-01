import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import '../assets/css/wishList.css'
import WishListUpperMenu from '../component/components/wishList/WishListUpperMenu'
import MainBlankSpace from '../component/parts/mainParts/MainBlankSpace'
import WishItem from '../component/parts/wishListParts/WishItem'

function WishList() {

  const [wishDatas, setWishDatas] = useState([])

  const [foldDatas, setFoldDatas] = useState([]);
  const [itemDatas, setItemDatas] = useState([]);

  const [editMode, setEditMode] = useState(false);

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

  useEffect(() => {

    setFoldDatas(wishDatas.wishFolderOutputDtoList)
    setItemDatas(wishDatas.wishListOutputDtoList)

  },[wishDatas])


  return (
    <>
      <Header
        type={"wish"}
        />
        
        <div>
          <div>
          <WishListUpperMenu
            foldDatas={foldDatas}
            setFoldDatas={setFoldDatas}
          />
            
          <div onClick={() => setEditMode((prev)=> !prev)} className='wishListEditButton'>
            <div>
              {editMode 
              ? <p>취소</p>
              : <><span className="material-icons-outlined">tune</span><p>편집</p></>}
              
              
            </div>
          </div>

              <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between"}}>
            <WishItem
                datas={itemDatas}
                type={'wishlist'}
                editMode={editMode}
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