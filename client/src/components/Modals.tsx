import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import {ModalDialog} from "@/components/ModalDialog.tsx";
import UserLogin from "@/components/forms/UserLogin.tsx";
import UserRegister from "@/components/forms/UserRegister.tsx";
import {CLOSE_LOGIN, CLOSE_REGISTER, OPEN_LOGIN, OPEN_REGISTER} from "@/store/reducers/modalReducer.ts";


const Modals = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    // @ts-ignore
    const {loginIsOpen, registerIsOpen} = useSelector(state => state.modal);


    const handleLoginPopup = () => {
        loginIsOpen ? dispatch({type: CLOSE_LOGIN}) : dispatch({type: OPEN_LOGIN})
    }

    const handleRegisterPopup = () => {
        registerIsOpen ? dispatch({type: CLOSE_REGISTER}) : dispatch({type: OPEN_REGISTER})
    }

    return (
        <div>
            <ModalDialog isOpen={loginIsOpen} onRequestClose={handleLoginPopup}>
                <UserLogin/>
            </ModalDialog>
            <ModalDialog isOpen={registerIsOpen} onRequestClose={handleRegisterPopup}>
                <UserRegister/>
            </ModalDialog>
        </div>
    );
};

export default Modals;