import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import SkillSection from "./Component/Skillsection/SkillSection";

function App() {
  return (
     
       <div className="container">
          <BrowserRouter>
         <Navbar/>
            <Routes>
               <Route path="/" element={<HeroSection/>}/>
               <Route path="/skill" element={<SkillSection/>}/>
            </Routes>
         </BrowserRouter>
       </div>
     
  );
}

export default App;
