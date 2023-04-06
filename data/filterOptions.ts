import { FilterOptions } from "../interfaces"

export const vaccineStatusFilterOptions: FilterOptions[] = [
    {
        value: 'all',
        name: "All"
    },
    {
        value: 0,
        name: "Vaccinated"
    },
    {
        value: 1,
        name: "Not vaccinated"
    }
]

export const vaccineFilterOptions: FilterOptions[] = [
    {
        value: -1,
        name: "All"
    },
    {
        value: 0,
        name: "Sputnik"
    },
    {
        value: 1,
        name: "AstraZeneca"
    },
    {
        value: 2,
        name: "Pfizer"
    },
    {
        value: 3,
        name: " Jhonson&Jhonson"
    }
]

export const vaccineTypeOptions: FilterOptions[] = [
    {
        value: -1,
        name: "NONE"
    },
    {
        value: 0,
        name: "Sputnik"
    },
    {
        value: 1,
        name: "AstraZeneca"
    },
    {
        value: 2,
        name: "Pfizer"
    },
    {
        value: 3,
        name: " Jhonson&Jhonson"
    }
]