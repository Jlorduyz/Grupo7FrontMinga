import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "All", // Filtro activo
    data: [], // Lista específica del Manager (si es diferente a los mangas generales)
};

const managerSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload; // Cambia el filtro
        },
        setData: (state, action) => {
            state.data = action.payload; // Actualiza los datos del Manager
        },
    },
});

export const { setFilter, setData } = managerSlice.actions;

export default managerSlice.reducer;
