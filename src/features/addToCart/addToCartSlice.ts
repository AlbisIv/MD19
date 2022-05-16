import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { Item, getItem, getItems } from '../../data/ItemData';

export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState: {
    cartItems: [] as Item[],
  },
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.cartItems.find((a) => a.id === action.payload.id);
      if (findItem) {
        findItem.count += action.payload.count;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }

      console.log(state.cartItems);
    },
    decrement: (state, action) => {
      console.log(state.cartItems);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, decrement } = addToCartSlice.actions;
export const selectvalue = (state: RootState) => state.addToCart.cartItems;
export default addToCartSlice.reducer;
