import { createSlice } from '@reduxjs/toolkit'

const initialState = [];
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            let existed_item = state.find(item => item.id === payload.id)
            if (existed_item) {
                return state.map((item) =>
                    item.id === payload.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }
            else {
                state.push({
                    ...payload,
                    quantity: 1
                })
            }
        },
        subtractQuantity: (state, { payload }) => {
            return state.map((item) =>
                item.id === payload.id
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            );
        },

        addQuantity: (state, { payload }) => {
            return state.map((item) =>
                item.id === payload.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            );
        },
        clear(state) {
            return [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, subtractQuantity, addQuantity, clear } = cartSlice.actions

const { createSelector } = require("@reduxjs/toolkit");
const cartSelector = (state) => state.cart;
export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
    cart.reduce(
        (total, current) => (total += current.price * current.quantity),
        0
    )
);

export default cartSlice.reducer