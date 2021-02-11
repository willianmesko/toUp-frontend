import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Button from '~/components/Button'
import { useToast } from '~/hooks/ToastContext';
import { useAthlete } from '~/hooks/AthleteContext';
import api from '~/services/api'
import Input from '~/components/Inputs/Text';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, } from 'react-icons/fi';
import RoutineInterface from '~/interfaces/routineInterface';

interface RoutineFormData {
    title: string;
    description: string;

}

interface ModalRoutineProps {
    training_id?: string;
    routines: RoutineInterface[];
    button?: boolean;
    updateRoutines(routine: RoutineInterface[]): void;
    updateRoutine(routine: RoutineInterface): void;
    openModal(open: boolean): void;
}


const AddRoutine: React.FC<ModalRoutineProps> = ({ openModal, training_id, routines, button, updateRoutines, updateRoutine }) => {
    const [modal, setModal] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const { athlete } = useAthlete();

    const toggle = async () => {
        setModal(!modal);

    };

    const openModalStyle = {
        cursor: 'pointer',
        height: '80px',

    };

    async function handleSubmitRoutine({
        title,
        description,
    }: RoutineFormData): Promise<void> {
        try {
            formRef.current?.setErrors({});
            if (routines.length >= 6) {
                addToast({
                    type: 'error',
                    title: 'Erro no cadastro',
                    description: 'No máximo 6 rotinas por treino',
                });
                toggle()
                return;
            }
            const schema = Yup.object().shape({
                title: Yup.string().required('Campo obrigatório'),
            });

            await schema.validate(
                {
                    title,
                },
                {
                    abortEarly: false,
                },
            );

            const response = await api.post('/routines', {
                title,
                training_id,
                athlete_id: athlete.id,
            });

            let routinesUpdated = [...routines]

            routinesUpdated.push(response.data)

            updateRoutines(routinesUpdated)
            updateRoutine(response.data);

            toggle()

            response.data.routineExercice = [];


            addToast({
                type: 'success',
                title: 'Cadastro realizado! 🏋 ',
                description: 'Aluno cadastrado com sucesso!',
            });
        } catch (err) {

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
            });
            return;
        }


    }

    return (
        <div>
            {button ? <Button onClick={toggle} width="120px" height="35px">+ Rotina</Button> :
                <span onClick={toggle} >
                    <h4 style={openModalStyle}>Clique para cadastrar uma rotina </h4>
                </span>}


            <Modal size="s" centered isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    <h3>Adicionar rotina</h3>
                </ModalHeader>
                <ModalBody>

                    <Form ref={formRef} onSubmit={handleSubmitRoutine}>
                        <Input name="title" icon={FiUser} placeholder="Titulo" />

                        <Button type="submit">Cadastrar</Button>
                    </Form>

                </ModalBody>
            </Modal>
        </div>
    );
};

export default AddRoutine;