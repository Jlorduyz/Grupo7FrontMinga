import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manga: null, 
};

const detailsMangaSlice = createSlice({
    name: "detailsManga",
    initialState,
    reducers: {
        setMangaDetails: (state, action) => {
            state.manga = action?.payload; 
        },
    },
});

export const { setMangaDetails } = detailsMangaSlice.actions;

export default detailsMangaSlice.reducer;
