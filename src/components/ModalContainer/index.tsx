import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Button from '~/components/Button';
import { GrAddCircle } from 'react-icons/gr';
import { Container } from './styles';

interface ModalProps {
  title?: string;
  buttonLabel?: string;
  button?: string;
  setCloseModal(value: boolean): void;
  opened?: boolean;
  children: React.ReactNode;

  execute(value: boolean): void;
}

const ModalContainer: React.FC<ModalProps> = ({
  buttonLabel,
  button,
  title,
  opened,
  setCloseModal,
  children,

  execute,
}) => {
  const selectButton = {
    add: <GrAddCircle size={30} color="#87868B" />,
  };

  const toggle = () => setCloseModal(!opened);

  return (
    <Container>
      <div>
        {button ? (
          <span onClick={toggle}>{selectButton[button]}</span>
        ) : (
          <Button
            style={{ width: '150px', float: 'right', height: '36px' }}
            data-tut="reactour__create_routine"
            onClick={() => {
              toggle();
              execute(false);
            }}
          >
            {buttonLabel}
          </Button>
        )}
      </div>

      <Modal centered isOpen={opened} toggle={toggle}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </Container>
  );
};

export default ModalContainer;
