import React from 'react';
import MainItem from '../parts/MainItem';
import MainTitleSub from '../parts/MainTitleSub';
import MainItemsRight from './MainItemsRight';

function MainSpecialGift() {
    return ( 
        <>
        {/* Parts 1 시작 */}
        <h2>Special Gift</h2>
        <p>포장으로 마음을 담은 백화점 선물</p>
        {/* Parts 1 끝 */}
        {/* Part 2(MainItem) 구성 : (위 > 아래) 이미지, 판매자명, 브랜드명, 상품명, ((좌 > 우) 가격, 할인률), ((좌 > 우) 별점 | 리뷰건수)*/}
        <MainItem />
        </>
     );
}

export default MainSpecialGift;