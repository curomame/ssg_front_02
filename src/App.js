
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './test/Test';
import Category from './pages/Category';
import Login from './pages/Login';
import Main from './pages/Main';

import SearchModal from './component/components/common/SearchModal';
import CategoryDetailTopAll from './component/components/category/CategoryDetailTopAll';

import './assets/css/common.css'
import Cart from './pages/Cart';
import MyPage from './pages/MyPage';
import Review from './pages/Review';
import MyReviewCreate from './component/components/myReview/MyReviewCreate';
import MyReviewUpdate from './component/components/myReview/MyReviewUpdate';
import Recent from './pages/Recent';
import { RecoilRoot } from 'recoil';
import LocalStorage from './test/LocalStorage';
import WishList from './pages/WishList';
import CategoryAtomAxios from './component/components/Invisible/CategoryAtomAxios';
import EmailTest from './test/EmailTest';
import SignUp from './pages/SignUp';
import SignUpEntry from './component/components/signup/SignUpEntry';
import SignUpInformation from './component/components/signup/SignUpInformation';
import SignUpAuth from './component/components/signup/SignUpAuth';
import Wrong from './pages/Wrong';
import AuthStatusUpdate from './component/parts/commonsParts/AuthStatusUpdate';
import Product from './pages/Product';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
      
      <CategoryAtomAxios/>
      <AuthStatusUpdate/>
      <ScrollToTop/>
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


          <Route path="/product" element={<Product/>}/>

          <Route path="/signup" element={<SignUp/>}>
            <Route path="entry" element={<SignUpEntry/>}/>
            {/* <Route path="point" element={<SignUpPoint/>}/> */}
            <Route path="info" element={<SignUpInformation/>}/>
            <Route path="auth" element={<SignUpAuth/>}/>
          </Route>



          <Route path="/test" element={<Test/>}/>
          <Route path="/emailtest" element={<EmailTest/>}/>
          <Route path="/testStorage" element={<LocalStorage/>}/>
          

          <Route path="/*" element={<Wrong/>}/>
        </Routes>
      </BrowserRouter>

    </RecoilRoot>
  );
}

export default App;
