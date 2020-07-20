import * as React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const Modal = ({ visible, children }) => {
    return (
        <TransitionContainer>
            <CSSTransition
                in={visible}
                timeout={400}
                unmountOnExit
                classNames="modal"
            >
            {state => (
                <ModalContainer>
                <ModalView className="modal-view">{children}</ModalView>
                </ModalContainer>
            )}
            </CSSTransition>
        </TransitionContainer>
    );
};

export default Modal;


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(2px);
    display: flex;
    z-index: 6;
    align-items: center;
    justify-content: center;
`;

const ModalView = styled.div`
    background-color: #fff;
    /* change the width and get out the height */
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 2rem;
    box-shadow: 10px 10px 10px #979797;
    transition: all 300ms ease-out;
    border-radius: 4px;
`;

const TransitionContainer = styled.div`
    .modal-enter {
        opacity: 0.01;

        .modal-view {
        transform: scale(0.9) translateY(0%);
        }
    }
    .modal-enter-active {
        opacity: 1;
        transition: all 300ms ease-out;

        .modal-view {
        transform: scale(1) translateY(0%);
        }
    }
    .modal-exit {
        opacity: 1;

        .modal-view {
        transform: scale(1) translateY(20%);
        }
    }
    .modal-exit-active {
        opacity: 0.01;
        transition: all 300ms ease-out;
        .modal-view {
        transform: scale(0.9) translateY(0%);
        }
    }
`;

