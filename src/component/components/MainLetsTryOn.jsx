import React from 'react';
import MainHyperLink from '../parts/MainHyperLink';
import MainTitleSub from '../parts/MainTitleSub';

function MainLetsTryOn() {
    return ( 
        <>
        <MainTitleSub title="Let's Try On" sub="직접 만져보고 입는 것처럼 생동감있는 쇼핑"/>
        {/* 특이한 상품 박스(Line 10 ~ 12 임시코드)) */}
        <p>특이한 상품 박스</p>
        <br/>
        <MainTitleSub title="피부에 얇게 밀착되는 파운데이션" sub="깔끔하고 자연스럽다고 한다."/>
        <MainHyperLink/>
        </>
     );
}

export default MainLetsTryOn;