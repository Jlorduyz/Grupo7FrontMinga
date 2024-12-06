const initialState = {
    mangaList: [], 
    selectedManga: null, 
    chapterList: [], 
    selectedChapter: null, 
    editData: "", 
};

const editChapterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "editChapter/setMangaList":
            return {
                ...state,
                mangaList: action.payload,
            };
        case "editChapter/setSelectedManga":
            return {
                ...state,
                selectedManga: action.payload,
            };
        case "editChapter/setChapterList":
            return {
                ...state,
                chapterList: action.payload,
            };
        case "editChapter/setSelectedChapter":
            return {
                ...state,
                selectedChapter: action.payload,
            };
        case "editChapter/setEditData":
            return {
                ...state,
                editData: action.payload,
            };
        default:
            return state;
    }
};

export default editChapterReducer;
