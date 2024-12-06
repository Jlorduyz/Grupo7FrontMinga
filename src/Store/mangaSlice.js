import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [], 
    filter: 'All', 
};

const mangaSlice = createSlice({
    name: 'mangas',
    initialState,
    reducers: {
        setMangas: (state, action) => {
            state.list = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setMangas, setFilter } = mangaSlice.actions;

export default mangaSlice.reducer;
