
import { Employee } from '../../interfaces';
import { EmployeesState } from '../';

type EmployeeAction=
| { type: '[Employee] - load employees', payload: Employee[]}

export const EmployeesReducer = ( state: EmployeesState , action: EmployeeAction ): EmployeesState => {

     switch ( action.type ) {
        case "[Employee] - load employees":
            return { 
                ...state,
                employees: action.payload
            };

          default:
               return state;
     }
}