import {Route, Routes} from "react-router-dom";
import {CasesPage} from "../components/blocks/CasesPage";
import App from "../App";

export function AppRouter() {
    return (
        <Routes>
            <Route path={'/nt-dev-landing-lorem'} element={<App/>}/>
            <Route path={'/:projectId'} element={<CasesPage/>}/>
        </Routes>
    );
}
