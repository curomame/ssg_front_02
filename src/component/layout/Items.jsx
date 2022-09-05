import { faCropSimple } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddWishUtil from '../../utils/AddWishUtil'
import CommonTitleSub from '../parts/commonsParts/CommonTitleSub'
import CommonWishListParts from '../parts/commonsParts/CommonWishListParts'
import StarNReview from '../parts/commonsParts/StarNReview'
import MainTitleSub from '../parts/mainParts/MainTitleSub'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items({itemDatas}) {


  //현재 하트들에 대한 저장값
  //useEffect통해서 해당 값 truefals변경
  //

  const [tempHeart,setTempHeart] = useState([])

  const handleWishFunc = (id,i) => {

    const prevHeart = tempHeart.slice()
    if(prevHeart[i] === true){
      prevHeart[i]= false;
    } else {
      prevHeart[i]= true;
    }

    setTempHeart([...prevHeart])

    AddWishUtil(id)



  }

  useEffect(()=>{
    const newheartArr = [];
    {itemDatas && 
      itemDatas.map((item) => newheartArr.push(item.wishList))
      setTempHeart([...newheartArr])
    }

  },[itemDatas])

  // console.log(tempHeart);

  return (

    <>

    {tempHeart[0] !== undefined && 
    
    <div className="mainItemContainer" >
        
    {itemDatas && itemDatas.map((item,i) => 

    {

      return <div key={i} className='mainItemsContainer'>

        <div onClick={()=>handleWishFunc(item.productId,i)} className='mainItemWishIcon'>
          {tempHeart[i] ? <span className="material-icons-outlined hearChecked">favorite</span>: <span className="material-icons-outlined">favorite_border</span>}
        </div>

    <Link to={'/product/'+item.productId}>
      <div className='mainItems' key={i}>
        <div className='mainItemsImgs'>
          <img 
        src={process.env.REACT_APP_TEST_URL+`/display?fileName=${item.titleImgUrl}`} 
        alt={'사진'}
        />

        </div>


        
        <ul>
          <li>신세계몰</li>
          <li className='mainItemName'>{item.productName}</li>
          <li>{(item.price).toLocaleString()}원</li>
        </ul>
        { item.avgStar 
        ? <div>
            <StarNReview 
                  point={item.avgStar}
                  count={item.productReviewCnt}/>
          </div> 
          : null}
      </div>
    </Link>
    
    </div>  }
    
      )}
    
    </div>
    }



    </>
  )
}

export default Items