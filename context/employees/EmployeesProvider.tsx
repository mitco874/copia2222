import { FC, useCallback, useReducer } from 'react';
import { EmployeesContext, EmployeesReducer } from '../';
import { Employee, vaccinatedState, vaccineType } from '../../interfaces';
import { apiMethods } from '../../utils';

export interface EmployeesState {
    employees: Employee[];
}

const EMPLOYEE_INITIAL_STATE: EmployeesState={
    employees: []
}

interface Props{
     children: React.ReactNode
}

export const EmployeesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( EmployeesReducer, EMPLOYEE_INITIAL_STATE );

    const loadEmployees = useCallback(async() => {
        const { data } = await apiMethods.get("/api/v1/employee");
        dispatch({ type: "[Employee] - load employees" , payload: data.data});
    } ,[])

    const removeEmployee = async( employeeId: number ): Promise<void>=> {
        await apiMethods.remove(`/api/v1/employee/${employeeId}`);
    }

    const updateEmployee = async( employeeId: number, updateEmployeeBody: any): Promise<void>=> {
        await apiMethods.put(`/api/v1/employee/${employeeId}`,updateEmployeeBody);
    }

    const filterEmployee = async( vaccinationState: vaccinatedState, vaccineType: vaccineType , startDate: string, endDate: string )=>{

        let query: string = '';
        let url: string = '';
        
        if(vaccinationState){
            query=query + `vac-state=${vaccinationState}&`
        }

        if(vaccineType){
            query=query + `vac-type=${vaccineType}&`
        }

        if(startDate !=="" && endDate !== ""){
            query=query + `start-date=${startDate}&end-date=${endDate}`
        }
 
        if(query.length>0){
            url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/employee?${query}`
        }
        else{
            url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/employee`
        }
        console.log(url)
        //const { data } = await apiMethods.get(url);
        //dispatch({ type: "[Employee] - load employees" , payload: data.data});
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