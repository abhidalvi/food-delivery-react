const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    signInDrawerVisible: false,
    cartDrawerVisible: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSignIn(state) {
            state.signInDrawerVisible = !state.signInDrawerVisible;
        },
        toggleCart(state) {
            state.cartDrawerVisible = !state.cartDrawerVisible;
        },
    }
});

const uiReducer = uiSlice.reducer;

export const { toggleSignIn, toggleCart } = uiSlice.actions;

export default uiReducer;