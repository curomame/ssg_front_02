import React from 'react'
import Header from '../component/components/common/Header'
import ProductBottonButton from '../component/layout/product/ProductBottonButton'
import ProductSlider from '../component/layout/product/ProductSlider'
import '../assets/css/product.css'
import { useState } from 'react';
import ProductReviewCards from '../component/components/product/ProductReviewCards'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import ProductQNACards from '../component/components/product/ProductQNACards'
import MainBlankSpace from '../component/parts/mainParts/MainBlankSpace'

function Product() {



  const [allImg, setAllImg] = useState(false);
  const handleViewProductImg = () => {
    setAllImg(!allImg);
  }

  const [detailData, setDetailData] = useState('')


  const params = useParams();
  const url = `${process.env.REACT_APP_TEST_URL}`
  
  useEffect(() => {
    axios.get(`${url}/product/detail/${params.id}`)
    .then(res => {
      // console.log(res.data);
      setDetailData(res.data)
    })
    .catch(err => console.error('상품을 받아오는 도중 에러발생'))
  },[])
  
  console.log(detailData);

  return (

    
    <>

    
      <Header
        type={"product"}/>

      {/* 필수요소만 적어봄 */}

      {detailData && 
      
      <>

      {detailData && 
        <ProductSlider
          imgs={detailData.productGetDto.productImageDTOList}
        />
      }
            

      <div className='productContainer'>
        <div>신세계몰</div>

        <div className='productTitleSubBox'>
          <h4>{detailData.productGetDto.brandName}</h4>
          <h3>{detailData.productGetDto.productName}</h3>
          <p>원산지 : 상세설명참조</p>
        </div>

        <div className='productPriceBox'>
          <div><h3>{(detailData.productGetDto.price).toLocaleString()}<span>원</span></h3></div>
        </div>

        <div className='productTopReviewBox'>
          <div>★★★★★</div>
          <div>{detailData.reviewDTOList.length}건 리뷰 {'>'}</div>
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
          <div><h3>{detailData.reviewDTOList.length}건 리뷰</h3></div>

          <div className='productReviewCardImgAll'>
            <div>포토{'&'}동영상 리뷰</div>
            <div>더보기{'>'}</div>
          </div>

          <div className='productBottomReviewAllTitle'>
            <div>전체 리뷰</div>
            <div><Link to='reviews'>더보기({detailData.reviewDTOList.length}) {'>'}</Link></div>
          </div>


          {detailData.reviewDTOList.map((datas,i) =>

          <ProductReviewCards
            key={i}
            datas={datas}
          />)
          
          }
          
          <ProductQNACards
            // datas={}
          />

          <MainBlankSpace px={160}/>
        </div>

      </div>

      <ProductBottonButton/>
            
      </>
      
      }


    </>
  )
}

export default Product