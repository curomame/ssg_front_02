import axios from 'axios';
import React, { useState } from 'react'

function WishListAddFolderModal({openNewFolder,setOpenNewFolder,setFoldDatas,tempPcakId}) {

  const [folderName, setFolderName] = useState('')

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
      .then(res => {
        // setFoldDatas((prev) => console.log(prev))
        setFoldDatas([...res.data.data]);
        // setFolderName(res.data.data)
      })
      .catch(err => console.error(err))

      setFolderName('')
      setOpenNewFolder(false)

  }

  
  return (

    
    <>
    {openNewFolder 
    
    ? 
    <div className='wishListOpenNewFolderBox'>
      <div className='wishListOpenNewFolderTop'>
        <div></div>
        <div>새 폴더</div>
        <div onClick={handleColseNewFolder}>X</div>
      </div>
      <div className='wishListOpenNewFolderLine'></div>
      <div className='wishListOpenNewFolderUnder'>
        <div><p>폴더를 추가하여 좋아요를 내맘대로 관리해보세요!</p></div>
        <div>
          <input 
            type="text" 
            value={folderName} 
            onChange={(e) => setFolderName(e.target.value)}
            placeholder={"폴더명을 입력해주세요."}/>
        </div>
        <div className={folderName ? 'nameChecked': null} onClick={handleCreateNewFolder}><p>만들기</p></div>
      </div>
    </div>

    : null}
    

    </>
  )
}

export default WishListAddFolderModal