import React from 'react';
import Items from '../../layout/Items';
import MainCategorySelect from '../../parts/mainParts/MainCategorySelect';
import MainHyperLink from '../../parts/mainParts/MainHyperLink';
import MainTitleSub from '../../parts/mainParts/MainTitleSub';

function MainCrossBorderShopping() {
    return ( 
        <>
        <MainTitleSub title="스마트한 해외 직구 쇼핑" />
        <MainCategorySelect/>
        <Items/>
        <MainHyperLink/>
        </>
     );
}

export default MainCrossBorderShopping;