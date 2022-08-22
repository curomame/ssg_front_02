import React, { useContext } from 'react'
import MyCart from './MyCart'
import {SearchModalContext} from '../../../context/SearchModalContext'
import { useRecoilState } from 'recoil';
import SearchModalState from '../../../recoil/atoms/SearchModalState';


function SearchBar() {

  // const {isModal,setIsModal} = useContext(SearchModalContext);
  const [reModal, setReModal] = useRecoilState(SearchModalState);
  

  return (
    <>
      <div className='headerSearchIn'>
        
        <div>
          <div onClick={() => (setReModal(!reModal))} className='headerSearchBar'>
            <input type="text"/>
            <span className="headerSearchIcon material-icons-outlined">search</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar