import React from 'react';
import MainImgBanner from '../parts/MainImgBanner';
import MainTitleSub from '../parts/MainTitleSub';
import MainEventSlider from './MainEventSlider';

function MainBrandLookBook() {
    return ( 
        <>
        <MainTitleSub title="Brand Look Book" />
        {/* 여기에 사용하는게 맞는지 확인 필요 */}
        <MainEventSlider/>
        </>
     );
}

export default MainBrandLookBook;