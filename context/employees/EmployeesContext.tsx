import { createContext } from 'react';
import { Employee, vaccinatedState, vaccineType } from '../../interfaces';

interface ContextProps{
    employees: Employee[];
    loadEmployees: () => Promise<void>;
    removeEmployee: (employeeId: number) => Promise<void>;
    updateEmployee: (employeeId: number, updateEmployeeBody: any) => Promise<void>;   
    filterEmployee: (vaccinationState: vaccinatedState, vaccineType: vaccineType, startDate: string, endDate: string) => Promise<void>
}

export const EmployeesContext =createContext({} as ContextProps );