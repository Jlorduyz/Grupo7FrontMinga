// src/Store/actions/mangaActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const setFilter = createAction("manga/setFilter");
export const setSearch = createAction("manga/setSearch");


/**
 * Acción para eliminar un manga.
 * @param {string} mangaId - ID del manga a eliminar.
 */
export const deleteManga = createAsyncThunk(
    "mangas/deleteManga",
    async (mangaId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return rejectWithValue("No se encontró el token de autenticación.");
            }

            const response = await axios.delete(`http://localhost:8080/api/mangas/delete/${mangaId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.data.response; // Asumiendo que la API devuelve el manga eliminado
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message || "Error al eliminar el manga.");
            }
        }
    }
);
