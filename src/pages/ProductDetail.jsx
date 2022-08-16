import React from "react";
import Header from "../component/components/common/Header";
import ProductDetailInfo from "../component/components/productdetail/ProductDetailInfo";
import ProductDetailNavBar from "../component/parts/productDetailParts/ProductDetailNavBar";

function ProductDetail() {
  return (
    <div>
      <Header />
      <ProductDetailInfo />
      {/* <ProductDetailNavBar /> */}
    </div>
  );
}

export default ProductDetail;
