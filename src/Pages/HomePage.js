import NavBar from "../Components/Navbar"
import Description from "../Components/Description";
import "../index.css";
import { useState } from 'react';
import ChangesAlert from "../Components/ChangesAlert";

function HomePage (){
    return (
        <>
        <NavBar /> 
        <ChangesAlert/>
        <Description />
        </>

 )
};

export default HomePage;