import React from "react";
import {
    PrimaryButton,
    SecondaryButton,
    InputPassword,
    ClosePassword
} from "@/styles/components/buttons/BaseButtonStyles.ts";

interface BaseButtonProps {
    btnType?: 'primary' | 'secondary' | 'input-password'| 'close'
    type?: 'button' | 'submit'
    children: React.ReactNode;
    onClick?: () => void
}

const BaseButton = ({btnType, type,children, onClick}: BaseButtonProps) => {
    let button;

    switch (btnType) {
        case 'primary':
            button = <PrimaryButton type={type} onClick={onClick}>{children}</PrimaryButton>;
            break;
        case 'secondary':
            button = <SecondaryButton type={type} onClick={onClick}>{children}</SecondaryButton>;
            break;
        case 'input-password':
            button = <InputPassword  type='button' onClick={onClick}>{children}</InputPassword>;
            break;
        case 'close':
            button = <ClosePassword  type='button' onClick={onClick}>{children}</ClosePassword>;
            break;
        default:
            button = <PrimaryButton type={type} onClick={onClick}>{children}</PrimaryButton>;
    }
    return (
       <> {button} </>
    );
};

export default BaseButton;