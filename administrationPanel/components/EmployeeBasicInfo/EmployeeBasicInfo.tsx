import { FC } from "react";

import { Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MapIcon from '@mui/icons-material/Map';
import TagIcon from '@mui/icons-material/Tag';

interface Props {
    identityCard: string;
    fullName: string;
    address: string;
}

export const EmployeeBasicInfo: FC<Props> = ({ identityCard, fullName, address }) => {
  return (
    <Box display="block">
        <Box display="flex" flexDirection="row" alignItems="center">
            <TagIcon/>
            <Typography variant="body2"> {identityCard} </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
            <AccountCircleIcon/>
            <Typography variant="body2"> {fullName} </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
            <MapIcon/>
            <Typography variant="body2"> {address} </Typography>
        </Box>
    </Box>
  )
}
