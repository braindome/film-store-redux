import React from "react";
import "./styles.css"
import { useDispatch } from "react-redux";
import { actions } from "../features/filmReducer";

const CartItem = ({film}) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(actions.removeFromCart(film));
  }

  return (
    <div className="cart_item">
      <img
        src={film.Poster}
        alt=""
      />
      <h4>{film.Title}</h4>
      <h4>59 kr</h4>
      <button className="remove_btn" onClick={handleRemoveFromCart} >-</button>
    </div>
  );
};

export default CartItem;
