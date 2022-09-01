import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import WishListAddFolderModal from '../../parts/wishListParts/WishListAddFolderModal';

function WishListUpperMenu({foldDatas,setFoldDatas}) {


  const [openNewFolder, setOpenNewFolder] = useState(false);

  const handleOpenNewFolder = () => {
    setOpenNewFolder(true)
  }
  
  return (
    <>
    <div className='wishListUppderMenuTop'>
            <div className='wishListUppderMenuContainer'>
          <div>
            <div className='wishListUppderMenuIcon'>
              <span className="material-icons-outlined iconRed">favorite_border</span>
            </div>
            <p>전체보기</p>
          </div>

          {foldDatas &&
          
          foldDatas.map((folder,i) =>       
            <div key={i}>
              <div className='wishListUppderMenuIcon'></div>
              <p>{folder.name}</p>
            </div>)

          }

          <div onClick={handleOpenNewFolder}>
            <div className='wishListUppderMenuIcon'>
            <span className="material-icons-outlined">add</span>
            </div>
            <p>새 폴더</p>
          </div>
          
          <div>
            <div className='wishListUppderMenuIcon'>
            <span className="material-icons-outlined">folder</span>
            </div>
            <p>폴더관리</p>
          </div>


          <WishListAddFolderModal
          openNewFolder={openNewFolder}
          setOpenNewFolder={setOpenNewFolder}
          setFoldDatas={setFoldDatas}
          />


        </div>

    </div>
    </>
  )
}

export default WishListUpperMenu