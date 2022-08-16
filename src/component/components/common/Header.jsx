import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../parts/commonsParts/Logo';
import MyCart from '../../parts/commonsParts/MyCart';
import SearchBar from '../../parts/commonsParts/SearchBar';


function Header({type}) {

  const navigate = useNavigate();




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



    default:
      return <>
              <div className='headerLayout'>
                <Logo/>
                <SearchBar/>
                <MyCart/>
              </div>
            </>



  }}

export default Header