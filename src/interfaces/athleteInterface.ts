import Training from './trainingInterface';

export default interface Athlete {
  id: string;
  name: string;
  age: number;
  imc: number;
  email: string;
  avatar_url?: string;
  body_mass: number;
  stature: number;
  date_of_birth: string;
  physical_activity: number;
  objective: number;
  aerobic_profile: number;
  training_level: number;
  trainings?: Training[];
}
