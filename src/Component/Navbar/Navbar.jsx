import React, { useState }  from 'react';
import { useEffect } from 'react';
import Logo from './../../Assets/images/logo.png'
import MenuButton from './../../Assets/images/menu.svg'
import './Navbar.css'

const Navbar = () => {
    const [data,setData] = useState(false)

    const toogleMenu = () =>{
        setData(!data)
    }

    //choose the screen size 
const handleResize = () => {
    if (window.innerWidth < 770) {
        setData(false)
    } else {
        setData(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

    if(data==false){
        return (
            <div>
                <div className='Navbar'>
                <img className='imgContainer' src={Logo}/>
                <div className='ulButton'>
                <ul className='ulContainer'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Work Experience</li>
                    <li>Contact Me</li>
                </ul>
                <button className='btn'>Hire Me</button>
                </div>
                
                <img onClick={toogleMenu} className="menuButton" src={MenuButton}/>
                
            </div>
            <hr className='hr'></hr>
            </div>
        );

    }
    else{
        return (
            <div className='Navbar'>
                <img className='imgContainer' src={Logo}/>
                <div className='MobileulButton'>
                <ul className='MobileulContainer'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Work Experience</li>
                    <li>Contact Me</li>
                </ul>
                
                </div>
                
                <img onClick={toogleMenu} className="menuButton" src={MenuButton}/>
                
            </div>
        );
    }
};

export default Navbar;