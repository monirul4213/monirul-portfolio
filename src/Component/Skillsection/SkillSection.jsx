import React from "react";
import "./SkillSection.css";
import Frontend from "./../../Assets/Icon/frontend.png";
import Backend from "./../../Assets/Icon/backend.png";
import Tools from "./../../Assets/Icon/tools.png";
import SoftSkill from "./../../Assets/Icon/softskill.png";


const SkillSection = () => {
  
  
    
  return (
    <div className="SkillSection">
      <h1>Technical Proficiency</h1>
      <div className="skillBar">
        <div class="gridSection">
          <div className="grid">
            <p>Frontend</p>
            <img src={Frontend} />
          </div>
          <div className="grid">
            <p>Backend</p>
            <img src={Backend} />
          </div>
          <div className="grid">
            <p>Tools</p>
            <img src={Tools} />
          </div>
          <div className="grid">
            <p>Soft Skill</p>
            <img src={SoftSkill} />
          </div>
        </div>
        <div className="skillsBar"></div>
        <div className="tableContainer">
         <div className="MainTable">
           <h3>Tools</h3>
           <hr></hr>
         <div className="progressBar">
          <h4>Git & GitHub</h4>
         <progress value={75} max={100} className="CustomProgressbar" />
         <h4>Visual Studio Code</h4>
         <progress value={90} max={100} className="CustomProgressbar" />
         <h4>Responsive Desine</h4>
         <progress value={80} max={100} className="CustomProgressbar" />
         <h4>Framework</h4>
         <progress value={86} max={100} className="CustomProgressbar" />
         </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
