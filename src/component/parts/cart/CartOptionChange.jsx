import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CartOptionChange({itemOptData,setOptChange,setCartDatas}) {

  const navigate = useNavigate()

  const [optionId, setOptionId] = useState()
  const [tempModalDatas, setTempModalDatas] = useState()
  const [optChangeMiniModal, setOptChangeMiniModal] =useState(false)

  useEffect(() => {

    if(itemOptData.productOptionType === 'COMBINATION_TYPE'){

      // console.log(itemOptData);
      
      let optObj = {}

      optObj.optionAName = itemOptData.comOptionADTO[0].name
      optObj.optionADesc = itemOptData.comOptionADTO[0].description

      optObj.optionBName = itemOptData.comOptionBDTO.name
      optObj.optionBDesc = itemOptData.comOptionBDTO.optionBName

      optObj.optionAId = itemOptData.comOptionBDTO.comOptionAId;
      optObj.optionBId = itemOptData.comOptionBDTO.comOptionBId;

      optObj.productOptionId = itemOptData.productOptionId
      setOptionId({...optObj})


    } else if (itemOptData.productOptionType === 'STANDARD_TYPE'){

      let optObj = {}
      optObj.standardName = itemOptData.standardOptionDTO[0].name
      optObj.productOptionId = itemOptData.productOptionId;
      setOptionId({...optObj})
    }

  },[itemOptData]) 

  const handleStdOpt = (id) => {
    console.log(optionId)
    console.log(id);
    console.log(itemOptData.productOptionId);
  }
  

  const handleOpenChangeB = () => {
    setOptChangeMiniModal(true)

    if(itemOptData.productOptionType === 'COMBINATION_TYPE'){
      axios.get(process.env.REACT_APP_TEST_URL+`/po/comOption/${optionId.optionAId}`)
      .then(res=>{
          setTempModalDatas(res.data.comOptionBDTOList)
      })
      .then(err=>console.error(err))
    } 
      
  }

  const handleChangeBId = (item) => {

    const newObj = {

      "optionBDesc":item.optionBName,
      "productOptionId":item.productOptionId

    }

    setOptionId((prev) => ({
      ...prev,...newObj
    }))
    setOptChangeMiniModal(false)
  }
  

  const handleChangeOption = () => {
    console.log(itemOptData.cartId,itemOptData.productOptionId,optionId.productOptionId);

    axios.put(process.env.REACT_APP_TEST_URL+'/cart/option/mod',
    {
          "cartId" : itemOptData.cartId,
          "oldProductOptionId" : itemOptData.productOptionId,
          "newProductOptionId": optionId.productOptionId
    }
    ,{
      
      headers:{
        "Authorization":localStorage.getItem('Authorization')
      }
    }).then(res=>setCartDatas(res.data.data.cartOutputDtoList))
      .catch(err => console.error(err))

    setOptChange(false)
  }


  // console.log(itemOptData.standardOptionDTO)
    // console.log(itemOptData.cartId)
    

  return (
    <>
      <div className='cartOptChangeContainer'>

        <div className='cartOptChangeOpacity'></div>
      <div className='cartOptChangeWhite'>
        <div className='cartOptChangeTop'>
          <div></div>
          <div>옵션 변경</div>
          <div onClick={()=>setOptChange(false)}><span>x</span></div>
        </div>

        <div>옵션변경</div>
        <hr />

        
        {itemOptData.productOptionType === 'COMBINATION_TYPE' && 
        
        <>
        {optionId!==undefined && 
          <div >
            <div className='cartOptionChangeBox'>
              <div>{optionId.optionAName}</div>
              <div>{optionId.optionADesc}</div>
            </div>

            <div onClick={()=>handleOpenChangeB()} className='cartOptionChangeBox'>
              <div>{optionId.optionBName}</div>
              <div>{optionId.optionBDesc}</div>
            </div>
          </div>
          }
        </>
        }

        
      {itemOptData.productOptionType === 'STANDARD_TYPE' && 
        <>
          {itemOptData.standardOptionDTO.map((item) => {

            console.log(itemOptData);
            return <div onClick={()=>handleStdOpt(item.standardOptionId)} key={item.standardOptionId}>{item.standardOptionId}</div>


          })}
        </>
        }
          

        
          {optChangeMiniModal 
          ? <div>
              
              {tempModalDatas ? 
              
              tempModalDatas.map((item) => 
              (<div 
                onClick={()=>handleChangeBId(item)} 
                key={item.productOptionId}>

                {item.optionBName}

              </div>))

              : null}

            </div>
          :null}
      

        <div onClick={() => handleChangeOption()} className='cartButtonOptionChange'><h2>변경하기</h2></div>
        </div>
      </div>
    </>
  )
}

export default CartOptionChange