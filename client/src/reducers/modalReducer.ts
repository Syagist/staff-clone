export const OPEN_REGISTER = 'OPEN_REGISTER'
export const CLOSE_REGISTER = 'CLOSE_REGISTER'
export const OPEN_LOGIN = 'OPEN_LOGIN'
export const CLOSE_LOGIN = 'CLOSE_LOGIN'


export const modalReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'OPEN_REGISTER':
            return { registerIsOpen: true};
        case 'CLOSE_REGISTER':
            return { registerIsOpen: false};
        case 'OPEN_LOGIN':
            return { loginIsOpen: true};
        case 'CLOSE_LOGIN':
            return { loginIsOpen: false};
        default:
            return state;
    }
};
