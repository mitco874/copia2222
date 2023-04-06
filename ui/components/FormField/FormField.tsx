import { FC } from "react";
import { InputLabel, TextField } from "@mui/material";

interface Props{
    variant: "standard" | "filled" | "outlined" | undefined;
    type: string;
    atributeError: any;
    label:string;
}

export const FormField: FC<Props> = ({ label, variant, type, atributeError }) => {
  return (
    <>
        <InputLabel>
            {label}
        </InputLabel>

        <TextField
        sx={{width:"100%"}}
            variant={variant}
            size="small"
            type={type}
            error={!!atributeError}
            helperText={ atributeError?.message }
            // value={formatDate.dayMonthYearToYearMonthDay(startDate)}
        />
    </>

  )
}
