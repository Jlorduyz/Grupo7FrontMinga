// src/Store/actions/profileActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Acción asíncrona para actualizar el perfil del usuario
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const { user, token } = getState().authStore;
      const response = await axios.put(
        `http://localhost:8080/api/users/update/${user._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Asumiendo que el backend devuelve los datos actualizados del usuario
    } catch (error) {
      console.error("Error actualizando el perfil:", error);
      return rejectWithValue(
        error.response?.data?.message || "Error al actualizar el perfil."
      );
    }
  }
);

// Acción asíncrona para eliminar la cuenta del usuario
export const deleteAccount = createAsyncThunk(
  "profile/deleteAccount",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user, token } = getState().authStore;
      const response = await axios.delete(
        `http://localhost:8080/api/users/delete/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Asumiendo que el backend devuelve una confirmación
    } catch (error) {
      console.error("Error eliminando la cuenta:", error);
      return rejectWithValue(
        error.response?.data?.message || "Error al eliminar la cuenta."
      );
    }
  }
);
