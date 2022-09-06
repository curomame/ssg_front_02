import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCombOptDetail from './ProductCombOptDetail';
import ProductSelectedOptItem from './ProductSelectedOptItem';

function ProductCombOpt({detailData,setProductOptId}) {

  const optDatas = detailData.comOptionAGetDTO.comOptionNameDTOList;
  const params = useParams();

  const [openDetail, setOpenDetail] = useState(false);
  const [detailType, setDetailType] = useState('')

  const [selected, setSelected] = useState('')
  const [optBoxSelect, setOptBoxSelect] = useState('');

  const [opt1, setOpt1] = useState({desc:'선택하세요'});
  const [opt2, setOpt2] = useState({desc:'선택하세요'});
  const [opt3, setOpt3] = useState({desc:'선택하세요'});

  const [output,setOutput] = useState('');


  const [fullItem,setFullItem] = useState([]);

  const [totalPrice,setTotalprice] = useState(0);

  // console.log(detailData.comOptionAGetDTO.comOptionNameDTOList);
  
  console.log(fullItem);

    useEffect(() => {

      switch(detailType){

        case 'opt1':
          setOpt1({...selected})
          break;
          

        case 'opt2':
          setOpt2({...selected})
          break;
          

        case 'opt3':
          setOpt3({...selected})
          break;
          

        default:
          return ;}

    },[selected])
  

    useEffect(() => {

      if(opt3.id){
        handleCallCombOutput()
      }

    },[opt3])
  //누르면 튀 나오는 함수

  const handleOpt1 = () => {
    setDetailType("opt1");
    setOpt2({desc:'선택하세요'})
    setOpt3({desc:'선택하세요'})
    // console.log(detailData.comOptionAGetDTO.comOptionADTOList);
    setOptBoxSelect(detailData.comOptionAGetDTO.comOptionADTOList)
    setOpenDetail(true);
  }

  const handleCallOpt2 = () => {
    setDetailType("opt2");
    setOpt3({desc:'선택하세요'})
    axios.get(process.env.REACT_APP_TEST_URL+`/po/comOption/${opt1.id}`)
      .then(res => {

        console.log(res.data.comOptionBDTOList)
        setOptBoxSelect(res.data.comOptionBDTOList)
      })
      .catch(err => console.error(err))
      setOpenDetail(true);
  }


  const handleCallOpt3 = () => {
    
    setDetailType("opt3");
    axios.get(process.env.REACT_APP_TEST_URL+`/po/comOption/${opt1.id}/${opt2.id}`)
      .then(res => {
        console.log(res.data.comOptionCDTOList)
        setOptBoxSelect(res.data.comOptionCDTOList)
      })
      .catch(err => console.error(err))
      setOpenDetail(true);
  }

  const handleCallCombOutput = () => {
    axios.get(process.env.REACT_APP_TEST_URL+`/po/comOption/${opt1.id}/${opt2.id}/${opt3.id}`)
      .then(res => {
        console.log(res.data);
        setProductOptId((prev) => ([...prev,res.data.productOptionId]))
        setFullItem([...fullItem,res.data])
      })
      .catch(err => console.error(err))

  }



  const FuncArray = [handleOpt1,handleCallOpt2,handleCallOpt3];
  const DefaultOpt = [opt1,opt2,opt3]


  return (
    <>
            {optDatas.map((opt,i)=>{
            return <div onClick={() => FuncArray[i](opt.idx)} className='productOptBox' key={opt.idx}> 
                      <div ><p>{DefaultOpt[i].desc}({opt.comOptionName})</p></div>
                      <div ><span className="material-icons-outlined">keyboard_arrow_down</span></div>
                    </div>
            })} 



          {openDetail 
            ? <ProductCombOptDetail
                setOpenDetail={setOpenDetail}
                
                optBoxSelect={optBoxSelect}
                setOptBoxSelect={setOptBoxSelect}

                selected={selected}
                setSelected={setSelected}
                
                detailType={detailType}
                
                fullItem={fullItem}
                setFullItem={setFullItem}
                
                setProductOptId={setProductOptId}
                />

            : null }  
          

          {Object.keys(fullItem).length !== 0 
            ? <ProductSelectedOptItem
              fullItem={fullItem}
              setFullItem={setFullItem}
              setTotalprice={setTotalprice}
              />
              
            : null}

          <div>총 합계</div>
          

      </>
  )
}

export default ProductCombOpt