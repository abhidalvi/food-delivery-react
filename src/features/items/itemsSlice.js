import { SignalWifiStatusbarNullTwoTone } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allData: null,
    fruitData: null,
    fishData: null,
    chickenData: null,
    dessertsData: null,
};

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.allData = action.payload.allData;
            state.fruitData = action.payload.fruitData;
            state.fishData = action.payload.fishData;
            state.chickenData = action.payload.chickenData;
            state.dessertsData = action.payload.dessertsData;
        },
    },
});

export const { setItems } = itemsSlice.actions;

export const selectAllData = (state) => state.items.allData;
export const selectFruitData = (state) => state.items.fruitData;
export const selectFishData = (state) => state.items.fishData;
export const selectChickenData = (state) => state.items.chickenData;
export const selectDessertsData = (state) => state.items.dessertsData;

export default itemsSlice.reducer;