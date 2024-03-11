import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useTranslation} from "react-i18next";
import {Action} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import TextInput from "@/components/inputs/TextInput.tsx";
import BaseButton from "@/components/buttos/BaseButton.tsx";
import {ActionItemStyles, ActionRowStyles, StyledSVG} from "@/styles/GlobalStyles.ts";
import close from "@/assets/icons/close-svgrepo-com.svg";
import {CLOSE_REGISTER, OPEN_LOGIN, OPEN_REGISTER} from "@/store/reducers/modalReducer.ts";
import PasswordInput from "@/components/inputs/PasswordInput.tsx";
import {TitleT2} from "@/styles/components/texts/Titles.ts";
import {register} from "@/store/slices/auth/registerSlice.ts";

const UserRegister = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    // @ts-ignore
    const {registerIsOpen} = useSelector(state => state.modal);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required(t('validation_required_text')),
            email: Yup.string().email(t('validation_invalid_email_text')).required(t('validation_required_text')),
            password: Yup.string().min(6, t('validation_invalid_password_text')).required(t('validation_required_text')),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], t('validation_passwords_not_match'))
                .required(t('validation_required_text')),
        }),
        onSubmit: (values) => {
            dispatch(register({ email: values.email, password: values.password }));
        },
    });

    const handleRegisterPopup = () => {
        registerIsOpen ? dispatch({type: CLOSE_REGISTER}) : dispatch({type: OPEN_REGISTER})
    }
    const openLogin = () => {
        dispatch({type: CLOSE_REGISTER})
        dispatch({type: OPEN_LOGIN})
    }

    return (
        <>
            <TitleT2>{t('auth_login_title')}</TitleT2>
            <form onSubmit={formik.handleSubmit}>
                <TextInput id='username'
                           label={t('base_user_name')}
                           name="username"
                           formik={formik}
                           type="text"
                           formikSelector='username'/>

                <TextInput id='email'
                           label={t('base_user_email')}
                           name="email"
                           formik={formik}
                           type="email"
                           formikSelector='email'/>

                <PasswordInput id='password'
                               label={t('base_user_password')}
                               name="password"
                               formik={formik}
                               type="password"
                               formikSelector='password'/>

                <PasswordInput id='confirmPassword'
                               label={t('auth_retype_password')}
                               name="confirmPassword"
                               formik={formik}
                               type="password"
                               formikSelector='confirmPassword'/>

                <ActionRowStyles>
                    <ActionItemStyles>
                        <BaseButton type='submit' btnType='primary'>{t('register_text')}</BaseButton>
                    </ActionItemStyles>
                    <ActionItemStyles>
                        <BaseButton type='button' btnType='secondary' onClick={openLogin}>{t('login_text')}</BaseButton>
                    </ActionItemStyles>
                </ActionRowStyles>
                <BaseButton type='button' btnType='close' onClick={handleRegisterPopup}>
                    <StyledSVG className='close' src={close}/>
                </BaseButton>
            </form>

        </>
    );
};

export default UserRegister;
