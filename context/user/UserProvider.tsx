import { FC, useReducer } from 'react';
import { User } from '../../interfaces';
import { UserContext, UserReducer } from '../';
import { get } from "../../utils/apiMethods";

export interface UserState {
    user: User | null;
}

const USER_INITIAL_STATE: UserState={
     user: null,
}

interface Props{
     children: React.ReactNode
}

export const UserProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( UserReducer, USER_INITIAL_STATE );

    const loadLoggedUserData = async (userId: number) => {
        const {data} = await get(`api/v1/employee/${userId}`);
        dispatch({ type: "[User] - load logged user data", payload: data.data as User });
    }

    const removeUserData = () => {
        localStorage.removeItem("token");
        dispatch({ type: "[User] - remove user data"});
    }

    return (
        <UserContext.Provider value={{ 
            ...state,
            loadLoggedUserData,
            removeUserData 
            }} 
        >
            {children}
        </UserContext.Provider>
    )
}