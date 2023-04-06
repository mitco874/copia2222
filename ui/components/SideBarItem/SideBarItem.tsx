import { FC } from "react";
import { MenuItem } from "react-pro-sidebar";
import { useLocation, useNavigate } from "react-router";

import { Typography } from "@mui/material";

import "./SideBarItem"

interface Props{
    title: string;
    to: string;
    icon: React.ReactNode;
}

export const SideBarItem: FC<Props> = ({ title, to, icon }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const onChangePage = () => {
      navigate(to);
    }

    return (
      <MenuItem

        onClick={onChangePage}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
  };