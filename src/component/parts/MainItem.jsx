import React from 'react';

function MainItem() {
    return ( 
        <>
        <div>
            <img src="" alt="img1" /></div>
        <p style={{"font-weight":"bold"}}>판매자명</p>
        <p style={{"font-weight":"bold"}}>브랜드명</p>
        <p>상품명</p>
        <div>
            <div style={{"width":"50%", "float":"left"}}>금액</div>
            <div style={{"width":"50%", "float":"right"}}>할인율</div>
        </div>
        </>
     );
}

export default MainItem;