import {
    FETCH_FAVOURITES_REQUEST,
    FETCH_FAVOURITES_SUCCESS,
    FETCH_FAVOURITES_FAILURE,
} from "../actions/favouritesActions";

const initialState = {
    favourites: [],
    isLoading: false,
    error: null,
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FAVOURITES_REQUEST:
            return { ...state, isLoading: true, error: null };
        case FETCH_FAVOURITES_SUCCESS:
            return { ...state, isLoading: false, favourites: action.payload };
        case FETCH_FAVOURITES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

// Exportación por defecto
export default favouritesReducer;
