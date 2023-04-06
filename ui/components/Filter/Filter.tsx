import { FC, ChangeEvent } from "react"

import { Box, InputLabel, MenuItem, TextField } from "@mui/material"
import { FilterOptions } from "../../../interfaces";

interface Props {
    name: string;
    value: string | boolean | number;
    label: string;
    options: FilterOptions[];
    onValueChange: ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
}

export const Filter: FC<Props> = ({ name, value, label, options, onValueChange }) => {

  return (
  <Box display="flex" flexDirection="column">
    <InputLabel>
        {label}
    </InputLabel>
    <TextField
        name={name}
        select
        variant="outlined"
        size="small"
        defaultValue={value}
        onChange={onValueChange}
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