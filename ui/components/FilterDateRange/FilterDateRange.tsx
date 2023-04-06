import { Button, Grid, InputLabel, TextField } from '@mui/material';
import { FC } from 'react';

interface Props {
    onValueChange?: (e: any) => void;
    startDateValue: string;
    endDateValue: string;
    onClearRange: () => void;
}

export const FilterDateRange: FC<Props> = ({ onValueChange, startDateValue, endDateValue, onClearRange }) => {

    return (
        <Grid container spacing={1}  >

            <Grid item xs={4}>
                <InputLabel>
                    Start date:
                </InputLabel>
                <TextField
                    name="startDate"
                    variant="outlined"
                    size="small"
                    type="date"
                    onChange={onValueChange}
                    fullWidth
                    value={(startDateValue)}
                />
            </Grid>

            <Grid item xs={4}>
                <InputLabel>
                    End date:
                </InputLabel>
                <TextField
                    name="endDate"
                    type="date"
                    variant="outlined"
                    size="small"
                    onChange={onValueChange}
                    fullWidth
                    value={(endDateValue)}
                />
            </Grid>

            <Grid item xs={4} marginTop={"34px"} > 
                <Button
                    variant='contained'
                    onClick={onClearRange}
                >
                    clear date
                </Button>
            </Grid>

        </Grid>
  )
}