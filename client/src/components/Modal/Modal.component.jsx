import React, { useEffect, useRef } from 'react';

import ActionButton from '../ActionButton/ActionButton.component';

import './Modal.style.scss';

const CloseIcon = (props) => (
    <span {...props}>X</span>
);

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
    const modalRef = useRef(null);
    useEffect(
        () => {
            if (show) {
                modalRef.current.classList.add('visible');
            }
            else {
                modalRef.current.classList.remove('visible');
            }
        },
        [
            show
        ]
    );

    return (
        <React.Fragment>
            <div ref={modalRef} style={backdropStyle} className='modal-wrap'>
                {/* <ActionButton
                    onClick={onClose}
                    style={{ width: 60, height: 40, position: 'absolute', top: 0, right: 0, margin: '1rem' }}
                    className='close__btn'
                >
                    <CloseIcon height="20px" width="20px" className='close__icon' />
                </ActionButton> */}
                <div style={modalStyle} className='modal'>
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;