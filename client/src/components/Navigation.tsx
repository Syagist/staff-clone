    import {useTranslation} from "react-i18next";
    import {useDispatch, useSelector} from "react-redux";
    import {ThunkDispatch} from "redux-thunk";
    import {Action} from "redux";
    import {CLOSE_LOGIN, CLOSE_REGISTER, OPEN_LOGIN, OPEN_REGISTER} from "@/store/reducers/modalReducer.ts";

    const Navigation = () => {
        const {t} = useTranslation();
        const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
        // @ts-ignore
        const { loginIsOpen, registerIsOpen } = useSelector(state => state.modal);

        const handleLoginPopup = () => {
            loginIsOpen ? dispatch({type: CLOSE_LOGIN}) : dispatch({type: OPEN_LOGIN})
        }

        const handleRegisterPopup = () => {
            registerIsOpen ? dispatch({type: CLOSE_REGISTER}) : dispatch({type: OPEN_REGISTER})
        }

        const navigateToCompanies = () => {

        }

        return (
            <div>
                <button onClick={handleLoginPopup}>{t('login_text')}</button>
                <button onClick={handleRegisterPopup}>{t('register_text')}</button>
                <button onClick={navigateToCompanies}>{t('for_companies_text')}</button>
            </div>
        );
    };

    export default Navigation;