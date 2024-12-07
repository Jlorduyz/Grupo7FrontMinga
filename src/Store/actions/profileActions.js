import { createAction } from "@reduxjs/toolkit";

// Acción para actualizar el perfil
export const updateProfile = createAction("profile/updateProfile");

// Acción para eliminar la cuenta
export const deleteAccount = createAction("profile/deleteAccount");
