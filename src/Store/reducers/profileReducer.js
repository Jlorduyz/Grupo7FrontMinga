// src/Store/reducers/profileReducer.js

import { createReducer } from "@reduxjs/toolkit";
import { updateProfile, deleteAccount } from "../actions/profileActions";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const profileReducer = createReducer(initialState, (builder) => {
  builder
    // Actualizar Perfil
    .addCase(updateProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user; // Asumiendo que la respuesta contiene el objeto 'user'
      state.error = null;
    })
    .addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // Eliminar Cuenta
    .addCase(deleteAccount.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    })
    .addCase(deleteAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default profileReducer;
