import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form } from '@unform/web';
import Input from '~/components/Input';
import { MdRemoveRedEye, MdDescription } from 'react-icons/md';
import { Container } from './styles';

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
          <Container>
            <div className="exercice-video-modal">
              <iframe
                title='video_routine'
                id="player"
                src="http://www.youtube.com/embed/4m72jsC_5Ro"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="exercice-description-modal">
              <h3>Observações</h3>
              <Form
                initialData={{ note: 'Executar após supino' }}
                ref={formRef}
                onSubmit={() => {}}
              >
                <Input
                  id="note"
                  placeholder="Observações"
                  icon={MdDescription}
                  name="note"
                />
              </Form>
            </div>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ViewRoutine;
