import React from 'react'
import { useNavigate } from 'react-router-dom';

function CommonLatestSearch({lastestTerm,setLatestTerm,setReModal}) {

  const navigate = useNavigate();
  

  const handleLatestSearct = (word) => {

    navigate(`/search/1?query=${word}`);
    setReModal(false);
    
  }


  const handleDeleteLatest = (word) => {

    const deletedArr = [];

    for(let i of lastestTerm){
      if(i!==word){
        deletedArr.push(i)
      }
    }

    setLatestTerm([...deletedArr])
    localStorage.setItem("latest",JSON.stringify([...deletedArr]))

  }

  return (
    <>
    <div className='commonLatestSearchContainer'>
      <div className='commonLatestSearchTop'><p>최근 검색어</p></div>
      
      <div className='commonLatestSearchBoxWrap'>

        {lastestTerm.map((word,i) => {

          return <div key={i} className='commonLatestSearchBox'>
          <div className='commonLatestSearchKeyBox'>
            <div onClick={()=>handleLatestSearct(word)}><p></p>{word}</div>
            <div onClick={()=>handleDeleteLatest(word)}>X</div>
          </div>
          <div className='commonLatestUnderLine'></div>  
    

            </div>
        })}

      </div> 
      
    
      </div>
    </>
  )
}

export default CommonLatestSearch