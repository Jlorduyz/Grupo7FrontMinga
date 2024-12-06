import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: [
        { id: 1, name: "Blue Team", url: "www.blueteam.com", authorImage: "/images/blue.jpg", selected: false },
        { id: 2, name: "Red Team", url: "www.redteam.com", authorImage: "/images/red.jpg", selected: false },
        { id: 3, name: "Orange Team", url: "www.orangeteam.com", authorImage: "/images/orange.jpg", selected: false },
        { id: 4, name: "Purple Team", url: "www.purpleteam.com", authorImage: "/images/purple.jpg", selected: false },
    ],
};

const entitiesSlice = createSlice({
    name: "entities",
    initialState,
    reducers: {
        toggleSelection: (state, action) => {
            const entity = state.entities.find((e) => e.id === action.payload);
            if (entity) {
                entity.selected = !entity.selected;
            }
        },
    },
});

export const { toggleSelection } = entitiesSlice.actions;
export default entitiesSlice.reducer;
