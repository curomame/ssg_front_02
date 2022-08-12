import React from "react";
import ProductDetailVendorInfo from "../../parts/productDetailParts/ProductDetailVendorInfo";
import ProductProviderLink from "../../parts/productDetailParts/ProductProviderLink";
import MainEventSlider from "../main/MainEventSlider";

function ProductDetailInfo() {
  return (
    <>
      <MainEventSlider />
      <ProductProviderLink />
      <ProductDetailVendorInfo />
    </>
  );
}

export default ProductDetailInfo;
