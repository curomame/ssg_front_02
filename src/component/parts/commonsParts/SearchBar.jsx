import React, { useContext } from 'react'
import MyCart from './MyCart'
import {SearchModalContext} from '../../../context/SearchModalContext'


function SearchBar() {

  const {isModal,setIsModal} = useContext(SearchModalContext);

  return (
    <>
      <div className='headerSearchIn'>
        
        <div>
          <div onClick={() => (setIsModal(!isModal))} className='headerSearchBar'>
            <input type="text"/>
            <span className="headerSearchIcon material-icons-outlined">search</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar