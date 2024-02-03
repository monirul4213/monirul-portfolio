import React from 'react';
import Monirul from './../../Assets/images/monirul.png'
import './HeroSection.css'
import ReatIcon from './../../Assets/Icon/react.png'
import HtmlIcon from './../../Assets/Icon/html.png'
import CssIcon from './../../Assets/Icon/css.png'
import NodejsIcon from './../../Assets/Icon/nodejs.png'
import FlutterIcom from './../../Assets/Icon/flutter.png'
import DartIcon from './../../Assets/Icon/dart.png'
import SkillSection from '../Skillsection/SkillSection';


const HeroSection = () => {
    return (
        <div>
          <div className='heroSection'>
               <img className='monirul' src={Monirul}/>
              <div className="textSection">
                <h1>Building Digital<br></br>Experiences That<br></br>Inspire</h1>
                <p>Passionate Full Stack Developer | Transforming Ideas<br></br>
                into seamless and visually Stunnign Web Solution
                </p>
                <div className="iconDiv">
                <img className='reactIcon' src={ReatIcon}/>
                <img className='reactIcon' src={HtmlIcon}/>
                <img className='reactIcon' src={CssIcon}/>
                <img className='reactIcon' src={NodejsIcon}/>
                <img className='reactIcon' src={FlutterIcom}/>
                <img className='reactIcon' src={DartIcon}/>
                
                </div>
              </div>
  
        </div>
         <SkillSection/>
        </div>
       
    );
};

export default HeroSection;