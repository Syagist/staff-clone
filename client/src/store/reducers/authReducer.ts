
const initialState = {
    user: null,
};

const authReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            debugger
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;