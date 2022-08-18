
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './component/test/Test';
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

function App() {

  const [isModal, setIsModal] = useState(false);


  return (

    <SearchModalContext.Provider value={{isModal,setIsModal}}>
      <BrowserRouter>
      <SearchModal/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/:id" element={<CategoryDetailTopAll/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/test" element={<Test/>}/>
          
          <Route path="/mypage" element={<MyPage/>}/>
          
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path="/review/write" element={<MyReviewCreate/>}>
            <Route path=':id' element={<MyReviewCreate />} />
          </Route>

          <Route path="/review/update" element={<MyReviewUpdate/>}>
            <Route path=':id' element={<MyReviewUpdate />} />
          </Route>

          <Route path="/signup" element={<SignUpMain/>}/>
          <Route path="/signup/terms" element={<SignUpTerms/>}/>
          <Route path="/signup/info" element={<SignUpInfo/>}/>
          <Route path="/signup/complete>" element={<SignUpComplete/>}/>

          <Route path="/item/detail" element={<ProductDetail />} />

          

          <Route path="/*" element={<div>nopage</div>}/>
        </Routes>
      </BrowserRouter>

    </SearchModalContext.Provider>
  );
}

export default App;
