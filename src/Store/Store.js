import { configureStore } from "@reduxjs/toolkit";

import managerReducer from "./reducers/managerReducer";
import {mangaReducer} from "./reducers/mangaReducer";
import editChapterReducer from "./reducers/editChapterReducer";
import entitiesReducer from "./entitiesSlice";
import authReducer from "./reducer/authReducer";
import categoryReducer from "./actions/carrouselSlice";
import mangaSliceReducer from "./actions/mangaSlice";

const store = configureStore({
    reducer: {
        manager: managerReducer,
        mangas: mangaReducer,
        editChapter: editChapterReducer,
        entities: entitiesReducer,
        authStore: authReducer,
        categoryStore: categoryReducer,
        mangaStore: mangaSliceReducer,
    },

});

export default store;
