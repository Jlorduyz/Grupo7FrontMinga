import { configureStore } from '@reduxjs/toolkit'
import categorySlice from "./actions/carrouselSlice.js"
import { mangaSlice } from './actions/mangaSlice.js';

const store = configureStore({
    reducer: {
      categories: categorySlice.reducer,
      mangas: mangaSlice.reducer,
    },
  });

  export default store;