import { createSlice} from '@reduxjs/toolkit';


const mangaSlice = createSlice({
    name: 'mangas',
    initialState: {
      mangas: {},
    },
    reducers: {
      setMangas: (state, action) => {
        state.mangas = action.payload;
      },
    },
  });

  export const { setMangas } = mangaSlice.actions;
  export default mangaSlice.reducer;