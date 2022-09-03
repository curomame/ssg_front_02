import axios from 'axios';
import React, { Suspense } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import SearchModalState from '../../../recoil/atoms/SearchModalState';
import CommonLatestSearch from '../../parts/commonsParts/CommonLatestSearch';


function SearchModal() {

  const navigate = useNavigate();
  const location = useLocation()

  const [reModal, setReModal] = useRecoilState(SearchModalState);
  const [searchTerm,setSearchTerm] = useState('')

  const [lastestTerm, setLatestTerm] = useState([])
  
  const autoFocus = useRef(null);

  useEffect(() => {
    setSearchTerm('')
  },[location.pathname])


  useEffect(() => {

    if(localStorage.getItem("latest")){
      setLatestTerm(JSON.parse(localStorage.getItem("latest")))
    } else {
      setLatestTerm([]);
    }


  },[])

  useEffect(() => {
    autoFocus.current.focus()
  },[reModal])


  window.scrollTo({
    top: 0
  });

  const handleSearchFunc = () => {
    navigate(`/search/1?query=${searchTerm}`)
    setReModal(false);

    localStorage.setItem("latest",JSON.stringify([...lastestTerm,...searchTerm]));
    setLatestTerm(JSON.parse(localStorage.getItem("latest")))


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
                  <input 
                    type="text" 
                    placeholder='검색어를 입력하세요!' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    ref={autoFocus}
                    />
                  <span onClick={handleSearchFunc} className="material-icons-outlined">search</span>
                </div>
              </div>

              <div className='searchModalCart'><span className="material-icons-outlined"><Link to='/cart'>shopping_cart</Link></span></div>
          </div>

          
        </div>
          
        {lastestTerm === []
            ? <div className='searchRecentKeyword'>
                <div><span className="material-icons-outlined">error_outline</span></div>
                <div><p>최근 검색어가 없습니다</p></div>
              </div> 
            : 
            <Suspense fallback={<div>최근 검색어 가져오는 중</div>}>
              <CommonLatestSearch
              lastestTerm={lastestTerm}/>
            </Suspense>
            }
          



        </div>
      </div>
      </div>
    </>
  )
}

export default SearchModal