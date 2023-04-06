import { FC, useCallback, useReducer } from 'react';
import { EmployeesContext, EmployeesReducer } from '../';
import { Employee, vaccinatedState, vaccineType } from '../../interfaces';
import { apiMethods } from '../../utils';
import { toMs } from '../../utils/formatDate';

export interface EmployeesState {
    totalEmployees: Employee[];
    filteredEmployees: Employee[];
}

const EMPLOYEE_INITIAL_STATE: EmployeesState = {
    totalEmployees: [],
    filteredEmployees: []
}

interface Props {
    children: React.ReactNode
}

export const EmployeesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(EmployeesReducer, EMPLOYEE_INITIAL_STATE);

    const loadEmployees = useCallback(async () => {
        const { data } = await apiMethods.get("/api/v1/employee");
        dispatch({ type: "[Employee] - load employees", payload: data.data });
    }, [])

    const removeEmployee = async (employeeId: number): Promise<void> => {
        await apiMethods.remove(`/api/v1/employee/${employeeId}`);
    }

    const updateEmployee = async (employeeId: number, updateEmployeeBody: any): Promise<void> => {
        await apiMethods.put(`/api/v1/employee/${employeeId}`, updateEmployeeBody);
    }

    const filterEmployee = async (vaccinationState: vaccinatedState, vaccineType: vaccineType, startDate: string, endDate: string) => {

        let filteredEmployees: Employee[] = [];

        state.totalEmployees.forEach(
            (employee: Employee)=> {
                if( employee.vaccinatedState === (vaccinationState) ){
                    filteredEmployees.push(employee);
                }
                if( vaccineType !== -1 && employee.vaccineType == vaccineType ){
                    filteredEmployees.push(employee);
                }
            }
        );

        console.log(filteredEmployees)


        

        // if (vaccineType !== -1) {
        //     console.log('no ')
        //     filteredEmployees = filteredEmployees.filter((employee) => (employee.vaccineType == vaccineType))
        // }

        // if (startDate !== "" && endDate !== "") {
        //     console.log('no')
        //     let preDate = toMs(startDate);
        //     let postDate = toMs(endDate);

        //     filteredEmployees = filteredEmployees.filter(
        //         (employee) => {
        //             if (employee.vaccinationDate) {
        //                 return (toMs(employee.vaccinationDate) > preDate && toMs(employee.vaccinationDate) < postDate);
        //             }
        //             return false;
        //         }
        //     );

        // }

        // console.log(filteredEmployees)
    
    }

    return (
        <EmployeesContext.Provider value={{
            ...state,
            loadEmployees,
            removeEmployee,
            updateEmployee,
            filterEmployee
        }} >
            {children}
        </EmployeesContext.Provider>
    )
}