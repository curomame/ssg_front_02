import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function WishListEditFolderModal({handleEditFolder,setEditModalFolder,foldDatas,setFoldDatas}) {

  const [newFolderName, setNewFolderName] = useState('')

  const [folderLength, setFolderLength] = useState(0)

  const [editName,setEditName] = useState('')
  const [editInputOpen,setEditInputOpen] = useState(false);

  const [tempClick, setTempClick] = useState('')

  const handleCreateNewFolder = () => {

    if(newFolderName!==''){
      axios.post(process.env.REACT_APP_TEST_URL+'/user/wish/folderPack/add',
      {
        "name":newFolderName
      },
      {
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
      }
      )
        .then(res => {setFoldDatas(res.data.data)})
        .catch(err => console.error(err))
        setEditModalFolder(false)
    }

  }


  const handleDeleteFolder = (folderId) => {
    if(window.confirm('정말로 삭제하시겠습니까?')){
      // console.log(folderId);
      axios.delete(process.env.REACT_APP_TEST_URL+'/user/wish/folderPack/del',{
        data:{
          "wishFolderPackId":folderId
        },
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
      }).then(res => {
        setFoldDatas(res.data.data)
        window.alert('완료되었습니다!')
        setEditModalFolder(false)
      })
        .catch(err =>console.error(err))
    }
  }

  const handleEditFolderName = (idx) => {
    setEditName('')
    setTempClick(idx)
  }

  const handleChangeEditPush = (folderId) => {
    axios.put(process.env.REACT_APP_TEST_URL+'/user/wish/folderPack/mod',{

      "wishFolderPackId": folderId,
      "name" : editName

    },{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {
      window.alert('폴더 이름이 변경되었습니다!')
      setFoldDatas(res.data.data)
      setEditModalFolder(false)
    })
      .catch(err => console.error(err));
  }

  useEffect(() => {

    if(foldDatas){
      setFolderLength(foldDatas.length)
    }

  },[foldDatas])

  

  return (
    <>
      <div className='wishListEditContainer displayNone'>
      <div className='wishListBack'></div>
      <div className='wishListEditTopBox'>
        <div></div>
        <div>폴더관리</div>
        <div onClick={()=>setEditModalFolder(false)}>X</div>
      </div>

      {folderLength === 0 

      ? <div className='wishListEditNewBox'>
        <div><p>관리할 폴더가 없어요 <br/>새 폴더를 만들어보세요!</p></div>
      <input 
        type="text" 
        placeholder='폴더명을 입력해주세요' 
        maxLength={6} 
        value={newFolderName}
        onChange={(e)=>setNewFolderName(e.target.value)}
      />
      <div 
      className={newFolderName ? 'wishListEditNewButton': 'wishListEditNewButton inputNodata'}
      onClick={handleCreateNewFolder}
      >
      만들기</div>
      </div> 
      : 
        <div className='wishListFolderEditSelectContainer'>

          <div>플러스 새폴더</div>

            {foldDatas.map((folder,idx) =>  
            
            {
              return <div key={folder.wishFolderPackId} className='wishListFolderEditSelect'>
                <div onClick={() => handleDeleteFolder(folder.wishFolderPackId)}>
                  <span className="material-icons-outlined iconChecked">remove_circle</span></div>

                {tempClick === idx
                  ?<div>
                    <input 
                      type="text" 
                      maxLength={6} 
                      value={editName}
                      placeholder={folder.name} 
                      onChange={(e)=>setEditName(e.target.value)}
                    />
                  </div>
                  :<div><p>{folder.name}</p></div>}
                

                {tempClick === idx 
                ? 
                  <div className='wishListEditFolderConfirmButton'>
                    <span onClick={() => handleChangeEditPush(folder.wishFolderPackId)}>확인</span>  
                  </div>
                :
                <div onClick={() => handleEditFolderName(idx)}>
                <span className="material-icons-outlined">edit</span>
              </div>
              }
                </div>

            })}

        </div>

      }

    </div>
    </>
  )
}

export default WishListEditFolderModal