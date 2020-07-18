import RoutineInterface from './routineInterface';

export default interface Training {
  id: string;
  description?: string;
  title: string;
  routines?: RoutineInterface[];
  objective: number;
}
