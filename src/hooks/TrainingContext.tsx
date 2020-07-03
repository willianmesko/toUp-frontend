import React, { createContext, useState, useContext, useCallback } from 'react';

interface RoutineInterface {
  title: string;
  description: string;
}

interface Training {
  id: string;
  title: string;
  description?: string;

  routines?: RoutineInterface[];
}

interface TrainingContextData {
  training: Training;
  setTraining(training: Training): void;
}

const TrainingContext = createContext<TrainingContextData>(
  {} as TrainingContextData,
);

const TrainingProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Training>({} as Training);

  const setTraining = useCallback(training => {
    setData(training);
  }, []);

  return (
    <TrainingContext.Provider value={{ training: data, setTraining }}>
      {children}
    </TrainingContext.Provider>
  );
};

function useTraining(): TrainingContextData {
  const context = useContext(TrainingContext);

  if (!context) {
    throw new Error('useTraining must be used within an AuthProvider');
  }

  return context;
}

export { TrainingProvider, useTraining };
