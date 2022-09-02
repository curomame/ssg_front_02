import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import WishListUpperMenu from '../component/components/wishList/WishListUpperMenu'
import MainBlankSpace from '../component/parts/mainParts/MainBlankSpace'
import WishItem from '../component/parts/wishListParts/WishItem'

function WishList() {

  const [wishDatas, setWishDatas] = useState([])

  const [foldDatas, setFoldDatas] = useState([]);
  const [itemDatas, setItemDatas] = useState([]);


  const [editMode, setEditMode] = useState(false);

  const [checkItems, setCheckItems] = useState(true)

  const [tempPcakId, setTempPackId] = useState('')

  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+'/user/wish',{
      headers:{
        "Authorization":localStorage.getItem('Authorization')
      }
    })
    .then(res => {
      // console.log(res)
      setWishDatas(res.data.data)
    }).catch(err => {
      console.error(err)
    })

  },[])

  useEffect(() => {

    setFoldDatas(wishDatas.wishFolderOutputDtoList)
    setItemDatas(wishDatas.wishListOutputDtoList)

  },[wishDatas])

  return (
    <>
      <Header
        type={'text'}
        text="좋아요"
        />
        
      {(wishDatas === "위시리스트가 존재하지 않음")
      ? <div className='wishListNone'>
        <p>아직 좋아요한 상품이 없습니다.</p>
        <hr />
        </div>
      : <div>
      <div>
      <WishListUpperMenu
        foldDatas={foldDatas}
        setFoldDatas={setFoldDatas}
        setItemDatas={setItemDatas}
        setWishDatas={setWishDatas}
        wishDatas={wishDatas}
        setCheckItems={setCheckItems}
        tempPcakId={tempPcakId}
        setTempPackId={setTempPackId}
      />
        
      <div onClick={() => setEditMode((prev)=> !prev)} className='wishListEditButton'>
        <div>
          {editMode 
          ? <p>취소</p>
          : <><span className="material-icons-outlined">tune</span><p>편집</p></>}
          
          
        </div>
      </div>

        {checkItems 
        ?<div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between"}}>
        <WishItem
            datas={itemDatas}
            type={'wishlist'}
            editMode={editMode}
            setWishDatas={setWishDatas}
            setEditMode={setEditMode}
            foldDatas={foldDatas}
            setFoldDatas={setFoldDatas}
            tempPcakId={tempPcakId}
          />
          
          </div>
          : <div>폴더에 원하는 항목을 추가해보세요!</div> }
          

      </div>

      <div>
        
      </div>

      </div>}

        <MainBlankSpace px={140}/>
      <BottomNav/>
    </>
  )
}

export default WishList