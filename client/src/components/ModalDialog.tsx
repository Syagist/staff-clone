import React from 'react';
import Modal from 'react-modal';

export interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
}

Modal.setAppElement('#root');

export const ModalDialog = ({ isOpen, onRequestClose, children }: ModalProps) => {

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            {children}
        </Modal>
    );
};

