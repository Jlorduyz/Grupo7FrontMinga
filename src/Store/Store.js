import { configureStore } from "@reduxjs/toolkit";

import managerReducer from "./reducers/managerReducer";
import { mangaReducer } from "./reducers/mangaReducer";
import editChapterReducer from "./reducers/editChapterReducer";
import entitiesReducer from "./entitiesSlice";
import authReducer from "./reducers/authReducer";
import categoryReducer from "./actions/carrouselSlice";
import mangaSliceReducer from "./actions/mangaSlice";
import categoriesReducer from "./actions/carrouselSlice";
import newRoleReducer from "./reducers/newRoleReducer";
import profileReducer from "./reducers/profileReducer";
import favouritesReducer from "./reducers/favouritesReducer";

const store = configureStore({
    reducer: {
        manager: managerReducer,
        mangas: mangaReducer,
        editChapter: editChapterReducer,
        entities: entitiesReducer,
        authStore: authReducer,
        categoryStore: categoryReducer,
        mangaStore: mangaSliceReducer,
        categories: categoriesReducer,
        newRole: newRoleReducer,
        profile: profileReducer,
        favourites: favouritesReducer,
    },

});

export default store;
