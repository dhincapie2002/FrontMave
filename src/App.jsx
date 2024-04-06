import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import ResetPass from './routes/ResetPass'
import NotFound from './routes/NotFound'
import Dashboar from "./routes/Dashboar";
import Reset from "./routes/Reset";
import LogOut from "./routes/LogOut";

//  modulo de maneejo de rutas de la aplicación
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/** ruta de inicio de la app */}
                <Route path="/ResetPass" element={<ResetPass />} /> {/** ruta para enlace a cambio de password */}
                <Route path="/ResetPassword" element={<Reset />} /> {/** ruta para enlace a cambio de password */}
                <Route path="/Dashboar" element={<Dashboar />} /> {/** ruta para enlace a el dashboard */}
                <Route path="/time-out" element={<LogOut />} /> {/** ruta para cerrar sesion */}
                <Route path='*' element={<NotFound />} /> {/** ruta de manejo de error */}
            </Routes>
        </Router>
    )
}

export default App;