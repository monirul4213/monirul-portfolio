import React, { useState } from "react";
import "./SkillSection.css";
import Frontend from "./../../Assets/Icon/frontend.png";
import Backend from "./../../Assets/Icon/backend.png";
import Tools from "./../../Assets/Icon/tools.png";
import SoftSkill from "./../../Assets/Icon/softskill.png";

const SkillSection = () => {
  const [title, setTitle] = useState("Tools");
  const [data, SetData] = useState([
    {
      title: "HTML 5",
      value: 95,
    },
    {
      title: "CSS 3",
      value: 90,
    },
    {
      title:'JavaScript',
      value: 85
    },
    {
      title:'React.Js',
      value: 90
    },
    {
      title:'Flutter',
      value: 90
    }
  ]);

  const skillChange = (e, obj) => {
    setTitle(e.target.textContent);
    SetData(obj);
  };

  return (
    <div className="SkillSection">
      <h1>Technical Proficiency</h1>
      <div className="skillBar">
        <div className="gridSection">
          <div
            className="grid"
            onClick={(e) =>
              skillChange(e, [
                {
                  title: "HTML 5",
                  value: 95,
                },
                {
                  title: "CSS 3",
                  value: 90,
                },
                {
                  title:'JavaScript',
                  value: 85
                },
                {
                  title:'React.Js',
                  value: 90
                },
                {
                  title:'Flutter',
                  value: 90
                }
              ])
            }
          >
            <p>Frontend</p>
            <img src={Frontend} />
          </div>
          <div
            className="grid"
            onClick={(e) =>
              skillChange(e, [
                {
                  title: "Node.Js",
                  value: 80,
                },
                {
                  title: "Express.Js",
                  value: 90,
                },
              ])
            }
          >
            <p>Backend</p>
            <img src={Backend} />
          </div>
          <div className="grid" onClick={(e)=>skillChange(e,[
            {
              title:'Git & GitHub',
              value: 75
             },
             {
               title:'Visual Studio Code',
               value: 90
              },
              {
               title:'Responsive Design',
               value: 80
              },
              {
               title:'Framework',
               value: 85
              },
          ])}>
            <p>Tools</p>
            <img src={Tools} />
          </div>
          <div className="grid" onClick={(e)=>skillChange(e,[
             {
              title: "Problem Solving",
              value: 80,
            },
            {
              title: "Collaboration",
              value: 90,
            },
            {
              title: "Attention to Details",
              value: 85,
            }
          ])}>
            <p>Soft Skill</p>
            <img src={SoftSkill} />
          </div>
        </div>

        <div className="tableContainer">
          <div className="MainTable">
            <h3>{title}</h3>
            <hr></hr>
            <div className="progressBar">
              {data.map((skill, idx) => {
                return (
                  <div key={idx}>
                    <h4>{skill.title}</h4>
                    <progress
                      value={skill.value}
                      max="100"
                      className="CustomProgressbar"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
