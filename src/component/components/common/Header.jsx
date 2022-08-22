import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { SearchModalContext } from '../../../context/SearchModalContext';
import SearchModalState from '../../../recoil/atoms/SearchModalState';
import Logo from '../../parts/commonsParts/Logo';
import MyCart from '../../parts/commonsParts/MyCart';
import SearchBar from '../../parts/commonsParts/SearchBar';


function Header({type}) {

  const navigate = useNavigate();

  // const {isModal,setIsModal} = useContext(SearchModalContext);

  const [reModal, setReModal] = useRecoilState(SearchModalState);

  switch(type){
    case 'cart':
      return <div className='cartHeaderLayout'>
                <div><span className="material-icons-outlined" onClick={()=>navigate(-1)}>arrow_back</span></div>
                <div><h2>장바구니</h2></div>
                <div>
                  <span  className="material-icons-outlined">search</span>
                  <span  className="material-icons-outlined">home</span>
                </div>
              </div>
    
    case 'login':
      return <div className='loginHeaderLayout'>
                <div><span className="material-icons-outlined" onClick={()=>navigate(-1)}>arrow_back</span></div>
                <div><h3>로그인</h3></div>
                <div></div>
              </div>

    case 'mypage':
      return <div className='mypageLayout'>
                <div><span className="material-icons-outlined" onClick={()=>navigate(-1)}>arrow_back</span></div>
                
                <div><h2>MYSSG</h2></div>
                
                <div className='mypageLayoutRight'>
                  <div><span className="material-icons-outlined"><Link to='/cart'>shopping_cart</Link></span></div>
                  <div><span className="material-icons-outlined"><Link to='/'>home</Link></span></div>
                </div>
                
              </div>

    case 'searchModal':
      return <div className='searchModal'>

                    <div><span className="material-icons-outlined" onClick={() => (setReModal(!reModal))}>arrow_back</span></div>
                    
                    <div className='searchModalRight'>
                    <div>
                      <div className='searchModalInput'>
                      <input type="text" placeholder='검색어를 입력하세요!'/>
                      <span className="searchModalIcon material-icons-outlined">search</span>
                    </div>
                    </div>

                      <div><span className="material-icons-outlined"><Link to='/cart'>shopping_cart</Link></span></div>
                    </div>
                  
                
              </div>


    case 'myReviw':
      return <div className='loginHeaderLayout'>
              <div><span className="material-icons-outlined" onClick={()=>navigate(-1)}>arrow_back</span></div>
              <div><h3>리뷰 작성</h3></div>
              <div></div>
            </div>


    case 'writeReview':
      return <div className='loginHeaderLayout'>
              <div><span className="material-icons-outlined" onClick={()=>navigate(-1)}>arrow_back</span></div>
              <div><h3>리뷰 작성</h3></div>
              <div></div>
            </div>

    case 'recent':
      return <div className='loginHeaderLayout'>
              <div><span className="material-icons-outlined" onClick={()=>navigate(-1)}>arrow_back</span></div>
              <div><h3>최근 본 쇼핑정보</h3></div>
              <div>편집</div>
            </div>


    default:
      return <>
              <div className='headerLayout'>
                <Logo/>
                
                <div className='headerLayoutRight'>
                  <SearchBar/>
                  <div className='headerLayoutRightCart'><span className="material-icons-outlined"><Link to='/cart'>shopping_cart</Link></span></div>
                </div>

              </div>
            </>



  }}

export default Header