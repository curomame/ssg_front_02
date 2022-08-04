import React from 'react'
import MyCart from './MyCart'

function SearchBar() {
  return (
    <>
      <div className='headerRight'>
        
        <div>
          <div className='headerSearchBar'>
            <input type="text"/>
            <span className="headerSearchIcon material-icons-outlined">search</span>
          </div>
        </div>

        <div >
          <MyCart/>
        </div>
      </div>
    </>
  )
}

export default SearchBar