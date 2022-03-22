import "./forms.css";
const GenericInput=({tipo="text",placeholder})=>{
    return(
        <input type={tipo} placeholder={placeholder}></input>
    );
}
export default GenericInput;