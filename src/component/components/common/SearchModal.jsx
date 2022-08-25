import React, { useContext } from 'react'
import { useRecoilState } from 'recoil';
// import {SearchModalContext} from '../../../context/SearchModalContext'
import SearchModalState from '../../../recoil/atoms/SearchModalState';
import Header from './Header';

function SearchModal() {


  // const {isModal, setIsModal} = useContext(SearchModalContext);

  const [reModal, setReModal] = useRecoilState(SearchModalState);


  window.scrollTo({
    top: 0
  });

  return (
    <>

      

      <div className="searchBarContainer" 
           style={ {"display": reModal ? "block": "none"}}>
        <div className="searchBarBox">
          
          <Header
            type={'searchModal'}/>
          <div className='searchRecentKeyword'>
            <div><span className="material-icons-outlined">error_outline</span></div>
            <div><p>최근 검색어가 없습니다</p></div>
          </div>

          <div>
            <h2>추천태그</h2>
          </div>

        </div>
      </div>

    </>
  )
}

export default SearchModal