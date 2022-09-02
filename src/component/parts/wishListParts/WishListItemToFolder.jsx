import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function WishListItemToFolder({setAddItemToFolderModal,foldDatas,setFoldDatas,editSelect,setEditSelect,setEditMode}) {


  const [moveFolderList, setMoveFolderList] = useState([])
  const [FolderIdList, setFolderIdList] = useState([]);

  // console.log(moveFolderList);

  const handleSetInputList = (wishFolderId, idx) => {
    
    let newList = moveFolderList.slice()
    let newIdList = FolderIdList.slice()

    if(newList[idx] === true){
      newList[idx] = undefined;
      newIdList[idx] = undefined;

    } else {
      newList[idx] = true;
      newIdList[idx] = wishFolderId;
    }

    setMoveFolderList([...newList]);
    setFolderIdList([...newIdList])
  }

  const handlePushFolderItems = () => {

    // 리스트 형태로 넣을 수 이도록 진행 TODO
    const pushObj = {
      "wishFolderPackIdList": [],
      "wishIdList":[]
    };

    pushObj.wishFolderPackIdList = FolderIdList.filter((item) => item !== undefined)
    pushObj.wishIdList = editSelect.map(item => +item)

    console.log(pushObj);

    axios.post(process.env.REACT_APP_TEST_URL+'/user/wish/folder/add',
    pushObj,{      
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {
      res.data.status===200 && window.alert('성공적으로 폴더에 아이템이 담겼습니다!')
      setAddItemToFolderModal(false);
      setEditSelect('')
      setEditMode(false)
    })
      .catch(err => console.error(err))

  }


  console.log(editSelect)

  return (
    <>
      <div className='wishListEditContainer displayNone'>
        <div className='wishListBack'></div>
        <div className='wishListEditTopBox'>
          <div></div>
          <div>폴더관리</div>
          <div onClick={()=>setAddItemToFolderModal(false)}>X</div>
        </div>

        <div className='wishListFolderEditSelectContainer'>
        {foldDatas.map((fold,idx) => {
          // console.log(fold)
          return <div key={fold.wishFolderPackId} className='wishListFolderEditSelect'>
                  <div>
                    <span onClick={() => handleSetInputList(fold.wishFolderPackId,idx)} 
                          className={moveFolderList[idx]
                            ? "material-icons iconChecked"
                            : "material-icons"}>
                      check_circle</span>
                    </div>
                  <div><p>{fold.name}</p></div>
                  <div></div>
                </div>
        })}
        <div onClick={() => handlePushFolderItems()} className='wishListOkButton'><p>확인</p></div>
        </div>

        
        
      
      
      </div>


      </>
  )
}

export default WishListItemToFolder