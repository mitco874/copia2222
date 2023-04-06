
import { Employee } from '../../interfaces';
import { EmployeesState } from '../';

type EmployeeAction=
| { type: '[Employee] - load employees', payload: Employee[]}
| { type: '[Employee] - change filter employees', payload: Employee[]}

export const EmployeesReducer = ( state: EmployeesState , action: EmployeeAction ): EmployeesState => {

     switch ( action.type ) {
        case "[Employee] - load employees":
            return { 
                ...state,
                totalEmployees: action.payload,
                filteredEmployees: action.payload
            };
        case "[Employee] - change filter employees":
            return { 
                ...state,
                filteredEmployees: action.payload
            };

          default:
               return state;
     }
}