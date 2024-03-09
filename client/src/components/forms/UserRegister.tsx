import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useTranslation} from "react-i18next";

const UserRegister = () => {
    const { t } = useTranslation();

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
            // Handle form submission logic here
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                    <div>{formik.errors.username}</div>
                )}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                )}
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div>{formik.errors.confirmPassword}</div>
                )}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default UserRegister;
