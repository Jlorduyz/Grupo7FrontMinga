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
        console.log("the login was executed correctly");
        console.log(action);

        state.loading = false,
            state.error = false,
            state.user = action.payload.user,
            state.token = action.payload.token
    })
        .addCase(login.pending, (state, action) => {
            console.log("the sign in started ");

            state.loading = true,
                state.error = false,
                state.user = null,
                state.token = null
        })
        .addCase(login.rejected, (state, action) => {
            console.log("sign in error");

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
            localStorage.removeItem("user")
        })
})

export default authReducer