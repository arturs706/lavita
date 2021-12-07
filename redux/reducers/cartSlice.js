import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        const itemExists = state.find((item) => item.id === action.payload.id);
        if (itemExists) {
          itemExists.quantity++;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
      },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer