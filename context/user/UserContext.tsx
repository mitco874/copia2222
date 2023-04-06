import { createContext } from 'react';
import { User } from '../../interfaces';

interface ContextProps{
    user: User | null;
    loadLoggedUserData: (userId: number) => Promise<void>;
    removeUserData: () => void;
}

export const UserContext =createContext({} as ContextProps );