import { configureStore } from "@reduxjs/toolkit";
import managerReducer from "./reducers/managerReducer";
import mangaReducer from "./reducers/mangaReducer";
import editChapterReducer from "./reducers/editChapterReducer";
import entitiesReducer from "./entitiesSlice";

const store = configureStore({
    reducer: {
        manager: managerReducer,
        mangas: mangaReducer,
        editChapter: editChapterReducer,
        entities: entitiesReducer,
    },
});

export default store;
