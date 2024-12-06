import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import categoryReducer from "./actions/carrouselSlice"; 
import mangaReducer from "./actions/mangaSlice";

const store = configureStore({
  reducer: {
    authStore: authReducer,
    categoryStore: categoryReducer, 
    mangaStore: mangaReducer,
  },
});

export default store;
