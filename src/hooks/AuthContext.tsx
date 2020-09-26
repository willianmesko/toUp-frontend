import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import jwt_decode from 'jwt-decode';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
  trainer_id?: string;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  role: string;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  token: string;
  user: User;
  role: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@toUp:token');
    const user = localStorage.getItem('@toUp:user');

    if (token && user) {
      const decodedToken = jwt_decode(token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user), role: decodedToken.role };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    const decodedToken = jwt_decode(token);

    localStorage.setItem('@toUp:token', token);
    localStorage.setItem('@toUp:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user, role: decodedToken.role });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@toUp:token');
    localStorage.removeItem('@toUp:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@toUp:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
        role: data.role,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, role: data.role }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
