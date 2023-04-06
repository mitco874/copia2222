import { Box, Typography } from "@mui/material";
import { User } from "../../../interfaces";
import { FC } from "react";

interface Props {
  user: User | null;
}

export const UserProfileInformation: FC<Props> = ({ user }) => {
  return (
    <Box marginX="4%" marginTop="2%">
      <Typography variant="subtitle1">
        <b>Email: </b> {user?.email}
      </Typography>

      <Typography variant="subtitle1">
        <b>Address: </b> {user?.address}
      </Typography>

      <Typography variant="subtitle1">
        <b>phone: </b> {user?.phone}
      </Typography>

      <Typography variant="subtitle1">
        <b>Birthdate: </b> {user?.birthDate}
      </Typography>

      <Typography variant="subtitle1">
        <b>vaccination status: </b>
      </Typography>

      { user?.vaccinatedState ? 
      (
        <Typography variant="subtitle1">
          Vaccinated with <b>{user?.vaccineType}</b> vaccine since:
          <b>{user?.vaccinationDate}</b>
        </Typography>
      ) 
      : 
      (
        <Typography variant="subtitle1">Not vaccinated</Typography>
      )
      }
      
    </Box>
  );
};
