import { FC } from "react";
import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from "../auth/routes";
import { EmployeePanelRoutes } from "../employeePanel/routes";
import { AdministrationPanelRoutes } from "../administrationPanel/routes/AdministrationPanelRoutes";

export const AppRouter: FC = () => {
    return (
        <>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes/>} />
                <Route path="/panel/*" element={<AdministrationPanelRoutes/>} />
                <Route path="/*" element={<EmployeePanelRoutes/>} />
            </Routes>
        </>
    )
}
