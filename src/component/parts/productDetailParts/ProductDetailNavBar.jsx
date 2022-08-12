import React from "react";

function ProductDetailNavBar() {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
      }}
    >
      <div>
        <span className="material-icons-outlined">favorite</span>
      </div>
      <div>
        <button style={{ backgroundcolor: "#ff3e3e" }}>
          <span>구매하기</span>
        </button>
      </div>
    </div>
  );
}

export default ProductDetailNavBar;
