import React from "react";
import GenericInput from "./GenericInput";

const EducationExperience=()=>{
    return(
        <React.Fragment>
            <h1>Educational experience</h1>
            <GenericInput placeholder="Escuela"></GenericInput>
            <GenericInput placeholder="Título del estudio"></GenericInput>
            <GenericInput tipo="date" placeholder="Fecha del estudio"></GenericInput>
        </React.Fragment>
    );
}
export default EducationExperience;