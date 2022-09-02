import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WishListItemToFolder from './WishListItemToFolder'

function WishItem(
  { datas,
    type,
    editMode,
    setWishDatas,
    setEditMode,
    foldDatas,
    setFoldDatas,
    tempPcakId}) {
  
  const [editSelect, setEditSelect] = useState([])
  const [checkArr, setCheckArr] = useState([])
  const [tempArr, setTempArr] = useState([])

  const [addItemToFolderModal, setAddItemToFolderModal] = useState(false)

  const selectArrCreate = (e) => {

    let newSelect = [...editSelect];
    
    if(editSelect.includes(e.target.id)){
      const idx = newSelect.indexOf(e.target.id);
      const idxNewSelect = newSelect.filter((item,i) => {if(i !== idx){return item}}) ;
      newSelect = idxNewSelect;
    } else {
      newSelect.push(e.target.id);
    }
    setEditSelect([...newSelect])

    changeChecked(e)
  }

  const changeChecked = (e) => {

    const idx = e.target.name;
    let newArr = checkArr.slice();

    if(newArr[idx]){
      newArr[idx] = false;
    } else {
      newArr[idx] = true;
    }

    setCheckArr([...newArr]);
  }


  const handleInputFolderModalFunc =() => {

    if(editSelect[0]===undefined){
      window.alert('폴더에 추가할 아이템을 선택해주세요!')
    } else {
      setAddItemToFolderModal(true)
    }

    
  
  }


  const handleRemoveList = () => {

    if(window.confirm('정말로 삭제하시겠습니까?')){

      const pushArr = []
      for(let j of editSelect ){
        pushArr.push(Number(j))
      }
  
      axios.delete(process.env.REACT_APP_TEST_URL+'/user/wish/delResponse',{
        data:{
          "wishIdList":pushArr
        },
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
        
      }
      ).then(res => setWishDatas(res.data.data))
        .catch(err => console.error(err))
  
      setEditSelect([])
      setCheckArr([])
      setEditMode(false)
    }

  }

  useEffect(() => {
    {datas &&
      setCheckArr(new Array(datas.length))
    }
  },[datas])


  useEffect(() => {

    setTempArr([...checkArr])

  },[checkArr])


  return (<>

  {datas && 

    datas.map((item,idx) => 

    {
      return <div key={item.wishId} className="wishListItemsContainer" >
              <Link to={"/product/"+item.productId} >
                <div>
                  <div style={{"position":"relative"}}>
                    <img style={{"width":"100%"}} 
                    src={process.env.REACT_APP_DISPLAY_IMG_URL+`${item.titleImgUrl}`} alt="이미지" />
                    
                    {(type==='wishlist') && 
                    
                    <div className='wishListDeleteIcon'>


                    
                    </div>}

                  </div>
                  
                  <div className='categoryItemText'>
                  
                      <div><h3><span>신세계몰</span>{item.brandName}</h3></div>
                      <div><h2>{item.title}</h2></div>
                      <div><p className='categoryItemSub'>{item.productName}</p></div>
                      <div><p className={`categoryItemPrice ${item.discountRate ? "categoryline" : null}`}>{(item.price).toLocaleString()}원</p></div>

                      <div className='categoryItemStar'><p>★</p><p>{item.reviewStar}</p><p>|</p><p>{(item.reviewCnt).toLocaleString()}건</p></div>
                    <div style={{display:"flex"}}>
                    </div>
                  </div>
                </div>
              </Link>

        {editMode 
          ? <div className='wishListEditCheckToggle'>
            <input 
              type="checkbox" 
              id={item.wishId} 
              name={idx} 
              onChange={selectArrCreate} 
              checked={tempArr[idx] ? true: false}/>
          </div>
          : null}
      </div>
      
    }
      )
   }
   


    {editMode 
    ? <div className='myWishEditBox'>
        <div onClick={()=> handleInputFolderModalFunc()}><p>폴더에 추가</p></div>
        <div onClick={handleRemoveList} ><p>삭제</p></div>
      </div>
    : null}
    
    {addItemToFolderModal &&
      <WishListItemToFolder
      setAddItemToFolderModal={setAddItemToFolderModal}
      foldDatas={foldDatas}
      setFoldDatas={setFoldDatas}
      editSelect={editSelect}
      setEditSelect={setEditSelect}
      setEditMode={setEditMode}
      />
    }

    {/* 폴더에 추가 클릭 -> 모달등장 ->  모달에서 선택 -> 해당 키값 받아서 넣기*/}
    {/* 여기 하고 있었음! */}
    
    </>
  )
}

export default WishItem