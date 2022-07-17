import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import itemsReducer from '../features/items/itemsSlice';
import uiReducer from '../features/ui/uiSlice';
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/orders/orderSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
    ui: uiReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});
