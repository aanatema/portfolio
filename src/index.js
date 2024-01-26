import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/HomePage';
import Contact from './Pages/Contact';
import Updates from './Pages/Updates';
import Projects from './Pages/Projects';
import ProjectConsonea from './Pages/ProjectConsonea';
import ProjectChooseYourCareer from './Pages/ProjectChooseYourCareer';
import ProjectSecretSanta from './Pages/ProjectKindGlyphs';
import ProjectPicoResto from './Pages/ProjectPicoResto';
import ProjectPortfolio from './Pages/ProjectPortfolio';
import ProjectSpotsAndPotes from './Pages/ProjectSpotsAndPotes';

//gère l'application
export default function App(){
  return(
    //création des différentes routes du site
    <BrowserRouter>
      <Routes>
        {/* le chemin par défaut "/" = accueil, page sur laquelle on tombe en premier, ici on renvoi vers "/accueil*/}
        <Route path="/" element={<Navigate to="/accueil" replace />} /> 
        {/* on défini que l'url /home_page renvoie vers l'élément <Home /> */}
        <Route path="accueil" element={<Home /> }/> 
        <Route path="updates" element={<Updates /> }/> 
        <Route path="contact" element={<Contact /> }/> 
        <Route path="projects" element={<Projects /> }/> 
        
        {/* route vers la liste des dernieres modifications apportées au site */}
        <Route path="updates" element={<Updates />}/>

        {/* routes vers les détails des projets */}
        <Route path="projects/consonea" element={<ProjectConsonea /> }/> 
        <Route path="projects/choose_your_career" element={<ProjectChooseYourCareer /> }/> 
        <Route path="projects/kind_glyphs" element={<ProjectSecretSanta /> }/> 
        <Route path="projects/pico_resto" element={<ProjectPicoResto /> }/> 
        <Route path="projects/portfolio" element={<ProjectPortfolio /> }/> 
        <Route path="projects/spots_and_potes" element={<ProjectSpotsAndPotes /> }/> 
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
