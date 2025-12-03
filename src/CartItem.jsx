import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  const handleQuantityChange = (amount) => {
    if (item.quantity + amount > 0) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity + amount }));
    }
  };

  return (
    <div className="cart-card">
      <img src={item.image} alt={item.name} className="cart-image" />
      <div>{item.name}</div>
      <div>${item.cost} x {item.quantity} = ${item.cost * item.quantity}</div>
      <button onClick={() => handleQuantityChange(1)}>+</button>
      <button onClick={() => handleQuantityChange(-1)}>-</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
