import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Aquí definimos fetchMangas como una acción asíncrona con createAsyncThunk
export const fetchMangas = createAsyncThunk(
  'manga/fetchMangas', // Nombre de la acción
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/mangas/all");
      return response.data; // Esto será la carga útil (payload) de la acción fulfilled
    } catch (error) {
      console.log("error fetching mangas", error);
      // Si lanzamos error, será capturado en fetchMangas.rejected
      throw error;
    }
  }
);

const initialState = {
  mangas: [], // Lista de mangas
  search: "",
  isLoading: false,
  error: null,
  filter: "All", // Filtro activo
};

export const mangaReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMangas.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchMangas.fulfilled, (state, action) => {
      state.mangas = action.payload.response;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(fetchMangas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    .addCase("manga/setFilter", (state, action) => {
      state.filter = action.payload;
    })
    .addCase("manga/setSearch", (state, action) => {
      state.search = action.payload;
    });
});
