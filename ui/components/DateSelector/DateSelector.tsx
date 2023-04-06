import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateValidationError } from '@mui/x-date-pickers/models';

import { FC } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { ChangeHandler, RefCallBack } from 'react-hook-form';


interface Props {
  label: string;
  name?: string;
  onChange?: (newValue: any) => void;
  onBlur?: ChangeHandler,
  minDate: Date;
  maxDate: Date;
  ref?: RefCallBack;
  hasError: boolean;
  helperText?: string
}

export const DateSelector: FC<Props > = ({label, name, onChange, minDate, maxDate, ref, hasError, helperText}) => {

  const [error, setError] = React.useState<DateValidationError | null>(null);

  const errorMessage = React.useMemo(() => {
    switch (error) {
      case 'maxDate':{
        return `Please select a date before ${maxDate}`;
      }

      case 'minDate': {
        return `Please select a date after ${minDate}`;
      }

      case 'invalidDate': {
        return 'Your date is not valid';
      }

      default: {
        return '';
      }
    }
  }, [error]);

  return (

      <DatePicker
          label={label}
          onChange={onChange}
          minDate={dayjs(minDate.toISOString())}
          maxDate={dayjs(maxDate.toISOString())}
          onError={(newError) => setError(newError)}
          slotProps={{
            textField: {
              error: hasError || errorMessage.length>0,
              name,
              helperText: errorMessage.length>0 ? errorMessage :helperText ,
              ref
            },
          }}
        />

  );
}