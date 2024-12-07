import { createReducer } from "@reduxjs/toolkit";
import { login, setUser } from "../actions/AuthActions";


const initialState = {
    user: null,
    loading: false,
    error: null,
    token: null
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        console.log("se ejecuto correctamente el login");
        console.log(action);

        state.loading = false,
            state.error = false,
            state.user = action.payload.user,
            state.token = action.payload.token
    })
        .addCase(login.pending, (state, action) => {
            console.log("se inicio el sign in  ");

            state.loading = true,
                state.error = false,
                state.user = null,
                state.token = null
        })
        .addCase(login.rejected, (state, action) => {
            console.log("error en el sign in  ");

            state.loading = false,
                state.error = action.error.message,
                state.user = null,
                state.token = null
            localStorage.removeItem("token")
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        })
        .addCase("logout", (state, action) => {
            state.user = null
            state.token = null
            localStorage.removeItem("token")
        })
})

export default authReducer