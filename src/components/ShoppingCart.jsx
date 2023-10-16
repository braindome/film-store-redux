import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const userEmail = useSelector((state) => state.user.email);

  console.log("email " + userEmail);

  return (
    <div className="cart_wrapper">
      <h2>Cart</h2>
      {cartItems.map((film, index) => (
        <CartItem key={index} film={film} />
      ))}
      <div>
        <h3> {userEmail} </h3>
        <button >Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
