// modalReducer.js
export const OPEN_REGISTER = 'OPEN_REGISTER';
export const CLOSE_REGISTER = 'CLOSE_REGISTER';
export const OPEN_LOGIN = 'OPEN_LOGIN';
export const CLOSE_LOGIN = 'CLOSE_LOGIN';

export const initialState = {
    registerIsOpen: false,
    loginIsOpen: false,
};

export const modalReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case OPEN_REGISTER:
            return { ...state, registerIsOpen: true };
        case CLOSE_REGISTER:
            return { ...state, registerIsOpen: false };
        case OPEN_LOGIN:
            return { ...state, loginIsOpen: true };
        case CLOSE_LOGIN:
            return { ...state, loginIsOpen: false };
        default:
            return state;
    }
};
