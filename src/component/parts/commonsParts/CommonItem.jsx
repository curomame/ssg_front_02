import React from 'react'
import { Link } from 'react-router-dom'

function CommonItem({datas,type}) {
  
  const handleFindId = (e) => {
    console.log(e.target);
  }

  return (<>
  {datas && 

    datas.map((item) => 

      <div key={item.wishId} className="" style={{"width":"45%", "margin":"0px","padding":"35px 7px 12px 8px"}}>
      <Link to='#' style={{width:"100%"}}>
        <div>
          <div style={{"position":"relative"}}>
            <img style={{"width":"100%"}} 
            src={process.env.REACT_APP_DISPLAY_IMG_URL+`${item.titleImgUrl}`} alt="ㅠㅠ" />
            {(type==='wishlist') && <div className='wishListDeleteIcon'><span class="material-icons-outlined">delete</span></div>}
          </div>
          
          <div className='categoryItemText'>
          
              <div><h3><span>신세계몰</span>{item.brandName}</h3></div>
              <div><h2>{item.title}</h2></div>
              <div><p className='categoryItemSub'>{item.productName}</p></div>
              <div><p className={`categoryItemPrice ${item.discountRate ? "categoryline" : null}`}>{(item.price).toLocaleString()}원</p></div>

              <div className='categoryItemStar'><p>★</p><p>{item.reviewStar}</p><p>|</p><p>{(item.reviewCnt).toLocaleString()}건</p></div>
   
            <div style={{display:"flex"}}>
              
            </div>
          </div>
            
      
   
        </div>
        </Link>
      </div>

      )



   }
     
    </>
  )
}

export default CommonItem