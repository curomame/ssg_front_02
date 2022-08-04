import React from 'react';
import Items from '../layout/Items';
import MainCategorySelect from '../parts/MainCategorySelect';
import MainHyperLink from '../parts/MainHyperLink';
import MainTitleSub from '../parts/MainTitleSub';

function MainPremiumNewArrival() {
    return ( 
        <>
        <MainTitleSub title="Premium New Arrivals" />
        <MainCategorySelect/>
        <Items/>
        <MainHyperLink/>
        </>
     );
}

export default MainPremiumNewArrival;