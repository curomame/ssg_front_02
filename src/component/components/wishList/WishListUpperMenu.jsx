import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function WishListUpperMenu({datas}) {

  const [folderName, setFolderName] = useState('')
  const [openNewFolder, setOpenNewFolder] = useState(false);


  const handleOpenNewFolder = () => {
   
    setOpenNewFolder(true)
  }

  const handleColseNewFolder = ( ) => {
    setOpenNewFolder(false)
  }

  const handleCreateNewFolder = () => {

    axios.post(process.env.REACT_APP_TEST_URL+'/user/wish/folderPack/add',
    {
      "name":folderName
    },
    {
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }
    )
      .then(res => setFolderName(res.data.data))
      .catch(err => console.error(err))

      setOpenNewFolder(false)

  }



  return (
    <>
    <div className='wishListUppderMenuTop'>
            <div className='wishListUppderMenuContainer'>
          <div>
            <div className='wishListUppderMenuIcon'></div>
            <p>전체보기</p>
          </div>

          {datas &&
          
          datas.map((folder) =>       
            <div>
              <div className='wishListUppderMenuIcon'></div>
              <p>{folder.name}</p>
            </div>)

          }

          <div onClick={handleOpenNewFolder}>
            <div className='wishListUppderMenuIcon'></div>
            <p>새 폴더</p>
          </div>
          
          {openNewFolder 
          ? <div className='wishListOpenNewFolderBox'>
              <div onClick={handleColseNewFolder}>XXX</div>
              <div>새 폴더 만들기</div>
              <input 
                type="text" 
                value={folderName} 
                onChange={(e) => setFolderName(e.target.value)}/>
              <div onClick={handleCreateNewFolder}>Create!</div>
            </div>
          : null}

        </div>

    </div>
    </>
  )
}

export default WishListUpperMenu