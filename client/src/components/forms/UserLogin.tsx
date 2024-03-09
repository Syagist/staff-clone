import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useTranslation} from "react-i18next";
import TextInput from "@/components/inputs/TextInput.tsx";
import PasswordInput from "@/components/inputs/PasswordInput.tsx";

const UserLogin = () => {
    const {t} = useTranslation();

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
            // Handle form submission logic here
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextInput id='email' label='Email' name="email" formik={formik} type="text" formikSelector='email'/>
            <PasswordInput id='password' label='Password' name="password" formik={formik} type="password"
                           formikSelector='password'/>
            <button type="submit">Login</button>
        </form>
    );
};

export default UserLogin;
