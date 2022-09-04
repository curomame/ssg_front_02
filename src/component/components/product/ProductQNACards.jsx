import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductQNAPart from '../../parts/productParts/ProductQNAPart'
import ProductAllQNA from './ProductAllQNA';
import ProductQuestion from './ProductQuestion';

function ProductQNACards({QNAdatas,setDetailData}) {

  const [QModal,setQModal] = useState(false);


  return (
    <>
      <div>
        <div>
          <div>Q&A 문의</div>
          <div onClick={() => setQModal(true)}>문의하기</div>
          <hr />
        </div>
        
          <ProductQNAPart
          QNAdatas={QNAdatas}
          />

        <Link to='qnas'>
          <div>모든 QNA 보기</div>
        </Link>

          {/* qna 문의하기 띄우기 */}

          {QModal && 
          <ProductQuestion
          setQModal={setQModal}
          setDetailData={setDetailData}
          />
          }
          

      </div>
    </>
  )
}

export default ProductQNACards