import { createContext } from 'react';

interface ContextProps{
     sidebarMenuOpen: boolean;
     toggleSidebarMenu: () => void;
}

export const UIContext =createContext({} as ContextProps );