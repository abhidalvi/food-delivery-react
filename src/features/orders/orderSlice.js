import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: null,
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.orders = action.payload.orders;
        },
    },
});

export const { setOrder } = orderSlice.actions;


export const getOrders = (state) => state.orders.orders;
export default orderSlice.reducer;