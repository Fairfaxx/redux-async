import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../reducers/ui-reducer';
import cartSlice from '../reducers/cart-reducer';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer}
});

export default store;