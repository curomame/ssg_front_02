import React, { Suspense } from 'react'
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
import CommonToHome from '../component/parts/commonsParts/CommonToHome'

function Product() {

  const [allImg, setAllImg] = useState(false);
  const handleViewProductImg = () => {
    setAllImg(!allImg);
  }

  const [detailData, setDetailData] = useState('')


  const params = useParams();
  const url = `${process.env.REACT_APP_TEST_URL}`
  
  useEffect(() => {
    axios.get(`${url}/product/detail/${params.id}`,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    })
    .then(res => {
      setDetailData(res.data)
    })
    .catch(err => console.error('상품을 받아오는 도중 에러발생'+err))
  },[])

  // console.log(detailData.productGetDto.discountRate)
  // console.log(detailData.productGetDto.discountRate)

  return (

    
    <>
      <Suspense>
      <CommonToHome/>
      <Header
        type={"product"}/>

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
          <div><p>{detailData.productGetDto.discountRate!==0 && (detailData.productGetDto.price).toLocaleString()}원</p></div>
          <div><h3>{(+(detailData.productGetDto.price * ((100 - detailData.productGetDto.discountRate)/100)).toFixed(0)).toLocaleString()}<span>원</span></h3></div>
        </div>

        <div className='productTopReviewBox'>
          <div>★★★★★</div>
          <div>{detailData.reviewDTOList.length}건 리뷰 {'>'}</div>
        </div>


        <div className='productDetailBox'>
          <div><p>상세정보</p></div>
          <hr />
          <div className={allImg ? 'productDetailImgAfter': 'productDetailImgBefore'}>
            {allImg || <span className='productDetailImgBlur'></span>}
            <div onClick={handleViewProductImg}>{allImg ? '상세정보 접기 ▲' : '상세정보 펼쳐보기 ▼'}</div>
            <img 
              height="2000" 
              // src={detailData ? process.env.REACT_APP_DISPLAY_IMG_URL+detailData.productGetDto.titleImgUrl : null} alt=""
              src={`${process.env.PUBLIC_URL}/img/detailDummys.jpg`} alt=""
              // src='' alt=''
              />
          </div>
        </div>

      <div>
        <div className='productBottomReviewBox'>
          <div><h2>고객 리뷰</h2></div>
          <hr />

          {detailData.reviewDTOList.length === 0
            ? <div>아직 등록된 리뷰가 없습니다.</div>
            : <div >
                <div className='productBottomReviewTop'>
                  <div className='productBottomReviewBig'>{(detailData.avgStar).toFixed(1)}</div>
                    <div>
                  <div><h4>★★★★★</h4></div>
                  <div><h3>{detailData.reviewDTOList.length}건 리뷰</h3></div>
                  </div>
                </div>

              </div> }


          <div className='productBottomReviewAllTitle'>
            <div>전체 리뷰</div>
            <div><Link to='reviews'>더보기({detailData.reviewDTOList.length}) {'>'}</Link></div>
          </div>

          {detailData.reviewDTOList.slice(0,5).map((datas,i) =>
            { 
              return <ProductReviewCards
                  key={i}
                  datas={datas}
                />}
            )}

      </div>
          
          <ProductQNACards
            QNAdatas={detailData.productQnASetListDTO}
            setDetailData={setDetailData}
          />


          <MainBlankSpace px={160}/>
        </div>

      </div>

      <ProductBottonButton
        detailData={detailData}/>
            
      </>
      
      }
      </Suspense>
    </>
  )
}

export default Product

