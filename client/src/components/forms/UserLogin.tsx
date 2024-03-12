import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import TextInput from "@/components/inputs/TextInput.tsx";
import PasswordInput from "@/components/inputs/PasswordInput.tsx";
import BaseButton from "@/components/buttos/BaseButton.tsx";
import {CLOSE_LOGIN, OPEN_LOGIN, OPEN_REGISTER} from "@/store/reducers/modalReducer.ts";
import {ActionItemStyles, ActionRowStyles, StyledSVG} from "@/styles/GlobalStyles.ts";
import close from "@/assets/icons/close-svgrepo-com.svg";
import {login} from "@/store/slices/auth/loginSlice.ts";

const UserLogin = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

    // @ts-ignore
    const {loginIsOpen} = useSelector(state => state.modal);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().email(t('validation_invalid_email_text')).required(t('validation_required_text')),
            password: Yup.string().min(6, t('validation_invalid_password_text')).required(t('validation_required_text')),
        }),

        onSubmit: (values) => {
            dispatch(login({ email: values.email, password: values.password }));

        },
    });

    const handleClose = () => {
        loginIsOpen ? dispatch({type: CLOSE_LOGIN}) : dispatch({type: OPEN_LOGIN})
    }
    const openRegister = () => {
        dispatch({type: CLOSE_LOGIN})
        dispatch({type: OPEN_REGISTER})
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextInput id='email' label='Email' name="email" formik={formik} type="text" formikSelector='email'/>
            <PasswordInput id='password' label='Password' name="password" formik={formik} type="password"
                           formikSelector='password'/>

            <ActionRowStyles>
                <ActionItemStyles>
                    <BaseButton type='submit' btnType='primary'>{t('login_text')}</BaseButton>
                </ActionItemStyles>
                <ActionItemStyles>
                    <BaseButton type='button' btnType='secondary' onClick={openRegister}>{t('register_text')}</BaseButton>
                </ActionItemStyles>
            </ActionRowStyles>


            <BaseButton type='button' btnType='close' onClick={handleClose}>
                <StyledSVG className='close' src={close} />
            </BaseButton>
        </form>
    );
};

export default UserLogin;
