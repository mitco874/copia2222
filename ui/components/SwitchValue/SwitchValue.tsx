import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    isActive: boolean;
    onChange: (event: React.MouseEvent<HTMLElement>, newState: boolean) => void;
}

export const SwitchValue:FC<Props> = ({ isActive, onChange }) => {
  return (
        <ToggleButtonGroup 
            size="small" 
            value={isActive} 
            onChange= {onChange} 
            exclusive={true}
        >

        <ToggleButton value={true}>
            <Typography variant="body1"> Yes </Typography>
        </ToggleButton>

        <ToggleButton value={false}>
            <Typography> No </Typography>
        </ToggleButton>

    </ToggleButtonGroup>
  )
}
