import React from 'react';
import styled from 'styled-components';
import Modal from "../../functions/modal/Modal";
import ModalComponent from './../modal/Modal';


function Home() {
    const { showModal, hideModal, visible } = Modal();

    return (
        <Style>
            <div onClick={()=> showModal() } className="button">Click on me</div>
            <ModalComponent hideModal={hideModal} visible={visible} />
        </Style>
    );
}

const Style = styled.div`
.button {
    height: 33px;
    width: 180px;
    border: 1px solid #979797;
    border-radius: 15px;
    background-color: white;
    color: #979797;
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: #979797;
        border-color: #fff;
    }
}
`;

export default Home;