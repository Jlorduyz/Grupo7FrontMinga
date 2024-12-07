import { createAction } from "@reduxjs/toolkit";

export const getMangas = createAction("GET_MANGAS");
export const setFilter = createAction("manga/setFilter"); //cambio
export const setSearch = createAction("manga/setSearch");