import { useState } from "react";
import EducationExperience from "./Components/EducationExperience";
import PersonalInfo from "./Components/PersonalInfo";
import PracticalExperience from "./Components/PracticalExperience";

function App() {
  const [numEducation,addEducation]=useState([""]);
  const [numWork,addWork]=useState([""]);
  return (
    <div className="App">
      <PersonalInfo></PersonalInfo>
      {numEducation.map(()=>{
        return <EducationExperience></EducationExperience>
      })}
      <button onClick={()=>{addEducation([...numEducation,""])}}>Añadir más</button>
      {numWork.map(()=>{
        return <PracticalExperience></PracticalExperience>
      })}
      <button onClick={()=>{addWork([...numWork,""])}}>Añadir más</button>
    </div>
  );
}

export default App;
