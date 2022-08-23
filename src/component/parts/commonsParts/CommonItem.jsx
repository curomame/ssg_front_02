import React from 'react'
import { Link } from 'react-router-dom'

function CommonItem({datas}) {

  console.log(datas && datas[0])
  
  
  return (<>

  {datas && 


    datas.map(item => 

      
      <div className="" style={{"width":"45%", "margin":"0px","padding":"35px 7px 12px 8px"}}>
        {/* <div>
          <div><p>SSG개런티</p></div>
        </div> */}
   <Link to='#' style={{width:"100%"}}>
        <div>
          <div><img style={{"width":"100%"}} src={`http://10.10.10.167:8080/display?fileName=${datas[0].titleImgUrl}`} alt="" /></div>
          
          <div className='categoryItemText'>
          
              <div><h3><span>신세계몰</span>{datas[0].brandName}</h3></div>
              <div><h2>{"item.title"}</h2></div>
              <div><p className='categoryItemSub'>{datas[0].productName}</p></div>
              <div><p className={`categoryItemPrice ${datas[0].discountRate ? "categoryline" : null}`}>{(datas[0].price).toLocaleString()}원</p></div>
              {/* {item.discount 
                ? <div className='categoryItemDiscount'>
                    <p>{(item.price * (100 - item.discount)/100).toLocaleString()}원</p>
                    <p>{item.discount}%</p>
                  </div> 
                : null} */}
              <div className='categoryItemStar'><p>★</p><p>{datas[0].reviewStar}</p><p>|</p><p>{(datas[0].reviewCnt).toLocaleString()}건</p></div>
   
            <div style={{display:"flex"}}>
              
              {/* {item.import ? <div className='categoryAttBox'><p>해외직구</p></div> :null}
              {item.freeShip ? <div className='categoryAttBox'><p>무료배송</p></div> :null} */}
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