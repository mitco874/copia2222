import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";

import { RegisterVaccinationModal } from "../../components/RegisterVaccinationModal/RegisterVaccinationModal";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { DateSelector, Selector } from "../../../ui/components";
import dayjs, { Dayjs } from 'dayjs';
import isBetween from "dayjs/plugin/isBetween"
import { UserContext } from "../../../context";
import { put } from "../../../utils/apiMethods";
import "./UpdateProfilePage.css"
import { vaccineTypeOptions } from "../../../data";

import {DisabledByDefault} from '@mui/icons-material';

type FormData = {
  birthdate: Dayjs | null;
  address: string;
  phone: string;
  vaccinated: boolean | null | number; //

  idVaccine?: number;
  vaccinationDate?: Dayjs | null;
  doses?: number;
}

const minDate = "1960-01-01";
const maxDate = "2005-01-01";


export const UpdateProfilePage = () => {

  const { user } = useContext(UserContext);

  const initialFormValues: FormData = user ? {
    birthdate: dayjs(user.birthDate),
    address: user.address,
    phone: user.phone,
    vaccinated: user.vaccinatedState as boolean,
  } : {
    birthdate: null,
    address: "",
    phone: "",

    vaccinated: false,
    idVaccine: -1,
    vaccinationDate: null,
    doses: 0
  }

  const { register, handleSubmit, formState: { errors }, setValue, } = useForm<FormData>({ defaultValues: initialFormValues });
  const [hasUpdateError, setHasUpdateError] = useState<boolean>(false);

  const [showVaccinationForm, setShowVaccinationForm] = useState(false);


  const onDateChange = (newValue: any) => {
    setValue("birthdate", newValue)
  }

  const onVaccinationDateChange = (newValue: any) => {
    setValue("vaccinationDate", newValue);
}

  const onRegisterVaccinationInfo = (values: any) => {
    console.log(values)
  }

  const { onBlur, ref } = register('birthdate');

  const onSubmitLogin = async (data: FormData) => {
    if (data.birthdate?.isValid() && data.birthdate?.isBetween(minDate, maxDate, 'day', '[)')) {
      try {
        let body = {
          birthdate: data.birthdate.format('DD-MM-YYYY'),
          address: data.address,
          phone: data.phone,
          vaccinated: false
        }

        if (data.idVaccine && data.idVaccine >= 0) {
          let userVaccinatedBody = {
            ...body,
            vaccinated: true,
            idVaccine: data.idVaccine,
            vaccinationDate: data.vaccinationDate!.format('DD-MM-YYYY'),
            doses: data.doses
          }
          console.log('subido con ...')
          await put(`/api/v1/employee/${user?.id}/update-additional-information`, userVaccinatedBody);
          return;
        }
        console.log('subido sin ...')
        await put(`/api/v1/employee/${user?.id}/update-additional-information`, body);

      } catch (error) {
        setHasUpdateError(true);
      }
    }
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      marginTop="10px"
    >

      <Typography
        variant="h3"
        component="h1"
        margin="auto"
        marginY="10px"
      > Update profile information</Typography>

      {
        hasUpdateError &&
        (
          <Alert severity="error" className="update-user-error-alert">
            User information cannot be updated, check the input values
          </Alert>
        )
      }

      <form
        className="register-employee-form"
        noValidate
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <Box display="flex" flexDirection="column" width="40%" margin="auto">

          <DateSelector
            label="Birth date*:"
            {...register("birthdate", {
              required: "This field is required",
            })}
            name="birthdate"
            onBlur={onBlur}
            onChange={onDateChange}
            ref={ref}
            minDate={new Date(minDate)}
            maxDate={new Date(maxDate)}
            hasError={!!errors.birthdate}
            helperText={errors.birthdate?.message}
          />

          <TextField
            label="Address*:"
            variant="outlined"
            type="text"
            {...register("address", {
              required: "This field is required",
            })}
            error={!!errors.address}
            helperText={errors.address?.message}
          />

          <TextField
            label="Phone*:"
            variant='outlined'
            type="text"
            {...register("phone", {
              required: "This field is required",
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />


          {
            !showVaccinationForm ?
            (
              <Button
              startIcon={<MedicalInformationIcon />}
              type="submit"
              variant="outlined"
              color="info"
              onClick={()=>{setShowVaccinationForm(true)}}
            >
              Add immunization record
            </Button>
            )
            :
            (
              <Grid
                container
                display="flex"
                spacing={1}
                marginTop="10px"
              >
                <Grid item margin="auto">
                  <Button
                  startIcon={<DisabledByDefault/>}
                    className="cancel-vaccination-register-btn"
                    variant="outlined"
                    color="error"
                    onClick={()=>{setShowVaccinationForm(false)}}

                  >
                    Cancel vaccination register
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Selector
                    label='Vaccine type*:'
                    {...register("idVaccine", {
                      required: "This field is required",
                    })}
                    options={vaccineTypeOptions}
                    onValueChange={(a: any)=>{}}
                  />
                </Grid>

                <Grid item xs={6}>
                  <DateSelector
                    label="Vaccination date*:"
                    {...register("vaccinationDate", {
                      required: "This field is required",
                    })}
                    name="vaccinationDate"
                    onChange={onVaccinationDateChange}
                    minDate={new Date(minDate)}
                    maxDate={new Date(maxDate)}
                    hasError={!!errors.vaccinationDate}
                    helperText={errors.vaccinationDate?.message}
                  />

                </Grid>

                <Grid item xs={6}>

                  <TextField
                    label="Doses"
                    type="number"
                    variant="outlined"
                    {...register("doses", {
                      required: "This field is required",

                    })}
                    fullWidth
                    inputProps={{ min: 1, max: 5 }}
                    error={!!errors.doses}
                    helperText={errors.doses?.message}
                  />
                </Grid>


              </Grid>
            )
          }

          <Box marginTop="20px" marginX="auto">
            <Button type="submit" variant="contained">
              Update Information
            </Button>
          </Box>
        </Box>
      </form>



    </Box>
  )
}
