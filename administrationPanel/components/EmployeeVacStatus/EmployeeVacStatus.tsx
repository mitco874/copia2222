import { FC } from "react"
import { Chip } from "@mui/material"


interface Props {
    status: boolean
}

export const EmployeeVacStatus: FC<Props> = ({ status = false }) => {
    if( status ){
        return <Chip color="success" label="Vaccinated" variant='outlined' />
    }

    return <Chip color="error" label="Not vaccinated" variant='outlined' />
}
