// src/axiosConfig.js

import axios from "axios";
import store from "../Store/Store"; // Asegúrate de que la ruta sea correcta

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// Interceptor para añadir el token a cada solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.authStore.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
