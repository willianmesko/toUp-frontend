import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import Button from '~/components/Button';

import api from '~/services/api';

interface ModalProps {
  training_id: string;
  children?: React.ReactNode;
}

const AddAthletes: React.FC<ModalProps> = ({ training_id }) => {
  const [modal, setModal] = useState(false);

  const [options, setOptions] = useState([]);
  const [selectedAthletes, setSelectedAthletes] = useState([]);
  const toggle = async () => {
    setModal(!modal);
    const response = await api.get('/athletes');

    setOptions(response.data);
  };

  const handleAddAthletesToTraining = async e => {
    e.preventDefault();
    {
      const athletes_ids = selectedAthletes.map(athlete => athlete.id);
      await api.post('/training/athletes', {
        athletes_ids,
        training_id,
      });
    }
  };

  return (
    <div>
      <Button
        style={{
          width: '200px',
          float: 'right',
          marginRight: '15px',
          height: '36px',
        }}
        onClick={toggle}
      >
        Vincular a alunos
      </Button>

      <Modal centered isOpen={modal} toggle={toggle}>
        <ModalHeader>Vincular Treino a atletas</ModalHeader>
        <ModalBody>
          <form onSubmit={handleAddAthletesToTraining}>
            <Autocomplete
              multiple
              onChange={(e, newValue) => {
                setSelectedAthletes(newValue);
              }}
              id="tags-standard"
              options={options}
              getOptionLabel={option => option.name}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Alunos"
                />
              )}
            />

            <Button type="submit">Salvar</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddAthletes;
