import {
    SET_MANGA_LIST,
    SET_SELECTED_MANGA,
    SET_CHAPTER_LIST,
    SET_SELECTED_CHAPTER,
    SET_EDIT_DATA,
    SET_LOADING,
    SET_ERROR
} from "../actions/editChapterActions";

const initialState = {
    mangaList: [], 
    selectedManga: null, 
    chapterList: [], 
    selectedChapter: null, 
    editData: "", 
    isLoading: false,
    error: null
};

const editChapterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MANGA_LIST:
            return {
                ...state,
                mangaList: action.payload,
                error: null,
            };
        case SET_SELECTED_MANGA:
            return {
                ...state,
                selectedManga: action.payload,
                selectedChapter: null, 
                chapterList: [], 
                error: null,
            };
        case SET_CHAPTER_LIST:
            return {
                ...state,
                chapterList: action.payload,
                selectedChapter: null,
                error: null,
            };
        case SET_SELECTED_CHAPTER:
            return {
                ...state,
                selectedChapter: action.payload,
                editData: "", 
                error: null,
            };
        case SET_EDIT_DATA:
            return {
                ...state,
                editData: action.payload,
                error: null,
            };
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
        default:
            return state;
    }
};

export default editChapterReducer;
