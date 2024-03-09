import React from "react";
import {PrimaryButton, SecondaryButton} from "@/styles/components/buttons/BaseButtonStyles.ts";

interface BaseButtonProps {
    type?: 'primary' | 'secondary'
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
        default:
            button = <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
    }

    return (
       <> {button} </>
    );
};

export default BaseButton;