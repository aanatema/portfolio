import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import ProjectConsonea from './Pages/ProjectConsonea';
import ProjectChooseYourCareer from './Pages/ProjectChooseYourCareer';
import ProjectSecretSanta from './Pages/ProjectKindGlyphs';
import ProjectPicoResto from './Pages/ProjectPicoResto';


//gère l'application
export default function App(){
  return(
    //on va créer les différentes routes afin de lier les pages entre elles
    <BrowserRouter>
      <Routes>
        {/* on créé le chemin par défaut "/", celui sur lequel on va automatiquement tomber quand on ouvre la page  */}
        <Route path="/" element={<Navigate to="/home_page" replace />} /> 
        {/* on défini que l'url /home_page renvoie vers l'élément <Home /> */}
        <Route path="home_page" element={<Home /> }/> 
        <Route path="about" element={<About /> }/> 
        <Route path="contact" element={<Contact /> }/> 
        <Route path="projects" element={<Projects /> }/> 
        <Route path="resume" element={<Resume /> }/> 
        {/* routes vers les détails des projets */}
        <Route path="projects/consonea" element={<ProjectConsonea /> }/> 
        <Route path="projects/choose_your_career" element={<ProjectChooseYourCareer /> }/> 
        <Route path="projects/kind_glyphs" element={<ProjectSecretSanta /> }/> 
        <Route path="projects/pico_resto" element={<ProjectPicoResto /> }/> 

      </Routes>
    </BrowserRouter>


  )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
