import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useAthlete } from '~/hooks/AthleteContext';
import Button from '@material-ui/core/Button';
import { FaExchangeAlt } from 'react-icons/fa';
import api from '~/services/api';

interface RoutineInterface {
  id: string;
  title: string;
  description: string;
}

interface TrainingInterface {
  id: string;
  title: string;
  description?: string;
  objective: number;
  routines?: RoutineInterface[];
}

interface ModalProps {
  children?: React.ReactNode;
  icon?: string;
  newTraining(training?: TrainingInterface): void;
  newRoutine(routine: RoutineInterface): void;
  newRoutines(routines: RoutineInterface[]): void;
}

const filter = createFilterOptions();
const AddTraining: React.FC<ModalProps> = ({
  icon,
  newTraining,
  newRoutine,
  newRoutines,
}) => {
  const [modal, setModal] = useState(false);
  const [training, setTraining] = useState({} as TrainingInterface);
  const [options, setOptions] = useState([]);
  const { athlete, setAthlete } = useAthlete();
  const history = useHistory();
  const toggle = async () => {
    setModal(!modal);
    const response = await api.get('/training');

    setOptions(response.data);
  };

  const getIcon = {
    change: <FaExchangeAlt size={25} />,
  };

  const handleAddTrainingToAthlete = async e => {
    e.preventDefault();
    try {
      //recebe um array no backend
      const athletes_ids = [athlete.id];

      const responseT = await api.post('/training/athletes', {
        athletes_ids,
        training_id: training.id,
      });

      const responseR = await api.get(`/routines/${training.id}`);

      newTraining(training);

      newRoutines(responseR.data);
      newRoutine(responseR.data[0]);

      toggle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {icon ? (
        <span onClick={toggle}> {getIcon[icon]} </span>
      ) : (
        <h3 onClick={toggle}>Clique aqui para adicionar</h3>
      )}

      <Modal centered isOpen={modal} toggle={toggle}>
        <ModalHeader>Vincular Treino a atletas</ModalHeader>
        <ModalBody>
          <form onSubmit={handleAddTrainingToAthlete}>
            <Autocomplete
              value={training}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setTraining(newValue);
                  history.push('/new-training');
                } else {
                  setTraining(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== '') {
                  filtered.push({
                    inputValue: params.inputValue,
                    title: `Não encontrado, clique para cadastrar um novo treino`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={options}
              getOptionLabel={option => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.title;
              }}
              renderOption={option => option.title}
              freeSolo
              renderInput={params => (
                <TextField {...params} variant="standard" />
              )}
            />
            <Button
              style={{ float: 'right', color: 'rgb(42, 159, 255)' }}
              type="submit"
            >
              Salvar
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddTraining;
