import React, { createContext, useState, useContext, useCallback } from 'react';

interface Training {
  id: string;
  description?: string;
  title: string;
}
interface Athlete {
  id: string;
  name: string;
  age: number;
  imc: number;
  email: string;
  body_mass: number;
  stature: number;
  date_of_birth: string;
  physical_activity: number;
  objective: number;
  aerobic_profile: number;
  training_level: number;
  trainings?: Training[];
}

interface AthleteContextData {
  athlete: Athlete;
  setAthlete(athlete: Athlete): void;
}

const AthleteContext = createContext<AthleteContextData>(
  {} as AthleteContextData,
);

const AthleteProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Athlete>({} as Athlete);

  const setAthlete = useCallback(athlete => {
    setData(athlete);
  }, []);

  return (
    <AthleteContext.Provider value={{ athlete: data, setAthlete }}>
      {children}
    </AthleteContext.Provider>
  );
};

function useAthlete(): AthleteContextData {
  const context = useContext(AthleteContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AthleteProvider, useAthlete };
