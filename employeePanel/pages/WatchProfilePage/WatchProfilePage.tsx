import { Alert, Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../context";
import "./WatchProfilePage.css";
import { MissingInformationWarning, UserPhoto, UserProfileInformation } from "../../components";


export const WatchProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Typography variant="h3" component="h1" margin="auto" marginY="10px">
        My Profile
      </Typography>

    {
        !user?.address &&
        <MissingInformationWarning />
    }

      <Card className="profile-card">
        <CardContent>
          <Grid container>

            <Grid xs={12} sm={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <UserPhoto/>
                <Typography variant="h2"> {user?.fullName} </Typography>
                <Typography variant="body1"> {user?.identityCard} </Typography>
              </Box>
            </Grid>

            <Grid xs={12} sm={8}>
              <Typography variant="h3">Profile information</Typography>
              <Divider />
              <UserProfileInformation user={user} />  
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
