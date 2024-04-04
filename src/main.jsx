import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Components/Login.jsx'
import ResetPass from './Components/ResetPass.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './styles/index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/ResetPass",
        element: <ResetPass />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
