import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import SearchModalState from '../../../recoil/atoms/SearchModalState';


function SearchModal() {

  const navigate = useNavigate();
  const location = useLocation()

  const [reModal, setReModal] = useRecoilState(SearchModalState);
  const [searchTerm,setSearchTerm] = useState('')

  
  useEffect(() => {

    setSearchTerm('')

  },[location.pathname])


  useEffect(() => {})
  window.scrollTo({
    top: 0
  });

  const handleSearchFunc = () => {
    navigate(`/search/1?query=${searchTerm}`)
    setReModal(false);
  }

  return (
    <>
      <div className="searchBarContainer" 
        style={ {"display": reModal ? "block": "none"}}>
      <div className="searchBarBox">
          
        <div>

          <div className='searchModal'>

            <div className='searchModalLeft'>
              <span 
                className="material-icons-outlined"
                onClick={() => (setReModal(!reModal))}>arrow_back</span>
            </div>

            <div className='searchModalRightBox'>
              <div>
                <div className='searchModalMiddleProps' >
                  <input type="text" placeholder='검색어를 입력하세요!' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                  <span onClick={handleSearchFunc} className="material-icons-outlined">search</span>
                </div>
              </div>

              <div className='searchModalCart'><span className="material-icons-outlined"><Link to='/cart'>shopping_cart</Link></span></div>
          </div>

          
        </div>
          
          {/* <Header
            type={'searchModal'}/>
          <div className='searchRecentKeyword'>
            <div><span className="material-icons-outlined">error_outline</span></div>
            <div><p>최근 검색어가 없습니다</p></div>
          </div> */}

          {/* <div>
            <h2>추천태그</h2>
          </div> */}

        </div>
      </div>
      </div>
    </>
  )
}

export default SearchModal