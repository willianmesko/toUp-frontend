import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import Input from '~/components/Inputs/Text';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useToast } from '~/hooks/ToastContext';
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
      const response = await api.post('/training/athletes', {
        athletes_ids,
        training_id,
      });
    }
  };

  return (
    <div>
      <Button
        style={{ width: '150px', float: 'right', height: '36px' }}
        onClick={toggle}
      >
        add Alunos
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
