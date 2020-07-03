import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '~/components/Input';
import { MdRemoveRedEye, MdDescription } from 'react-icons/md';
import api from '~/services/api';

interface RoutineInterface {
  id: string;
  title: string;
  description: string;
  video?: string;
}

interface ModalProps {
  children?: React.ReactNode;
  icon?: string;
  routine?: RoutineInterface;
}

const ViewRoutine: React.FC<ModalProps> = ({ icon, routine }) => {
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);
  const toggle = async () => {
    setModal(!modal);
  };

  const getIcon = {
    view: <MdRemoveRedEye size={25} />,
  };

  return (
    <div>
      {icon ? (
        <span onClick={toggle}> {getIcon[icon]} </span>
      ) : (
        <h3 onClick={toggle}>Clique aqui para adicionar</h3>
      )}

      <Modal size="lg" centered isOpen={modal} toggle={toggle}>
        <ModalHeader>
          <h2>Supino</h2>
        </ModalHeader>
        <ModalBody>
          <div>
            <label>Execução</label>
            <table>
              <thead>
                <tr>
                  <td>Séries</td>
                  <td>Repetições</td>
                  <td>Carga</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>20</td>
                  <td>50kg</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p>Video</p>
            <iframe
              id="player"
              width="640"
              height="360"
              src="http://www.youtube.com/embed/4m72jsC_5Ro"
              frameBorder="0"
            ></iframe>
          </div>
          <div>
            <Form
              initialData={{ obser: 'Executar após supino' }}
              ref={formRef}
              onSubmit={() => {}}
            >
              <Input
                placeholder="Observações"
                icon={MdDescription}
                name="obser"
              />
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ViewRoutine;
