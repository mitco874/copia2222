import { Sidebar, SubMenu, Menu } from "react-pro-sidebar";
import { Box, Divider } from "@mui/material";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { ProfileMenuItem, SideBarItem } from "../../../ui/components";
import "./AdministrationSideBar.css"


export const AdministrationSideBar = () => {

    return (
        <Sidebar
            backgroundColor="#FDF5E6"
            style={{ height: "100vh", display: "flex", flexDirection: "column" }}
            width={"100%"}
        >
            <Menu>

                <ProfileMenuItem />
                <Divider />

                <SideBarItem
                    title="Dashboard"
                    to="/panel/home"
                    icon={<HomeOutlinedIcon color="info" />}
                />

                <SubMenu
                    className="submenu-title"
                    label="Employees"
                    icon={<PersonOutlineOutlinedIcon color="info" />}
                >
                    <Box >
                        <Divider />
                        <SideBarItem
                            title="Register"
                            to="/panel/register-employee"
                            icon={<PersonAddAltIcon color="info" />}
                        />

                        <SideBarItem
                            title="Review"
                            to="/panel/employees"
                            icon={<TocOutlinedIcon color="info" />}
                        />
                        <Divider />
                    </Box>
                    
                </SubMenu>
                <Divider/>

            </Menu>
        </Sidebar>
    )
};