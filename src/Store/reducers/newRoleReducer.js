const initialState = {
    selectedRole: null, // Almacena el rol seleccionado (Author o Company)
};

const newRoleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "newRole/selectRole":
            return {
                ...state,
                selectedRole: action.payload,
            };
        default:
            return state;
    }
};

export default newRoleReducer;