// src/CartItem.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-image" />
      <div className="cart-name">{item.name}</div>
      <div className="cart-cost">${item.cost}</div>
      <div className="cart-quantity">
        <button onClick={handleDecrease}>-</button>
        {item.quantity}
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
