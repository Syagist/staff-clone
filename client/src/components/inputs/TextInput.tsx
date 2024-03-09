import React from "react";
import {TextInputStyles} from "@/styles/components/inputs/TextInputStyles.ts";

interface TextInputProps {
    type?: 'text' | 'password';
    id: string;
    label: string;
    name: string;
    children?: React.ReactNode;
    formik: any;
    formikSelector: string;
}

const TextInput = ({type, id, label, name, children, formik, formikSelector}: TextInputProps) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <TextInputStyles
                type={type}
                id={id}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[formikSelector]}
            />
            {formik.touched[formikSelector] && formik.errors[formikSelector] && (
                <div>{formik.errors[formikSelector]}</div>
            )}
            {children}
        </div>
    );
};

export default TextInput;