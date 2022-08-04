import React from 'react';
import Items from '../layout/Items';
import MainCategorySelect from '../parts/MainCategorySelect';
import MainHyperLink from '../parts/MainHyperLink';
import MainTitleSub from '../parts/MainTitleSub';

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