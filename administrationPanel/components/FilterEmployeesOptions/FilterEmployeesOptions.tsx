import { Grid } from '@mui/material'
import { ChangeEvent, useContext, useEffect, useState } from "react"

import { FilterOptions, vaccinatedState, vaccineType } from '../../../interfaces'
import { FilterDateRange } from '../../../ui/components'
import { Filter } from '../../../ui/components/Filter/Filter'
import { EmployeesContext } from '../../../context'
import { vaccineFilterOptions, vaccineStatusFilterOptions } from '../../../data'

interface FilterData {
    vaccinationState: vaccinatedState ,
    vaccineType: vaccineType ,
    startDate: string ,
    endDate: string 
}

const initialValues: FilterData={
    vaccinationState: -1,
    vaccineType: -1,
    startDate: "",
    endDate: ""
}

export const FilterEmployeesOptions = () => {

    const [filterForm, setFilterForm] = useState<FilterData>(initialValues);
    
    const { filterEmployee } = useContext(EmployeesContext);

    const onFilterFormChange = ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  ) =>{
        const {name, value} = event.target;
        setFilterForm({...filterForm, [name]: value })
    }

    const onClearRange = () => {
        setFilterForm({...filterForm, startDate: "", endDate: ""});
    }
    
    useEffect(() => {
        filterEmployee( filterForm.vaccinationState, filterForm.vaccineType , filterForm.startDate, filterForm.endDate );
    }, [filterForm])
    
    return (
        <Grid
            container
            spacing={1}
            sx={{ width: '85%' }}
        >
            <Grid item xs={12} sm={5} md={2}>
                <Filter
                    name='vaccinationState'
                    label='Vaccination state:'
                    options={vaccineStatusFilterOptions}
                    value={filterForm.vaccinationState}
                    onValueChange={onFilterFormChange}
                />
            </Grid>
            <Grid item xs={12} sm={5} md={2} >
                <Filter
                    name='vaccineType'
                    label='vaccine type:'
                    options={vaccineFilterOptions}
                    value={filterForm.vaccineType}
                    onValueChange={onFilterFormChange}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={7} >
                <FilterDateRange 
                    startDateValue={filterForm.startDate}
                    endDateValue={filterForm.endDate}
                    onValueChange={onFilterFormChange}
                    onClearRange={onClearRange}
                    />
            </Grid>
        </Grid>

    )
}