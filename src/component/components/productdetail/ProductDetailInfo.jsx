import React from "react";
import MainImgBanner from "../../parts/mainParts/MainImgBanner";
import ProductDetailNavBar from "../../parts/productDetailParts/ProductDetailNavBar";
import ProductDetailPriceInfo from "../../parts/productDetailParts/ProductDetailPriceInfo";
import ProductDetailVendorInfo from "../../parts/productDetailParts/ProductDetailVendorInfo";
import ProductProviderLink from "../../parts/productDetailParts/ProductProviderLink";
import MainEventSlider from "../main/MainEventSlider";

function ProductDetailInfo() {
  return (
    <>
      <MainEventSlider />
      <ProductProviderLink />
      <ProductDetailVendorInfo />
      <MainImgBanner />
      <ProductDetailPriceInfo />
      <ProductDetailNavBar />
    </>
  );
}

export default ProductDetailInfo;
