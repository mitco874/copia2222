import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import "./MissingInformationWarning.css";


export const MissingInformationWarning = () => {
  return (
    <Alert className='missing-information-alert' severity="warning">
        It seems that information is missing to fill in, <Link to="/update-profile">click here</Link> to complete your profile information
    </Alert>
  )
}
