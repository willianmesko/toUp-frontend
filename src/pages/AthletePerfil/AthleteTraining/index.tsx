import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import { useAthlete } from '~/hooks/AthleteContext';
import { Content, TrainingContainer, Buttons, CustomDot } from '../styles';
import NewTraining from './AddTraining';
import ViewRoutine from './ViewRoutine';
import AddExercices from './AddExercices';
import AddRoutine from './AddRoutine';
import hipertrofia from '~/assets/icons/hipertrofia.svg';
import emagrecimento from '~/assets/icons/emagrecimento.svg';
import api from '~/services/api';
import { useTraining } from '~/hooks/TrainingContext';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import noWorkout from '~/assets/notfound.png';
import RoutineInterface, { RoutineExercice } from '~/interfaces/routineInterface';
import { IoIosFitness } from 'react-icons/io';
import halterImage from '~/assets/halter.png'
interface TrainingInterface {
    id: string;
    title: string;
    description?: string;
    objective: number;
    routines?: RoutineInterface[];
}

const AthleteTraining: React.FC = () => {
    const { athlete } = useAthlete();
    const [training, setTrainings] = useState({} as TrainingInterface);
    const [routines, setRoutines] = useState<RoutineInterface[]>([]);
    const [routine, setRoutine] = useState<RoutineInterface>();
    const [routineExercices, setRoutineExercices] = useState<RoutineExercice[]>([])
    const { setTraining } = useTraining();
    const [openModal, setOpenModal] = useState(false)
    const history = useHistory()

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        async function getTraining(): Promise<void> {
            try {
                if (athlete.trainings) {
                    setTrainings(athlete.trainings[0]);
                    const response = await api.get(
                        `/routines/${athlete.trainings[0].id}`,
                    );


                    setRoutine(response.data[0]);
                    setRoutineExercices(response.data[0].routineExercice)
                    setRoutines(response.data);

                }
            } catch (e) {
                console.log(e);
            }
        }
        getTraining();
    }, [athlete, training]);



    async function deleteExercice(exercice_id): Promise<void> {
        await api.delete(`/routine_exercice/${exercice_id}`);
    }


    const CustomDots = () => {
        return (
            <div style={{ width: '100%', opacity: '0.5', background: '#000', height: '3px' }}>
                <CustomDot />

            </div>
        )
    }

    return (
        <Content>

            {training && training.id ?
                <>
                    <h5>Rotinas</h5>
                    <Carousel

                        swipeable={false}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}

                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {routines.map(r => {
                            return (
                                <>
                                    <TrainingContainer onClick={() => {
                                        return (
                                            setRoutine(r),
                                            setRoutineExercices(r.routineExercice)
                                        )
                                    }} active={routine.id === r.id}>

                                        <span>{r.title} </span>
                                        {/* <img src={halterImage} alt="routine-image" className="routine-img" /> */}
                                    </TrainingContainer> </>
                            )
                        }
                        )}


                    </Carousel>
                </> : (
                    <div className="no-training">
                        <h2>Ainda não foram criados treinos para esse aluno</h2>
                        <AddRoutine openModal={setOpenModal} updateRoutine={setRoutine} training_id={training?.id} routines={routines} updateRoutines={setRoutines} />
                        <img src={noWorkout} alt="no-workout" />
                    </div>
                )}

            {
                routine && routine.routineExercice &&
                <>
                    <Buttons>
                        <AddRoutine openModal={setOpenModal} updateRoutine={setRoutine} button training_id={training.id} routines={routines} updateRoutines={setRoutines} />
                        <AddExercices openModal={setOpenModal} routine={routine} routineExercices={routineExercices} updateExercicesInRoutine={setRoutineExercices} />

                    </Buttons>
                    {/* <SortableList axis='xy' items={routine.routineExercice} onSortEnd={() => { }} /> */}

                    <div className='exercice-info'>
                        <ul>

                            {routineExercices.map(exercice => (
                                <li>
                                    <div className="exercice-border">

                                    </div>
                                    <div className="exercice-info">
                                        <div className="exercice-title">
                                            <p>{exercice.exercice_name}</p>
                                            <div className="exercice-icons">
                                                <p>
                                                    <ViewRoutine icon="view" />
                                                </p>
                                                <p>
                                                    <MdEdit size={25} />
                                                </p>

                                                <p>
                                                    <MdDelete
                                                        onClick={() => deleteExercice(exercice.exercice_id)}
                                                        size={25}
                                                    />
                                                </p>
                                            </div>
                                        </div>
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
                                                    <td>{exercice.sequence}</td>
                                                    <td>{exercice.repetitions}</td>
                                                    <td>{exercice.volume}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>

            }

        </Content >
    );
};

export default AthleteTraining;
