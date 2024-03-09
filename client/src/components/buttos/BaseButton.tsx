import React from "react";
import {PrimaryButton, SecondaryButton, InputPassword} from "@/styles/components/buttons/BaseButtonStyles.ts";

interface BaseButtonProps {
    type?: 'primary' | 'secondary' | 'input-password'
    children: React.ReactNode;
    onClick: () => void
}

const BaseButton = ({type, children, onClick}: BaseButtonProps) => {
    let button;

    switch (type) {
        case 'primary':
            button = <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
            break;
        case 'secondary':
            button = <SecondaryButton onClick={onClick}>{children}</SecondaryButton>;
            break;
        case 'input-password':
            button = <InputPassword type='button' onClick={onClick}>{children}</InputPassword>;
            break;
        default:
            button = <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
    }
    return (
       <> {button} </>
    );
};

export default BaseButton;