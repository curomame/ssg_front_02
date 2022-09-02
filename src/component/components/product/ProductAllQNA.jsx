import axios from 'axios'
import React, { Suspense } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductQNAPart from '../../parts/productParts/ProductQNAPart'
import Header from '../common/Header'
import ProductQuestion from './ProductQuestion'

function ProductAllQNA() {
  
  const params = useParams()
  const [qnaDatas, setQNADats] = useState(null)
  // const [curveDatas, setCurveDatas] = useState()
  const [tempModal, setTempModal] = useState(false)


  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+`/product/QnASet/${params.id}`)
      .then(res=>{
        // console.log(res.data);
        setQNADats(res.data)
      })
      .catch(err=>console.error(err))

  },[])

  return (
    <>
    {qnaDatas && 
        <div>
          <Header
            type={'text'}
            text="Q&A 문의"
          />

          <div>
            <div>{qnaDatas.qnaCount}건 Q&A</div>
            <div onClick={()=>setTempModal(true)}>문의하기</div>

          {tempModal 
          ? <ProductQuestion
            setQModal={setTempModal}
          />
          : null}

          </div>

        
        <ProductQNAPart
        QNAdatas={qnaDatas}
        />
    </div>
    }
    
      


    </>
  )
}

export default ProductAllQNA