import React from "react";

function ProductDetailNavBar() {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        width: "100%",
        position: "fixed",
        backgroundColor: "grey",
      }}
    >
      <div>
        <p className="material-icons-outlined">favorite</p>
      </div>
      <div>
        <button style={{ backgroundcolor: "#ff3e3e" }}>
          <p>구매하기</p>
        </button>
      </div>
    </div>
  );
}

export default ProductDetailNavBar;
