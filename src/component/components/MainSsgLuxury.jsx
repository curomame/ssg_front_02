import React from 'react';
import Items from '../layout/Items';
import MainHyperLink from '../parts/MainHyperLink';
import MainImgBanner from '../parts/MainImgBanner';
import MainTitleSub from '../parts/MainTitleSub';

function MainSsgLuxury() {
    return ( 
        <>
        <MainTitleSub title="SSG Luxury" sub="명품의 신세계를 만나다"/>
        <MainImgBanner/>
        <Items/>
        <MainHyperLink/>
        </>
     );
}

export default MainSsgLuxury;