import React from "react";
import {
    TextInputChildrenStyles, TextInputErrorStyles,
    TextInputLabelStyles,
    TextInputStyles,
    TextInputWrapperStyles
} from "@/styles/components/inputs/TextInputStyles.ts";

interface TextInputProps {
    type?: 'text' | 'password' | 'email';
    id: string;
    label: string;
    name: string;
    children?: React.ReactNode;
    formik: any;
    formikSelector: string;
}

const TextInput = ({type, id, label, name, children, formik, formikSelector}: TextInputProps) => {
    return (
        <TextInputWrapperStyles>
            <TextInputLabelStyles htmlFor={id}>{label}</TextInputLabelStyles>
            <TextInputChildrenStyles>
                <TextInputStyles
                    type={type}
                    id={id}
                    placeholder={label}
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[formikSelector]}
                />
                {children}
            </TextInputChildrenStyles>

            {formik.touched[formikSelector] && formik.errors[formikSelector] && (
                <TextInputErrorStyles>{formik.errors[formikSelector]}</TextInputErrorStyles>
            )}

        </TextInputWrapperStyles>
    );
};

export default TextInput;