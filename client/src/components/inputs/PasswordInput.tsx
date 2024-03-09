import {useState} from "react";
import TextInput from "@/components/inputs/TextInput.tsx";
import eyeOff from "@/assets/icons/eye-off-svgrepo-com.svg";
import eye from "@/assets/icons/eye-svgrepo-com.svg";
import {StyledSVG} from "@/styles/GlobalStyles.ts";
import BaseButton from "@/components/buttos/BaseButton.tsx";

interface TextInputProps {
    type?: 'text' | 'password';
    id: string;
    label: string;
    name: string;
    formik: any;
    formikSelector: string;
}

const PasswordInput = ({type, id, label, name, formik, formikSelector}: TextInputProps) => {
    const [passwordType, setPasswordType] = useState(type)

    const togglePassword = () => {
        setPasswordType((prevState) => {
            return prevState === 'password' ? 'text' : 'password'
        });
    }

    return (
        <TextInput id={id} label={label} name={name} formik={formik} type={passwordType}
                   formikSelector={formikSelector}>
            <BaseButton type='input-password' onClick={togglePassword}>
                {passwordType === 'password' ?
                    <StyledSVG className='password-icon' src={eyeOff} /> :
                    <StyledSVG className='password-icon' src={eye} />
                }
            </BaseButton>

        </TextInput>
    );
};

export default PasswordInput;