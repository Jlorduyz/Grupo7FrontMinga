import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMangas = createAsyncThunk(
  'manga/fetchMangas',
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/mangas/all");
      console.log("Fetched Mangas:", response.data); // Verifica los datos
      return response.data;
    } catch (error) {
      console.log("Error fetching mangas", error);
      throw error;
    }
  }
);

const initialState = {
  mangas: [],
  search: "",
  isLoading: false,
  error: null,
  filter: "All", // Por defecto muestra todos los mangas
};

export const mangaReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMangas.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchMangas.fulfilled, (state, action) => {
      console.log("Fetched Mangas:", action.payload.response); // Verifica los datos
      state.mangas = action.payload.response;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(fetchMangas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase("manga/setFilter", (state, action) => {
      console.log("Filter set to:", action.payload); // Log para verificar filtro
      state.filter = action.payload;
    })

    .addCase("manga/setSearch", (state, action) => {
      state.search = action.payload;
    });
});
