import React, { InputHTMLAttributes, useEffect, useState, useRef } from 'react';
import { useField } from '@unform/core';
import { Form } from '@unform/web';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useToast } from '~/hooks/ToastContext';
import 'react-day-picker/lib/style.css';
import {
  Container,
  AthleteInfo,
  Evaluation,
  Header,
  NewEvaluationModel,
  AnimationContainer,
  Actions,
} from './styles';
import api from '~/services/api';
import Athlete from '~/interfaces/athleteInterface';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
interface AddEvaluationProps {
  children?: React.ReactNode;
  athlete?: Athlete;
  addEvaluation(show: boolean): void;
}

const AddEvaluation: React.FC<AddEvaluationProps> = ({
  athlete,
  addEvaluation,
}) => {
  const [evaluation, setEvaluation] = useState<boolean>(false);
  const [, setCreateNewEvaluation] = useState(false);
  const [showDados, setShowDados] = useState(true);
  const [type, setType] = useState({ id: 0, title: '' });
  const [showDobrasCutaneas, setShowDobrasCutaneas] = useState(true);
  const [showPerimetrosCorporais, setShowPerimetrosCorporais] = useState(true);
  // const [, setSelectedDate] = React.useState(
  //   new Date('2014-08-18T21:11:54'),
  // );
  const { addToast } = useToast();
  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };
  const formRef = useRef(null);

  console.log(athlete.age);
  const getFieldValue = (
    input: string,
    inputMedia: string,
    divide: number,
  ): void => {
    const value = formRef.current.getFieldValue(input);
    const [firstName] = input.split('_');

    if (divide === 1) {
      formRef.current.setFieldValue(`${firstName}_second`, value);
      formRef.current.setFieldValue(`${firstName}_third`, value);
      formRef.current.setFieldValue(inputMedia, value);
    }
    if (divide === 2) {
      const currentMedia = formRef.current.getFieldValue(inputMedia);
      const media = parseInt(currentMedia) + 5;
      console.log(media);
      formRef.current.setFieldValue(inputMedia, media);
    }
  };
  const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField } = useField(name);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }, [fieldName, registerField]);

    return <input ref={inputRef} {...rest} />;
  };

  const handleSubmit = async ({
    athlete_age,
    athlete_height,
    athlete_sexo,
    athlete_weight,
    desired_fat_percentage,
    subscapular,
    tricipital,
    breastplate,
    axilar,
    thigh,
    suprailiac,
    abdominal,
    chest,
    waist,
    hip,
    abdomen,
    right_arm,
    left_arm,
    right_thigh,
    left_thigh,
    right_leg,
    left_leg,
    left_forearm,
    right_forearm,
  }): Promise<void> => {
    try {

      const response = await api.post('/evaluation', {
        type: type.id,
        type_title: type.title,
        date: '2020-07-06T20:21:43.673Z',
        athlete_ethnicity: 0,
        athlete_sexo: 1,
        desired_fat_percentage: parseFloat(desired_fat_percentage),
        athlete_age: parseFloat(athlete_age),
        athlete_height: parseFloat(athlete_height),
        athlete_weight: parseFloat(athlete_weight),
        subscapular: parseFloat(subscapular),
        tricipital: parseFloat(tricipital),
        breastplate: parseFloat(breastplate),
        axilar: parseFloat(axilar),
        thigh: parseFloat(thigh),
        suprailiac: parseFloat(suprailiac),
        abdominal: parseFloat(abdominal),
        chest: parseFloat(chest),
        waist: parseFloat(waist),
        hip: parseFloat(hip),
        abdomen: parseFloat(abdomen),
        right_arm: parseFloat(right_arm),
        left_arm: parseFloat(left_arm),
        right_thigh: parseFloat(right_thigh),
        left_thigh: parseFloat(left_thigh),
        right_leg: parseFloat(right_leg),
        left_leg: parseFloat(left_leg),
        left_forearm: parseFloat(left_forearm),
        right_forearm: parseFloat(right_forearm),
        athlete_id: athlete.id,
      });

      if (response.data) {
        addToast({
          type: 'success',
          title: 'Avaliação criada com sucesso',
        });
      }
      setEvaluation(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {!evaluation && (
        <NewEvaluationModel>
          <p onClick={() => addEvaluation(false)}>voltar</p>
          <p>Escolha o protocolo a ser utilizado</p>
          <ul>
            <li
              onClick={e => {
                setCreateNewEvaluation(false);
                setEvaluation(true);
                setType({ id: 1, title: 'Pollock 7 dobras' });
              }}
            >
              POLLOCK 7 DOBRAS
            </li>
            <li>POLLOCK 3 DOBRAS</li>
            <li>POLLOCK 5 DOBRAS</li>
            <li>POLLOCK 4 DOBRAS</li>
          </ul>
        </NewEvaluationModel>
      )}

      {evaluation && (
        <AnimationContainer>
          <Form
            initialData={{
              athlete_age: athlete.age,
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <Actions>
              {' '}
              <p onClick={() => addEvaluation(false)}>voltar</p>{' '}
              <button type="submit">Salvar</button>
            </Actions>

            <AthleteInfo>
              <Header onClick={() => setShowDados(!showDados)}>
                <p>Dados</p>
                {showDados ? (
                  <ArrowDropUpIcon fontSize="large" />
                ) : (
                  <ArrowDropDownIcon fontSize="large" />
                )}
              </Header>
              {showDados && (
                <div className="content">
                  <div className="input-area">
                    <label>Idade</label>
                    <Input type="number" name="athlete_age" />
                  </div>
                  <div className="input-area">
                    <label>Etnia</label>
                    <Input type="number" name="athlete_ethnicity" />
                  </div>
                  <div className="input-area">
                    <label>Altura</label>
                    <Input type="number" name="athlete_height" />
                  </div>
                  <div className="input-area">
                    <label>Peso</label>
                    <Input type="number" name="athlete_weight" />
                  </div>
                  <div className="input-area">
                    <label>Percentual %G Desejado</label>
                    <Input type="number" name="desired_fat_percentage" />
                  </div>

                  {/* <div className="date">
                    <label>Data </label>
                    <DayPickerInput onDayChange={day => console.log(day)} />
                  </div> */}
                </div>
              )}
            </AthleteInfo>

            <Evaluation>
              <div className="dobras_cutaneas">
                <Header
                  onClick={() => setShowDobrasCutaneas(!showDobrasCutaneas)}
                >
                  <p>Dobras Cutâneas</p>
                  {showDobrasCutaneas ? (
                    <ArrowDropUpIcon fontSize="large" />
                  ) : (
                    <ArrowDropDownIcon fontSize="large" />
                  )}
                </Header>
                {showDobrasCutaneas && (
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <td>1ª medida</td>
                        <td>2ª medida</td>
                        <td>3ª medida</td>
                        <td>Média</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Subescapular</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0"
                            onChange={() =>
                              getFieldValue(
                                'subscapular_first',
                                'subscapular',
                                1,
                              )
                            }
                            name="subscapular_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'subscapular_second',
                                'subscapular',
                                2,
                              )
                            }
                            name="subscapular_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'subscapular_third',
                                'subscapular',
                                3,
                              )
                            }
                            name="subscapular_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="subscapular" />
                        </td>
                      </tr>
                      <tr>
                        <td>Tricipital*</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0"
                            onChange={() =>
                              getFieldValue('tricipital_first', 'tricipital', 1)
                            }
                            name="tricipital_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'tricipital_second',
                                'tricipital',
                                2,
                              )
                            }
                            name="tricipital_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('tricipital_third', 'tricipital', 3)
                            }
                            name="tricipital_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="tricipital" />
                        </td>
                      </tr>
                      <tr>
                        <td>Peitoral</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0"
                            onChange={() =>
                              getFieldValue(
                                'breastplate_first',
                                'breastplate',
                                1,
                              )
                            }
                            name="breastplate_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'breastplate_second',
                                'breastplate',
                                2,
                              )
                            }
                            name="breastplate_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'breastplate_third',
                                'breastplate',
                                3,
                              )
                            }
                            name="breastplate_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="breastplate" />
                        </td>
                      </tr>
                      <tr>
                        <td>Axilar média</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0"
                            onChange={() =>
                              getFieldValue('axilar_first', 'axilar', 1)
                            }
                            name="axilar_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('axilar_second', 'axilar', 2)
                            }
                            name="axilar_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('axilar_third', 'axilar', 3)
                            }
                            name="axilar_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="axilar" />
                        </td>
                      </tr>
                      <tr>
                        <td>Suprailíaca</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0"
                            onChange={() =>
                              getFieldValue('suprailiac_first', 'suprailiac', 1)
                            }
                            name="suprailiac_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'suprailiac_second',
                                'suprailiac',
                                2,
                              )
                            }
                            name="suprailiac_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('suprailiac_third', 'suprailiac', 3)
                            }
                            name="suprailiac_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="suprailiac" />
                        </td>
                      </tr>
                      <tr>
                        <td>Abdominal</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0"
                            onChange={() =>
                              getFieldValue('abdominal_first', 'abdominal', 1)
                            }
                            name="abdominal_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('abdominal_second', 'abdominal', 2)
                            }
                            name="abdominal_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('abdominal_third', 'abdominal', 3)
                            }
                            name="abdominal_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="abdominal" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>

              <div className="perimetros_corporais">
                <Header
                  onClick={() =>
                    setShowPerimetrosCorporais(!showPerimetrosCorporais)
                  }
                >
                  <p>Perímetros Corporais</p>
                  {showPerimetrosCorporais ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </Header>
                {showPerimetrosCorporais && (
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <td>1ª Medida</td>
                        <td>2ª Medida</td>
                        <td>3ª Medida</td>
                        <td>Média</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tórax</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('chest_first', 'chest', 1)
                            }
                            name="chest_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('chest_second', 'chest', 2)
                            }
                            name="chest_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('chest_third', 'chest', 3)
                            }
                            name="chest_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="chest" />
                        </td>
                      </tr>
                      <tr>
                        <td>Cintura</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('waist_first', 'waist', 1)
                            }
                            name="waist_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('waist_second', 'waist', 2)
                            }
                            name="waist_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('waist_third', 'waist', 3)
                            }
                            name="waist_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="waist" />
                        </td>
                      </tr>
                      <tr>
                        <td>Abdomen</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('abdomen_first', 'abdomen', 1)
                            }
                            name="abdomen_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('abdomen_second', 'abdomen', 2)
                            }
                            name="abdomen_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('abdomen_third', 'abdomen', 3)
                            }
                            name="abdomen_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="abdomen" />
                        </td>
                      </tr>
                      <tr>
                        <td>Quadril</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('hip_first', 'hip', 1)
                            }
                            name="hip_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('hip_second', 'hip', 2)
                            }
                            name="hip_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('hip_third', 'hip', 2)
                            }
                            name="hip_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="hip" />
                        </td>
                      </tr>
                      <tr>
                        <td>Braço Relaxado (Direita)*</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('rightArm_first', 'right_arm', 1)
                            }
                            name="rightArm_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('rightArm_second', 'right_arm', 2)
                            }
                            name="rightArm_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('rightArm_third', 'right_arm', 3)
                            }
                            name="rightArm_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="right_arm" />
                        </td>
                      </tr>
                      <tr>
                        <td>Braço Relaxado (Esquerda)</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('leftArm_first', 'left_arm', 1)
                            }
                            name="leftArm_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('leftArm_second', 'left_arm', 2)
                            }
                            name="leftArm_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('leftArm_third', 'left_arm', 3)
                            }
                            name="leftArm_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="left_arm" />
                        </td>
                      </tr>
                      <tr>
                        <td>Coxa (Direita)*</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue(
                                'rightThigh_first',
                                'right_thigh',
                                1,
                              )
                            }
                            name="rightThigh_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'rightThigh_second',
                                'right_thigh',
                                2,
                              )
                            }
                            name="rightThigh_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'rightThigh_third',
                                'right_thigh',
                                3,
                              )
                            }
                            name="rightThigh_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="right_thigh" />
                        </td>
                      </tr>
                      <tr>
                        <td>Coxa (Esquerda)</td>
                        <td>
                          <Input
                            placeholder="Ex: 30.0cm"
                            type="number"
                            onChange={() =>
                              getFieldValue('leftThigh_first', 'left_thigh', 1)
                            }
                            name="leftThigh_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('leftThigh_second', 'left_thigh', 2)
                            }
                            name="leftThigh_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('leftThigh_third', 'left_thigh', 3)
                            }
                            name="leftThigh_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="left_thigh" />
                        </td>
                      </tr>
                      <tr>
                        <td>Perna (Direita)*</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('rightLeg_first', 'right_leg', 1)
                            }
                            name="rightLeg_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('rightLeg_second', 'right_leg', 2)
                            }
                            name="rightLeg_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('rightLeg_third', 'right_leg', 3)
                            }
                            name="rightLeg_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="right_leg" />
                        </td>
                      </tr>
                      <tr>
                        <td>Perna (Esquerda)</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue('leftLeg_first', 'left_leg', 1)
                            }
                            name="leftLeg_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('leftLeg_second', 'left_leg', 2)
                            }
                            name="leftLeg_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue('leftLeg_third', 'left_leg', 3)
                            }
                            name="leftLeg_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="left_leg" />
                        </td>
                      </tr>
                      <tr>
                        <td>Antebraço (Direito)</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue(
                                'rightForearm_first',
                                'right_forearm',
                                1,
                              )
                            }
                            name="rightForearm_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'rightForearm_second',
                                'right_forearm',
                                2,
                              )
                            }
                            name="rightForearm_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'rightForearm_third',
                                'right_forearm',
                                3,
                              )
                            }
                            name="rightForearm_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="right_forearm" />
                        </td>
                      </tr>
                      <tr>
                        <td>Antebraço (Esquerdo)</td>
                        <td>
                          <Input
                            type="number"
                            placeholder="Ex: 30.0cm"
                            onChange={() =>
                              getFieldValue(
                                'leftForearm_first',
                                'left_forearm',
                                1,
                              )
                            }
                            name="leftForearm_first"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'leftForearm_second',
                                'left_forearm',
                                2,
                              )
                            }
                            name="leftForearm_second"
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            onChange={() =>
                              getFieldValue(
                                'leftForearm_third',
                                'left_forearm',
                                3,
                              )
                            }
                            name="leftForearm_third"
                          />
                        </td>
                        <td>
                          <Input type="number" disabled name="left_forearm" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </Evaluation>
          </Form>
        </AnimationContainer>
      )}
    </Container>
  );
};

export default AddEvaluation;
