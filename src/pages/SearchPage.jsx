import axios from 'axios'
import qs from 'qs'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import CommonItems from '../component/parts/commonsParts/CommonItems'

function SearchPage() {

  const navigate = useNavigate()

  const [searchDatas, setSearchDatas] =useState(null);

  const [params] = useSearchParams()
  const query = params.get('query')
  
  const getItemDatas = () => {

    axios.get(process.env.REACT_APP_TEST_URL+`/search/1?query=${query}`)
      .then(res => setSearchDatas(res.data.searchProductList))
      .catch(err => console.error(err))

  }


  useEffect(()=>{
    getItemDatas()
  },[query])


  return (
    <>
    <Header/>
    
    <div onClick={()=>navigate(-1)} className='searchBackArrow'>
      <div><span className="material-icons-outlined">arrow_back</span></div>
      <div><p>'{query}'검색결과</p></div>
      <div></div>
    </div>

    <div className='categoryItemTopContainer'> 

    {searchDatas &&
      <CommonItems
        itemDatas={searchDatas}
        />
    }
    </div>

    <BottomNav/>
    
    </>
  )
}

export default SearchPage