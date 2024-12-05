import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./mangaSlice";
import managerReducer from "./managerSlice";
import editChapterReducer from "./editChapterSlice";
import entitiesReducer from "./entitiesSlice";


const store = configureStore({
    reducer: {
        mangas: mangaReducer,
        manager: managerReducer,
        editChapter: editChapterReducer,
        entities: entitiesReducer,

    },
});

export default store;
