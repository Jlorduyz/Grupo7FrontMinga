import { createReducer } from "@reduxjs/toolkit";
import { updateProfile, deleteAccount } from "../actions/profileActions";

const initialState = {
    user: {
        firstName: "Lucas Ezequiel",
        lastName: "Silva",
        city: "Caseros, Buenos Aires",
        birthDate: "28/12/2022",
        profileImage: "https://via.placeholder.com/150",
    },
    isAccountDeleted: false, // Estado para verificar si la cuenta fue eliminada
};

const profileReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateProfile, (state, action) => {
            // Actualiza los datos del usuario
            state.user = { ...state.user, ...action.payload };
        })
        .addCase(deleteAccount, (state) => {
            // Elimina la cuenta (resetea el estado del usuario)
            state.user = null;
            state.isAccountDeleted = true;
        });
});

export default profileReducer;
