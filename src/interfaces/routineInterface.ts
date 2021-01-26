export interface RoutineExercice {
  routine_id: string;
  exercice_id: string;
  exercice_name: string;
  observations?: string;
  repetitions?: number;
  sequence?: number;
  sort?: string;
  volume?: number;

}


export default interface RoutineInterface {
  id: string;
  title: string;
  description: string;
  routineExercice?: RoutineExercice[];
}
