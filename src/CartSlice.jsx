// src/CartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [] // mảng lưu các sản phẩm trong cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Xóa sản phẩm khỏi giỏ
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Cập nhật số lượng sản phẩm
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

// Export các action để dùng trong component
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer mặc định để cấu hình store
export default cartSlice.reducer;
