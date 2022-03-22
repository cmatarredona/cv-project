import React from "react";
import GenericInput from "./GenericInput";
const PracticalExperience=()=>{
    return(
        <React.Fragment>
            <h1>Experiencia práctica</h1>
            <GenericInput placeholder="Nombre de la empresa"></GenericInput>
            <GenericInput placeholder="Título del puesto"></GenericInput>
            <GenericInput placeholder="Tareas principales"></GenericInput>
            <GenericInput tipo="date" placeholder="Fecha inicio"></GenericInput>
            <GenericInput tipo="date" placeholder="Fecha fin"></GenericInput>
        </React.Fragment>
    );
}
export default PracticalExperience;