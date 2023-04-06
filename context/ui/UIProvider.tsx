import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from '../';

export interface UIState {
    sidebarMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState={
    sidebarMenuOpen: false
}

interface Props{
     children: React.ReactNode
}

export const UIProvider:FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer( UIReducer, UI_INITIAL_STATE );

    const toggleSidebarMenu = () => {
        dispatch({ type: "[UI] - toggleMenu" });
    }


    return (
        <UIContext.Provider value={{
            ...state,
            
            toggleSidebarMenu
            }} 
        >
            {children}
        </UIContext.Provider>
    )
}