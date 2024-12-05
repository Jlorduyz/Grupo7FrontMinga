import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mangaList: [], // Lista de mangas disponibles
    selectedManga: null, // Manga seleccionado
    chapterList: [], // Lista de capítulos disponibles
    selectedChapter: null, // Capítulo seleccionado
    editData: "", // Contenido editable
};

const editChapterSlice = createSlice({
    name: "editChapter",
    initialState,
    reducers: {
        setMangaList: (state, action) => {
            state.mangaList = action.payload;
        },
        setSelectedManga: (state, action) => {
            state.selectedManga = action.payload;
        },
        setChapterList: (state, action) => {
            state.chapterList = action.payload;
        },
        setSelectedChapter: (state, action) => {
            state.selectedChapter = action.payload;
        },
        setEditData: (state, action) => {
            state.editData = action.payload;
        },
    },
});

export const {
    setMangaList,
    setSelectedManga,
    setChapterList,
    setSelectedChapter,
    setEditData,
} = editChapterSlice.actions;

export default editChapterSlice.reducer;
