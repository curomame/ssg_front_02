import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Items from '../../layout/Items';
import MainHyperLink from '../../parts/mainParts/MainHyperLink';
import MainTitleSub from '../../parts/mainParts/MainTitleSub';


function MainSpecialGift() {


    const [giftDatas,setGiftDatas] = useState([]);

    // 일정 갯수까지만 반복되는 함수 작성
    useEffect(() => {
        axios.get('http://localhost:5000/gifts')
            .then(res => {
                setGiftDatas(res.data);
                console.log("Success");
            })
            .catch((Error) => {
                console.log("Fail : " + Error);
            });
    }, [])

    return ( 
        <>
        <MainTitleSub title="Special Gift" sub="포장으로 마음을 담은 백화점 선물"/>
            <div style={{"display":"flex"}}>
            {
                giftDatas && giftDatas.map(items => (
                    <Items 
                        imgsrc={items.imgsrc}
                        alt={items.sub}
                        title={items.title}
                        sub={items.sub}
                        price={items.price}
                        discount={items.discount} />
            
            ))}
        </div>

        <MainHyperLink/>
        </>
     );
}

export default MainSpecialGift;