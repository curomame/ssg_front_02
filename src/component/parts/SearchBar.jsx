import React from 'react'

function SearchBar() {
  return (
    <>
      <div className='headerRight' style={{"display":"flex"}}>
        <div>
          <input type="text"/>
          <span><img src="" alt="searchimg" /></span>
        </div>
        <div>
          <img src="" alt="장바구니아이콘" />
        </div>
      </div>
    </>
  )
}

export default SearchBar