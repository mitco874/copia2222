import { FC, useEffect, useState} from "react"
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { DateSelector, Selector } from "../../../ui/components";

import "./RegisterVaccinationModal.css"
import dayjs, { Dayjs } from "dayjs";

interface Props {
    isOpen: boolean;
    handleClose?: ()=> void; 
}

const minDate = "2021-05-05";
const maxDate = dayjs().format('YYYY-MM-DD');

export const RegisterVaccinationModal: FC<Props> = ({ isOpen = false, handleClose }) => {

    const [vaccineInfo, setVaccineInfo] = useState({
        idVaccine: -1,
        vaccinationDate: null,
        doses: 0
    })

    const onVaccineInfoChange = ( e: any ) => {
        setVaccineInfo({...vaccineInfo, [e.target.name]: e.target.value});
    }

    const onVaccineDateChange = (newValue: any) => {
        setVaccineInfo({...vaccineInfo, vaccinationDate: newValue});
    }

    useEffect(()=>{
        console.log(vaccineInfo)
    }, [vaccineInfo])

  return (
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <></>
{/* 
        <Grid container 
          className="register-vaccination-modal" 
          width="600px"
          display="flex" 
          padding="20px"
          spacing={1}
        >
            <Grid item xs={8}>
                <Typography variant="h4" component="h2" > 
                    Enter the following data: 
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Selector 
                    label='Vaccine type*:' 
                    name="idVaccine"
                    options={vaccinationTypeOptions} 
                    value={vaccineInfo.idVaccine}
                    onValueChange={onVaccineInfoChange}
                />
            </Grid>

            <Grid item xs={6}>
                <DateSelector
                    label="Vaccination date*:" 
                    name="vaccinationDate"
                    onChange={onVaccineDateChange}
                    minDate={new Date(minDate)}
                    maxDate={new Date(maxDate)}
                />
            </Grid>
            
            <Grid item xs={6}>

                <TextField
                    name="doses"
                    variant="outlined"
                    fullWidth
                    label="Doses"
                    type="number" 
                    inputProps={{ min:1, max:5 }}
                    onChange={onVaccineInfoChange}
                />
            </Grid>

            <Grid item >
                <Button 
                    variant="contained" 
                    size="small"
                    onClick={handleClose}
                >
                    Accept
                </Button>
            </Grid>

            <Grid item display="flex">
                <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleClose}
                    size="small"
                >
                    Cancel
                </Button>
            </Grid>

        </Grid> */}
      </Modal>

  )
}
