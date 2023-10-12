import React from "react";
import "./styles.css"

const CartItem = ({film}) => {
  return (
    <div className="cart_item">
      <img
        src={film.Poster}
        alt=""
      />
      <h4>{film.Title}</h4>
      <h4>59 kr</h4>
    </div>
  );
};

export default CartItem;
