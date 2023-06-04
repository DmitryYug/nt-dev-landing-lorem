import {Route, Routes} from "react-router-dom";
import {CasesPage} from "../components/blocks/CasesPage";
import App from "../App";
import {PolicyPage} from "./blocks/PolicyPage";

export function AppRouter() {
    return (
        <Routes>
            <Route path={'/nt-dev-landing-lorem'} element={<App/>}/>
            <Route path={'/policy'} element={<PolicyPage/>}/>
            <Route path={'/:projectId'} element={<CasesPage/>}/>
        </Routes>
    );
}
