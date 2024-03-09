import {useReducer} from "react";
import {ModalDialog} from "./ModalDialog";
import UserRegister from "./forms/UserRegister.tsx";
import BaseButton from "./buttos/BaseButton.tsx";
import {CLOSE_LOGIN, CLOSE_REGISTER, modalReducer, OPEN_LOGIN, OPEN_REGISTER} from "@/reducers/modalReducer.ts";
import UserLogin from "@/components/forms/UserLogin.tsx";
import {useTranslation} from "react-i18next";

const Navigation = () => {
    const initialState = {registerIsOpen: false, loginIsOpen: false};
    const [state, dispatch] = useReducer(modalReducer, initialState);
    const { t } = useTranslation();

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
            <button onClick={handleLoginPopup}>{t('login_text')}</button>
            <button onClick={handleRegisterPopup}>{t('register_text')}</button>
            <button onClick={navigateToCompanies}>{t('for_companies_text')}</button>
            <ModalDialog isOpen={state.loginIsOpen} onRequestClose={handleLoginPopup}>
                <div>
                    <UserLogin/>
                    <button onClick={handleLoginPopup}>Close</button>
                    <BaseButton type='primary' onClick={handleLoginPopup}>{t('login_text')}</BaseButton>
                    <BaseButton type='secondary' onClick={handleLoginPopup}>{t('register_text')}</BaseButton>
                </div>
            </ModalDialog>
            <ModalDialog isOpen={state.registerIsOpen} onRequestClose={handleRegisterPopup}>
                <div>
                    <UserRegister/>
                    <button onClick={handleRegisterPopup}>{t('close_text')}</button>
                    <BaseButton type='primary' onClick={handleRegisterPopup}>asdasd</BaseButton>
                    <BaseButton type='secondary' onClick={handleRegisterPopup}>asdasd</BaseButton>
                </div>
            </ModalDialog>
        </div>
    );
};

export default Navigation;