import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function WishItem({datas,type,editMode}) {
  
  const [editSelect, setEditSelect] = useState([])
  const [checkArr, setCheckArr] = useState([])
  const [tempArr, setTempArr] = useState([])

  const selectArrCreate = (e) => {

    let newSelect = [...editSelect];
    
    if(editSelect.includes(e.target.id)){
      const idx = newSelect.indexOf(e.target.id);
      const idxNewSelect = newSelect.filter((item,i) => {if(i !== idx){return item}}) ;
      newSelect = idxNewSelect;
    } else {
      newSelect.push(e.target.id);
    }
    setEditSelect([...newSelect])

    changeChecked(e)
  }


  const changeChecked = (e) => {

    const idx = e.target.name;
    let newArr = checkArr.slice();

    if(newArr[idx]){
      newArr[idx] = false;
    } else {
      newArr[idx] = true;
    }

    setCheckArr([...newArr]);
  }


  

  const handleRemoveList = () => {

    const pushArr = []
    for(let j of editSelect ){
      pushArr.push(Number(j))
    }

    axios.delete(process.env.REACT_APP_TEST_URL+'/user/wish/del',{
      data:{
        "wishIdList":pushArr
      },
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
      
    }
    ).then(res => console.log(res.data))
      .catch(err => console.error(err))



    setEditSelect([])
    setCheckArr([])

  }

  useEffect(() => {
    {datas &&
      setCheckArr(new Array(datas.length))
    }
  },[datas])


  useEffect(() => {

    setTempArr([...checkArr])

  },[checkArr])


  return (<>

  {datas && 

    datas.map((item,idx) => 

    {
      console.log(item.productId)
      return <div key={item.wishId} className="" style={{"width":"45%", "margin":"0px","padding":"35px 7px 12px 8px"}}>
      <Link to={"/product/"+item.productId} style={{width:"100%"}}>
        <div>
          <div style={{"position":"relative"}}>
            <img style={{"width":"100%"}} 
            src={process.env.REACT_APP_DISPLAY_IMG_URL+`${item.titleImgUrl}`} alt="이미지" />
            
            {(type==='wishlist') && 
            
            <div className='wishListDeleteIcon'>

              {editMode 
                  ? <input type="checkbox" id={item.wishId} name={idx} onChange={selectArrCreate} checked={tempArr[idx] ? true: false}/> 
                  : null}
            
            </div>}

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
      </div>}
      )
   }
    {editMode 
    ? <div className='myWishEditBox'>
        <div><p>폴더에 추가</p></div>
        <div onClick={handleRemoveList} ><p>삭제</p></div>
      </div>
    : null}
    
    
    </>
  )
}

export default WishItem