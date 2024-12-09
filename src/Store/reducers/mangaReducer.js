import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMangas = createAsyncThunk(
  "manga/fetchMangas",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/mangas/all");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  mangas: [],
  search: "",
  isLoading: false,
  error: null,
  filter: "All",
};

export const mangaReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMangas.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchMangas.fulfilled, (state, action) => {
      console.log("Fetched Mangas from API:", action.payload.response); 
      state.mangas = action.payload.response;
      state.isLoading = false;
    })
    .addCase(fetchMangas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase("manga/setFilter", (state, action) => {
      console.log("Filter updated to:", action.payload); 
      state.filter = action.payload;
    })
    .addCase("manga/setSearch", (state, action) => {
      state.search = action.payload;
    });
});
