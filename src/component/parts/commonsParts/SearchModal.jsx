import React, { useContext } from 'react'
import {SearchModalContext} from '../../../context/SearchModalContext'
import '../../../assets/css/common/commom.css'
import CategoryMainGrid from '../../components/category/CategoryMainGrid';

function SearchModal() {

  const {isModal, setIsModal} = useContext(SearchModalContext);

  window.scrollTo({
    top: 0
  });

  return (
    <>

      <div className="searchBarContainer" style={ {"display": isModal ? "block": "none"}}>
        <div className="searchBarBox">
          
          <div className="searchBarPrevious">
            <div className='searchPreIconBox'>
              <div className='searchPreIcon' onClick={() => {setIsModal(!isModal)}}><span class="material-icons-outlined">chevron_left</span></div>
            </div>
            <div className='searchBarRight'>
              <div className='searchBarInput'>
                <input type="text"/>
                <div className='searchBarIcon'><span className="material-icons-outlined">search</span></div>
                </div >
              <div className='searchCartIcon'><span className="material-icons-outlined">shopping_cart</span></div>
            </div>
          </div>
          
          <div className='searchRecentKeyword'>
            <div><span class="material-icons-outlined">error_outline</span></div>
            <div><p>최근 검색어가 없습니다</p></div>
          </div>

          <div>
            <CategoryMainGrid/>
          </div>

        </div>
      </div>

    </>
  )
}

export default SearchModal