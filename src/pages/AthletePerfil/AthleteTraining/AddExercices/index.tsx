import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Button from '~/components/Button'
import { useToast } from '~/hooks/ToastContext';
import { Container, Filters, ExercicesArea, Exercice, PaginationArea } from './styles';
import api from '~/services/api'
import Pagination from '@material-ui/lab/Pagination';
import IExercice from '~/interfaces/exerciceInterface';
import RoutineInterface, { RoutineExercice } from '~/interfaces/routineInterface';

interface ModalProps {
    children?: React.ReactNode;
    icon?: string;
    routine?: RoutineInterface;
    updateExercicesInRoutine(any): void
    routineExercices: RoutineExercice[]
    openModal(open: boolean): void;
}

const AddExercices: React.FC<ModalProps> = ({ routineExercices, openModal, updateExercicesInRoutine, routine }) => {
    const [modal, setModal] = useState(false);
    const [exercices, setExercices] = useState<IExercice[]>([])
    const [selectedExercices, setSelectedExercices] = useState<RoutineExercice[]>([]);
    const [page, setPage] = useState(1);
    const pageSize = Math.round(exercices.length / 5);
    const { addToast } = useToast();
    const toggle = async () => {
        setModal(!modal);
        const response = await api.get('/exercices');
        setExercices(response.data)
    };


    function handlePagination(event, value) {


        setPage(value);
        const copyExercices = [...exercices];
        console.log(copyExercices);
        copyExercices.slice((page - 1) * pageSize, page * pageSize);
        console.log(copyExercices);
        setExercices(copyExercices);
    }

    async function addExercices(exercice: IExercice): Promise<void> {

        const routineExercice = {
            routine_id: routine.id,
            exercice_name: exercice.name,
            exercice_id: exercice.id,
            sequence: 3,
            repetitions: 10,
            volume: 3
        };

        if (selectedExercices.length >= 10) {
            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Limite de 10 exercícios por rotina',
            });
            return;
        }

        if (routineExercices.find(rExercice => rExercice.exercice_id === exercice.id)) {
            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: `Exercício ${exercice.name} já vinculado a esta rotina`,
            });
            return;
        }



        setSelectedExercices(
            selectedExercices.find(exerciceS => exerciceS.exercice_id === exercice.id) ?
                selectedExercices.filter(selected => selected.exercice_id !== exercice.id)
                : [...selectedExercices, routineExercice]);
    };

    function isSelected(exercice_id: string): boolean {
        if (selectedExercices.find(exercice => exercice.exercice_id === exercice_id))
            return true;
        else return false;
    }

    async function saveExerciceToRoutine(): Promise<void> {
        try {
            await api.post('/routine_exercice',
                {
                    routine_id: routine.id,
                    selectedExercices
                }
            );

            let routineExercicesUpdated = [...routineExercices]
            for (let newExercice of selectedExercices) {
                routineExercicesUpdated.push(newExercice);
            }
            updateExercicesInRoutine(routineExercicesUpdated)
            setSelectedExercices([])
            toggle()

            addToast({
                type: 'success',
                title: 'Exercícios cadastrados com sucesso',

            });

        } catch (error) {

        }

    }


    return (
        <div>
            {console.log(pageSize)}
            <Button onClick={toggle} height='35px' width="120px">+ Exercício</Button>

            <Modal size="lg" centered isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    <h2>Adicionar Exercicio</h2>
                </ModalHeader>
                <ModalBody>

                    <Container>
                        <Filters>
                            <input type="text" placeholder="Pesquisar" />
                            <select >
                                <option> Peitoral</option>
                                <option>Bicps</option>
                            </select>
                        </Filters>
                        <Button onClick={() => saveExerciceToRoutine()} height="40px" width="130px" style={{ alignSelf: 'flex-end', marginTop: '-10px' }}>Salvar</Button>
                        <ExercicesArea >

                            {exercices && exercices.slice((page - 1) * 4, page * 4).map(exercice => {
                                return (
                                    <Exercice selected={isSelected(exercice.id)} onClick={() => addExercices(exercice)}>
                                        <div className="thumbnail">
                                            <img alt="exerciced" src='https://img.youtube.com/vi/edTQcwjf5lk/hqdefault.jpg' />
                                        </div>
                                        <div className="exerciceInfo">
                                            <div className="exerciceAbout">
                                                <h4>{exercice.name}</h4>
                                                <p>{exercice.group_muscle_name}</p>
                                            </div>

                                        </div>
                                    </Exercice>

                                )
                            })}
                        </ExercicesArea >
                        <PaginationArea>
                            <Pagination size="large" page={page} onChange={handlePagination} count={pageSize} shape="rounded" />
                        </PaginationArea>
                    </Container>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default AddExercices;
