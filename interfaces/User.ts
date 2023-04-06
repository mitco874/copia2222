export interface User {
    id: number;
    fullName: string;
    identityCard: number; 
    email: string;
    birthDate: string;    
    address: string;
    phone: string;
    vaccinatedState: vaccinatedState;
    vaccineType: vaccineType;
    vaccinationDate: string | null;  
    doses: number | null;
}
export type vaccinatedState = boolean | string;

export type vaccineType = "Sputnik" | "AstraZeneca" | "Pfizer" | "Jhonson&Jhonson" | -1;