import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import ResetPass from "./routes/ResetPass";
import NotFound from "./routes/NotFound";
import Dashboard from "./routes/Dashboard"; // Corrige la importación a Dashboar
import Reset from "./routes/Reset";
import LogOut from "./routes/LogOut";
import InitialQuestions from "./routes/InitialQuestions";
import MoodMonitoring from "./routes/MoodMonitoring";
import HabitQuestions from "./routes/HabitQuestions";
import QuestionsForHabits from "./components/PreguntasHabitos/QuestionsForHabits";
import Graphics from "./routes/Graphics";
import GraphicsInitial from "./components/Graphics/GraphicsInitial";
import GraphicsMood from "./components/Graphics/GraphicsMood";
import Nav from "./components/Navbar";
import Texts from "./routes/Texts";
import Creation from "./components/Articles/Creation";
import Update from "./components/Articles/Update";
import OneArticle from "./components/Articles/OneArticle"

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
        <Route path="/Dashboard" element={<Dashboard />} />{" "}
        {/* Corrige la ruta a Dashboard */}
        {/** ruta para enlace a el dashboard */}
        <Route path="/Encuesta" element={<InitialQuestions />} />
        {/** ruta para la encuesta inicial*/}
        <Route path="/MoodMonitoring" element={<MoodMonitoring />} />
        {/** ruta para el seguimiento animico*/}
        <Route path="/Habitos" element={<HabitQuestions />} />
        {/** ruta para las preguntas de hábitos */}
        <Route path="/QuestionsForHabits" element={<QuestionsForHabits />} />
        {/** ruta para el componente QuestionsForHabits */}
        <Route path="/Graphics" element={<Graphics />} />
        {/** ruta para el componente QuestionsForHabits */}
          <Route path="/GraphicsInitial" element={<GraphicsInitial />} />
          {/** ruta para el componente GraphicsInitial */}
          <Route path="/GraphicsMood" element={<GraphicsMood />} />
          {/** ruta para el componente GraphicsMood */}
        <Route path="/Texts" element={<Texts />} />
        {/** ruta para los Textos */}
          <Route path="/Creation" element={<Creation />} />
          {/** ruta para el componente Creation */}
          <Route path="/Update" element={<Update />} />
          {/** ruta para el componente Update */}
          <Route path="/OneArticle/:id" element={<OneArticle />} />
          {/** ruta para el componente OneArticle con un parámetro de ID*/}
        <Route path="/time-out" element={<LogOut />} />
        {/** ruta para cerrar sesion */}
        <Route path="*" element={<NotFound />} />
        {/** ruta de manejo de error */}
        <Route path="/Nav" element={<Nav />} />
      </Routes>
    </Router>
  );
};

export default App;
