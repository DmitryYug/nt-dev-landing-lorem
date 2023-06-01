import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";

import {CasesPage} from "./components/blocks/CasesPage";
import {PolicyPage} from "./components/blocks/PolicyPage";
import './index.css';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//     },
//     {
//         path: '/:projectId',
//         element: <CasesPage/>
//     },
//     {
//         path: '/policy',
//         element: <PolicyPage/>
//     }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

