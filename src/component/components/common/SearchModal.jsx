import React, { useContext } from 'react'
import {SearchModalContext} from '../../../context/SearchModalContext'
import Header from './Header';

function SearchModal() {

  const {isModal, setIsModal} = useContext(SearchModalContext);

  window.scrollTo({
    top: 0
  });

  return (
    <>

      

      <div className="searchBarContainer" style={ {"display": isModal ? "block": "none"}}>
        <div className="searchBarBox">
          
          <Header
            type={'searchModal'}/>
          <div className='searchRecentKeyword'>
            <div><span class="material-icons-outlined">error_outline</span></div>
            <div><p>최근 검색어가 없습니다</p></div>
          </div>

          <div>
            <h2>추천앙냥냥</h2>
          </div>

        </div>
      </div>

    </>
  )
}

export default SearchModal