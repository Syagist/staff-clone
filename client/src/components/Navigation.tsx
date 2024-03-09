import {useReducer} from "react";
import {ModalDialog} from "./ModalDialog";
import UserRegister from "./forms/UserRegister.tsx";
import BaseButton from "./buttos/BaseButton.tsx";
import {CLOSE_LOGIN, CLOSE_REGISTER, modalReducer, OPEN_LOGIN, OPEN_REGISTER} from "@/reducers/modalReducer.ts";
import UserLogin from "@/components/forms/UserLogin.tsx";

const Navigation = () => {
    const initialState = {registerIsOpen: false, loginIsOpen: false};
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const handleLoginPopup = () => {
        state.loginIsOpen ? dispatch({type: CLOSE_LOGIN}) : dispatch({type: OPEN_LOGIN})
    }

    const handleRegisterPopup = () => {
        state.registerIsOpen ? dispatch({type: CLOSE_REGISTER}) : dispatch({type: OPEN_REGISTER})
    }

    const navigateToCompanies = () => {

    }

    return (
        <div>
            <button onClick={handleLoginPopup}>login</button>
            <button onClick={handleRegisterPopup}>register</button>
            <button onClick={navigateToCompanies}>For companies</button>
            <ModalDialog isOpen={state.loginIsOpen} onRequestClose={handleLoginPopup}>
                <div>
                    <UserLogin/>
                    <button onClick={handleLoginPopup}>Close</button>
                    <BaseButton type='primary' onClick={handleLoginPopup}>asdasd</BaseButton>
                    <BaseButton type='secondary' onClick={handleLoginPopup}>asdasd</BaseButton>
                </div>
            </ModalDialog>
            <ModalDialog isOpen={state.registerIsOpen} onRequestClose={handleRegisterPopup}>
                <div>
                    <UserRegister/>
                    <button onClick={handleRegisterPopup}>Close</button>
                    <BaseButton type='primary' onClick={handleRegisterPopup}>asdasd</BaseButton>
                    <BaseButton type='secondary' onClick={handleRegisterPopup}>asdasd</BaseButton>
                </div>
            </ModalDialog>
        </div>
    );
};

export default Navigation;