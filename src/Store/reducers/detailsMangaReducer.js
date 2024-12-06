import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manga: null, // Información del manga actual
};

const detailsMangaSlice = createSlice({
    name: "detailsManga",
    initialState,
    reducers: {
        setMangaDetails: (state, action) => {
            state.manga = action.payload; // Actualiza el manga actual
        },
    },
});

export const { setMangaDetails } = detailsMangaSlice.actions;

export default detailsMangaSlice.reducer;
