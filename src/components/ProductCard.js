import React, { useState } from "react";

const ProductCard = ({ src, title, price }) => {
  const [active, setActive] = useState({
    isActive: "color1",
  });
  const onClick = (name) => {
    setActive({ isActive: name });
  };
  return (
    <div className="productCard-01">
      <img src={src} alt="" className="productImage" />
      <div className="productTitle">{title}</div>
      <div className="subDescContainer">
        <span className="price">{price}</span>
        <div className="colorButtonContainer">
          <span className={active.isActive === "color1" ? "isActive" : ""}>
            <button
              className={`color1 ${
                active.isActive === "color1" ? "active" : ""
              }`}
              onClick={() => onClick("color1")}
            ></button>
          </span>
          <span className={active.isActive === "color2" ? "isActive" : ""}>
            <button
              className={`color2 ${
                active.isActive === "color2" ? "active" : ""
              }`}
              onClick={() => onClick("color2")}
            ></button>
          </span>
          <span className={active.isActive === "color3" ? "isActive" : ""}>
            <button
              className={`color3 ${
                active.isActive === "color3" ? "active" : ""
              }`}
              onClick={() => onClick("color3")}
            ></button>
          </span>
          <span className={active.isActive === "color4" ? "isActive" : ""}>
            <button
              className={`color4 ${
                active.isActive === "color4" ? "active" : ""
              }`}
              onClick={() => onClick("color4")}
            ></button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
