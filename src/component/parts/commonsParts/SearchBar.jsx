import React, { useContext } from 'react'
import MyCart from './MyCart'
import {SearchModalContext} from '../../../context/SearchModalContext'


function SearchBar() {

  const {isModal,setIsModal} = useContext(SearchModalContext);

  return (
    <>
      <div className='headerRight'>
        
        <div>
          <div onClick={() => (setIsModal(!isModal))} className='headerSearchBar'>
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