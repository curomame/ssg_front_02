import axios from 'axios';
import React, { useState } from 'react'

function WishListAddFolderModal({openNewFolder,setOpenNewFolder}) {

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
        
        setFolderName(res.data.data)
      })
      .catch(err => console.error(err))

      setOpenNewFolder(false)

  }

  return (

    
    <>
    {openNewFolder 
    
    ? 
    <div className='wishListOpenNewFolderBox'>
      <div onClick={handleColseNewFolder}>XXX</div>
      <div>새 폴더 만들기</div>
      <input 
        type="text" 
        value={folderName} 
        onChange={(e) => setFolderName(e.target.value)}/>
      <div onClick={handleCreateNewFolder}>Create!</div>
    </div>

    : null}
    

    </>
  )
}

export default WishListAddFolderModal