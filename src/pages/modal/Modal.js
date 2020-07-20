import React from "react";
import styled from 'styled-components';

import ModalComponent from "../../components/modal/Modal";

const Modal = ({ visible, hideModal }) => {
    visible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    return (
        <Style>
            <ModalComponent visible={visible}>
                <div className="button" onClick={() => hideModal()}>Close</div>
            </ModalComponent>
        </Style>
    );
};

const Style = styled.div`
.button {
    margin-top:20px;
    float: right;
    height: 24px;
    width: 180px;
    border: 1px solid #979797;
    border-radius: 15px;
    background-color: #000;
    color: #979797;
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: #979797;
        border-color: #fff;
    }
}
`;

export default Modal;