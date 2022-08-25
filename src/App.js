
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './test/Test';
import Category from './pages/Category';
import Login from './pages/Login';
import Main from './pages/Main';

import {SearchModalContext} from './context/SearchModalContext'
import SearchModal from './component/components/common/SearchModal';
import CategoryDetailTopAll from './component/components/category/CategoryDetailTopAll';
import SignUpTerms from './pages/signUpPage/SignUpTerms';
import SignUpInfo from './pages/signUpPage/SignUpInfo';
import SignUpComplete from './pages/signUpPage/SignUpComplete';
import SignUpMain from './pages/signUpPage/SignUpMain'

import './assets/css/common.css'
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import MyPage from './pages/MyPage';
import Review from './pages/Review';
import MyReviewCreate from './component/components/myReview/MyReviewCreate';
import MyReviewUpdate from './component/components/myReview/MyReviewUpdate';
import Recent from './pages/Recent';
import { RecoilRoot, useRecoilState } from 'recoil';
import SearchModalState from './recoil/atoms/SearchModalState';
import LocalStorage from './test/LocalStorage';
import WishList from './pages/WishList';
import CategoryAtomAxios from './component/components/Invisible/CategoryAtomAxios';
import { TokenVerifying } from './context/TokenVerifying';
import EmailTest from './test/EmailTest';

function App() {

  const [isAuth, setIsAuth] = useState(false);



  return (
    <RecoilRoot>
      <BrowserRouter>
      <CategoryAtomAxios/>
      <SearchModal/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/:id" element={<CategoryDetailTopAll/>}/>

          

          
          <Route path="/mypage" element={<MyPage/>}/>
          
          <Route path="/cart" element={<Cart/>}/>

          <Route path='/review' element={<Review/>}/>
          <Route path="/review/write" element={<MyReviewCreate/>}>
            <Route path=':id' element={<MyReviewCreate />} />
          </Route>

          <Route path="/recent" element={<Recent/>}/>

          <Route path="/wishlist" element={<WishList/>}/>

          <Route path="/review/update" element={<MyReviewUpdate/>}>
            <Route path=':id' element={<MyReviewUpdate />} />
          </Route>
          
          <Route path="/login" element={<Login/>}/>

          <Route path="/signup" element={<SignUpMain/>}/>
          <Route path="/signup/terms" element={<SignUpTerms/>}/>
          <Route path="/signup/info" element={<SignUpInfo/>}/>
          <Route path="/signup/complete>" element={<SignUpComplete/>}/>

          <Route path="/item/detail" element={<ProductDetail />} />


          <Route path="/test" element={<Test/>}/>
          <Route path="/emailtest" element={<EmailTest/>}/>
          <Route path="/testStorage" element={<LocalStorage/>}/>
          

          <Route path="/*" element={<div>nopage</div>}/>
        </Routes>
      </BrowserRouter>

    </RecoilRoot>
  );
}

export default App;
