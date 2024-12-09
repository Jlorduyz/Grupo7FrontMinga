import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAuthors = createAsyncThunk(
    "author/fetchAuthors",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return rejectWithValue("No se encontró el token de autenticación.");
            }

            const response = await axios.get("http://localhost:8080/api/authors/all", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                maxBodyLength: Infinity
            });

            return response.data.response;
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message || "Error al obtener los autores.");
            }
        }
    }
);

/**
 * @param {string} authorId 
 * @param {boolean} active
 */
export const updateAuthorActive = createAsyncThunk(
    "author/updateAuthorActive",
    async ({ authorId, active }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return rejectWithValue("No se encontró el token de autenticación.");
            }

            const response = await axios.put(`http://localhost:8080/api/authors/update/${authorId}`, {
                active: !active 
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.data.response;
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message || "Error al actualizar el autor.");
            }
        }
    }
);
