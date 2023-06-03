import {Route, Routes} from "react-router-dom";
import {CasesPage} from "../components/blocks/CasesPage";
import App from "../App";

export function AppRouter() {
    return (
        <Routes>
            <Route path={'/:projectId'} element={<CasesPage/>}/>
            <Route path={'/'} element={<App/>}/>
        </Routes>
        // <Routes>
        //     {Object.values(routes).map(({path, element}) => (
        //         <Route
        //             key={path}
        //             path={path}
        //             element={(
        //                 <div className="page-wrapper">
        //                     {element}
        //                 </div>
        //             )}
        //         />
        //     ))}
        // </Routes>
    );
}
