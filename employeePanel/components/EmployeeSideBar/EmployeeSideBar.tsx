import {  Box, Divider, Typography } from "@mui/material";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { SideBarItem } from "../../../ui/components";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export const EmployeeSideBar = () => {

    return (
        <Sidebar 
        backgroundColor="white" 
        style={{height:"100%"}} 
        width={"100%"}
        >   
            <Menu>
                <MenuItem className="user-data">
                    <Typography variant="h5" ></Typography>
                    <Typography variant="h6" ></Typography>
                </MenuItem>
                
                <Divider/>

            <SideBarItem
                title="Home"
                to="/"
                icon={<HomeOutlinedIcon color="info"/>}
            />

            <SubMenu
                className="submenu-title"       
                label="My Profile"  
                icon={<AccountBoxOutlinedIcon color="info" />} 
            >   
                <Box >
                <Divider/>
                    <SideBarItem
                        title="My information"
                        to="/watch-profile"
                        icon={<BadgeOutlinedIcon color="info" />}
                    />

                    <SideBarItem
                        title="Edit Information"
                        to="/update-profile"
                        icon={<BorderColorOutlinedIcon color="info" />}
                    /> 
                <Divider/> 
                </Box>
            </SubMenu>

            </Menu>
        </Sidebar>
    )
};