import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import ResetPass from './routes/ResetPass';
import NotFound from './routes/NotFound';
import Dashboar from "./routes/Dashboar"; // Corrige la importación a Dashboar
import Reset from "./routes/Reset";
import LogOut from "./routes/LogOut";
import InitialQuestions from "./routes/InitialQuestions";
import MoodMonitoring from "./routes/MoodMonitoring";
import HabitQuestions from "./routes/HabitQuestions";
import QuestionsForHabits from "./components/PreguntasHabitos/QuestionsForHabits";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/** ruta de inicio de la app */}
        <Route path="/ResetPass" element={<ResetPass />} />
        {/** ruta para enlace a cambio de password */}
        <Route path="/ResetPassword" element={<Reset />} />
        {/** ruta para enlace a cambio de password */}
        <Route path="/Dashboar" element={<Dashboar />} /> {/* Corrige la ruta a Dashboard */}
        {/** ruta para enlace a el dashboard */}
        <Route path='/Encuesta' element={<InitialQuestions />} />
        {/** ruta para la encuesta inicial*/}
        <Route path="/MoodMonitoring" element={<MoodMonitoring />} />
        {/** ruta para el seguimiento animico*/}
        <Route path="/HabitQuestions" element={<HabitQuestions />} />
        {/** ruta para las preguntas de hábitos */}
        <Route path="/QuestionsForHabits" element={<QuestionsForHabits />} />
        {/** ruta para el componente QuestionsForHabits */}
        <Route path="/time-out" element={<LogOut />} />
        {/** ruta para cerrar sesion */}
        <Route path='*' element={<NotFound />} />
        {/** ruta de manejo de error */}
      </Routes>
    </Router>
  )
}

export default App;
