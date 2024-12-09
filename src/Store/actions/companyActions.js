import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCompanies = createAsyncThunk(
    "company/fetchCompanies",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return rejectWithValue("No se encontró el token de autenticación.");
            }

            const response = await axios.get("http://localhost:8080/api/companies/all", {
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
                return rejectWithValue(error.message || "Error al obtener las compañías.");
            }
        }
    }
);

/**
 * @param {string} companyId 
 * @param {boolean} active 
 */
export const updateCompanyActive = createAsyncThunk(
    "company/updateCompanyActive",
    async ({ companyId, active }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return rejectWithValue("No se encontró el token de autenticación.");
            }

            const response = await axios.put(`http://localhost:8080/api/companies/update/${companyId}`, {
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
                return rejectWithValue(error.message || "Error al actualizar la compañía.");
            }
        }
    }
);
