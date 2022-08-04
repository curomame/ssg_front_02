import React from 'react';
import Items from '../layout/Items';
import MainHyperLink from '../parts/MainHyperLink';
import MainTitleSub from '../parts/MainTitleSub';


function MainSpecialGift() {

    // 일정 갯수까지만 반복되는 함수 작성

    return ( 
        <>
        <MainTitleSub title="Special Gift" sub="포장으로 마음을 담은 백화점 선물"/>
        <Items/>
        <MainHyperLink/>
        </>
     );
}

export default MainSpecialGift;