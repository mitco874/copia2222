import { User } from '../../interfaces';
import { UserState } from './UserProvider';

type UserAction=
| { type: '[User] - load logged user data', payload: User}
| { type: '[User] - remove user data'}


export const UserReducer = ( state: UserState , action: UserAction ): UserState => {

     switch ( action.type ) {
        case "[User] - load logged user data":
                return { 
                    ...state,
                    user: action.payload
                };

            case "[User] - remove user data":
                return { 
                    ...state,
                    user: null
                };

          default:
               return state;
     }

}