import { useState } from "react";

function Skills(){
    const [skills, setSkills] = useState([])
    const handleSkills = (event) =>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])

        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)]);
        }
    }

    
    return (
        <div>
           <h3>Select your skills</h3>
           <input onChange={handleSkills} type="checkbox" id="php" value="php" />
           <label htmlFor="php">PHP</label>
           <br />

           <input onChange={handleSkills} type="checkbox" id="node" value="node" />
           <label htmlFor="node">node</label>
           <h1>{skills.toString()}</h1>

        </div>
    )
}
export default Skills;

Skills fil;e

import Skills from "./Skills";

function App(){
  return (
    <div>
      <h1>Learning checkbox in react js</h1>
      <Skills />
    </div>
  )
}
export default App;
