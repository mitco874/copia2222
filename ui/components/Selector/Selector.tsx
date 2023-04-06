import { FC, ChangeEvent } from "react"

import { Box, InputLabel, MenuItem, TextField } from "@mui/material"
import { FilterOptions } from "../../../interfaces";

interface Props {
    name?: string; 
    value?: string | number;
    label: string | number;
    options: FilterOptions[];
    onValueChange: ( newValue: any) => void;

}

export const Selector: FC<Props> = ({ name, value, label, options, onValueChange }) => {

    const updateValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        onValueChange(event.target.value);
    }
    
  return (
  <Box display="flex" flexDirection="column">

    <TextField
        label={label}
        select
        name={name}
        variant="outlined"
        size="small"
        defaultValue={value}
        onChange={updateValue}
    >
        {
        options.map(
            (option, index)=>(
                <MenuItem key={index} value={option.value} >
                    {option.name}
                </MenuItem>
        ))
        }

    </TextField>
  </Box>

  )
}