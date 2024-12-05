import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUser = createAction("setUser",(data)=>{
    return{
        payload: data
    }
})

const logout = createAction("logout")



// const login = createAsyncThunk("login", async({email, password}) => {
//     console.log("entramos al login");
    
//     const credentials = {
//         email: email,
//         password: password
//     }
//     const response = await axios.post("https://grupo7backminga.onrender.com/api/auth/signIn", credentials)
//     console.log("se proceso la solicitud de login");
//     console.log(response.data);
    
    

//     return response.data
 
//     })

const login = createAsyncThunk("login", async({email, password}, thunkAPI) => {
    console.log("entramos al login");
    
    const credentials = {
        email: email,
        password: password
    }

    try {
        const response = await axios.post("https://grupo7backminga.onrender.com/api/auth/signIn", credentials)
        console.log(response.data);
        localStorage.setItem("token", response.data.token)
    
        return response.data
    } catch (error) {
        console.log("error en el login", error);
        return thunkAPI.rejectWithValue(error.response?.data || "Error en el login")
        
    }

    
})


export {login, setUser, logout}
