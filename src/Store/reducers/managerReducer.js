import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "All", 
    data: [], 
};

const managerSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload; 
        },
        setData: (state, action) => {
            state.data = action.payload; 
        },
    },
});



export const { setFilter, setData } = managerSlice.actions;

export default managerSlice.reducer;
