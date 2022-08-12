import React from "react";

function ProductProviderLink() {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "50%",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "14px" }}>신세계몰</p>
      </div>

      <div
        style={{ display: "inline-block", width: "50%", textAlign: "right" }}
      >
        <span>
          <img src="https://sui.ssgcdn.com/ui/m_ssg/img/product/svg/ic_share24.svg" />
        </span>
      </div>
    </div>
  );
}

export default ProductProviderLink;
