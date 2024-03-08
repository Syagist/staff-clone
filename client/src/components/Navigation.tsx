import  {useState} from "react";
import {ModalDialog} from "./ModalDialog";
import UserRegister from "./forms/UserRegister.tsx";

const Navigation = () => {
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);



    const handleLoginPopup = () => {

    }

    const handleRegisterPopup = () => {
        setRegisterModalOpen(prevState => !prevState)
    }

    const navigateToCompanies = () => {

    }

    return (
        <div>
            <button onClick={handleLoginPopup}>login</button>
            <button onClick={handleRegisterPopup}>register</button>
            <button onClick={navigateToCompanies}>For commpanies</button>

            <ModalDialog isOpen={isRegisterModalOpen} onRequestClose={handleRegisterPopup}>
                <div>
                   <UserRegister/>
                    <button onClick={handleRegisterPopup}>Close</button>
                </div>
            </ModalDialog>
        </div>
    );
};

export default Navigation;