import React from 'react'
import Header from '../component/components/common/Header'
import ProductBottonButton from '../component/layout/product/ProductBottonButton'
import ProductSlider from '../component/layout/product/ProductSlider'
import '../assets/css/product.css'
import { useState } from 'react';
import ProductReviewCards from '../component/components/product/ProductReviewCards'
import { Link } from 'react-router-dom'

function Product() {

  const [allImg, setAllImg] = useState(false);

  const handleViewProductImg = () => {
    setAllImg(!allImg);
  }

  return (
    <>
      <Header
        type={"product"}/>

      {/* 필수요소만 적어봄 */}

      <ProductSlider/>

      <div className='productContainer'>
        <div>신세계몰</div>

        <div className='productTitleSubBox'>
          <h4>브랜드 네임</h4>
          <h3>[즉시출고][불로동주유소] [불로동X홍영의]  참기름간장 선물세트 4입</h3>
          <p>원산지 : 상세설명참조</p>
        </div>

        <div className='productPriceBox'>
          <div><h3>70,000<span>원</span></h3></div>
        </div>

        <div className='productTopReviewBox'>
          <div>★★★★★</div>
          <div>N건 리뷰 {'>'}</div>
        </div>


        <div className='productDetailBox'>
          <div><p>상세정보</p></div>
          <hr />
          <div className={allImg ? 'productDetailImgAfter': 'productDetailImgBefore'}>
            {allImg || <span className='productDetailImgBlur'> </span>}
            <div onClick={handleViewProductImg}>{allImg ? '상세정보 접기 ▲' : '상세정보 펼쳐보기 ▼'}</div>
            <img src="https://sstatic.ssgcdn.com/cmpt/edit/202101/29/162021012916430641268195539819_757.jpg" alt="" />
          </div>
        </div>


        <div className='productBottomReviewBox'>
          <div><h2>고객 리뷰</h2></div>
          <hr />
          <div><h4>★★★★★ 별점</h4></div>
          <div><h3>N건 리뷰</h3></div>

          <div className='productBottomReviewAllTitle'>
            <div>전체 리뷰</div>
            <div><Link to='reviews'>더보기(16) {'>'}</Link></div>
          </div>

          <ProductReviewCards/>

        </div>
        <div>큐엔에</div>

      </div>

      <ProductBottonButton/>
    </>
  )
}

export default Product