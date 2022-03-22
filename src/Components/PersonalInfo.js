import React from "react";
import GenericInput from "./GenericInput";
const PersonalInfo=()=>{
    return(
        <React.Fragment>
            <h1>Personal information</h1>
            <GenericInput placeholder="Nombre"></GenericInput>
            <GenericInput placeholder="Apellidos"></GenericInput>
            <GenericInput tipo="email" placeholder="Correo electrónico"></GenericInput>
        </React.Fragment>
    );
}
export default PersonalInfo;