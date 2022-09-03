import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import WishListAddFolderModal from '../../parts/wishListParts/WishListAddFolderModal';
import WishListEditFolderModal from '../../parts/wishListParts/WishListEditFolderModal';

function WishListUpperMenu(
  { foldDatas,
    setFoldDatas,
    setWishDatas,
    wishDatas,
    setItemDatas,
    setCheckItems,
    tempPcakId,
    setTempPackId}
  ) {


  const [openNewFolder, setOpenNewFolder] = useState(false);
  const [editModalFolder, setEditModalFolder] = useState(false);
  


  const handleOpenNewFolder = () => {
    setOpenNewFolder(true)
  }
  
  const handleEditFolder = () => {
    setEditModalFolder(true)
  }

  const handleTotalDatas= () =>{
    setItemDatas(wishDatas.wishListOutputDtoList);
    setCheckItems(true);
    setTempPackId('')
  }


  const handleShowThisFolder = (folderId) => {
    
    setTempPackId(folderId);

    axios.get(process.env.REACT_APP_TEST_URL+`/user/wish/folder/${folderId}`,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {

      if(res.data.data.length === undefined){
        setItemDatas(res.data.data.wishListOutputDtoList)
        setCheckItems(true);
        
      } else {
        setCheckItems(false);
      }

      
    })
      .catch(err => console.error(err))
  }


  return (
    <>
    <div  className='wishListUppderMenuTop'>
            <div className='wishListUppderMenuContainer'>
          <div onClick={()=>handleTotalDatas()}>
            <div className='wishListUppderMenuIcon'>
              <span className="material-icons-outlined iconRed">favorite_border</span>
            </div>
            <p>전체보기</p>
          </div>

          {foldDatas &&
          
          foldDatas.map((folder) =>       

            { console.log(folder);
              return <div
                      onClick={() => handleShowThisFolder(folder.wishFolderPackId)}
                      key={folder.wishFolderPackId} >
                    <div className='wishListUppderMenuIcon'>
                      <span className="material-icons-outlined">favorite_border</span>
                    </div>
                    <p>{folder.name}</p>
                  </div>}
                )}

          <div onClick={handleOpenNewFolder}>
            <div className='wishListUppderMenuIcon'>
            <span className="material-icons-outlined">add</span>
            </div>
            <p>새 폴더</p>
          </div>
          
          <div>
            <div onClick={handleEditFolder} className='wishListUppderMenuIcon'>
            <span className="material-icons-outlined">folder</span>
            </div>
            <p>폴더관리</p>
          </div>
        </div>
        
        <WishListAddFolderModal
          openNewFolder={openNewFolder}
          setOpenNewFolder={setOpenNewFolder}
          setFoldDatas={setFoldDatas}
          />

        {editModalFolder && 
        
        <WishListEditFolderModal
          setWishDatas={setWishDatas}
          handleEditFolder={handleEditFolder}
          setEditModalFolder={setEditModalFolder}
          foldDatas={foldDatas}
          setFoldDatas={setFoldDatas}
        />

        }
        

    </div>
    </>
  )
}

export default WishListUpperMenu