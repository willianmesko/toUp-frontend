import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import {
    AiFillEdit,

} from 'react-icons/ai';



const AboutMe: React.FC = () => {
    const [modal, setModal] = useState(false);




    const toggle = async () => {
        setModal(!modal);

    };




    return (
        <div>

            <AiFillEdit size={20} onClick={toggle} />

            <Modal size="lg" centered isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    <h2>Sobre Mim</h2>
                </ModalHeader>
                <ModalBody>


                </ModalBody>
            </Modal>
        </div>
    );
};

export default AboutMe;
