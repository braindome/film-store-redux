import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.film.cart) ;
  const userEmail = useSelector((state) => state.user.email);

  console.log("items in cart: " + cartItems.length);

  return (
    <div className="cart_wrapper">
      <h2>Cart</h2>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((film, index) => (
          <CartItem key={index} film={film} />
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
      <div>
        <h3> {userEmail} </h3>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
