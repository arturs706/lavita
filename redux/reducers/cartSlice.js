import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        const itemExists = state.find((item) => item.id === action.payload);
        if (itemExists) {
          itemExists.quantity++;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
      },
      incrementQuantity: (state, action) => {
        const item = state.find((item) => item.id === action.payload);
        item.quantity++;
      },
      decrementQuantity: (state, action) => {
        const item = state.find((item) => item.id === action.payload);
        if (item.quantity === 1) {
          const index = state.findIndex((item) => item.id === action.payload);
          state.splice(index, 1);
        } else {
          item.quantity--;
        }
      },
      removeFromCart: (state, action) => {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrementQuantity, incrementByAmount, removeFromCart } = counterSlice.actions

export default counterSlice.reducer