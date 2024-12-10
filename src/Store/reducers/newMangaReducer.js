import { SET_LOADING, SET_ERROR, CREATE_MANGA_SUCCESS } from "../actions/newMangaActions";

const initialState = {
    isLoading: false,
    error: null,
    manga: null, // Para almacenar el manga recién creado
};

const newMangaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case CREATE_MANGA_SUCCESS:
            return {
                ...state,
                manga: action.payload,
                error: null,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default newMangaReducer;
