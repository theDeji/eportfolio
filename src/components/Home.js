import React, {useState} from 'react'

import './style.css';
import menu from './img/menu.png'
import twitter from './img/twitter.png'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import mail from './img/mail.png'  
import hire from './img/hire.png' 

const Home = () => {

    const [toggle, setToggle] = useState('True')

    const showMenu = () =>{
        if(toggle === 'False'){
            document.getElementById('menu-hide').className=""
            setToggle()
        }else{
            document.getElementById('menu-hide').className="menu-unhide"
            setToggle('False')
        }
        
    }

    const hireMe = () =>{
        window.location.href = "mailto:emmi2110@gmail.com";
    }

    const navGithub = () =>{
        window.location.href = "http://www.github.com/theDeji";
    }

    const navProjects = () =>{
        window.location.href = "https://github.com/theDeji?tab=repositories";
    }

    const navLinkedin = () =>{
        window.location.href = "https://www.linkedin.com/in/adeniyi-emmanuel-7b2918124";
    }

    const navMail = () =>{
        window.location.href = "mailto:emmi2110@gmail.com";
    }

    const navTwitter = () =>{
        window.location.href = "https://twitter.com/emidee_";
    }

    const navCV = () =>{
        window.location.href = "https://github.com/theDeji/resume/raw/master/CV.pdf"
    }

    const navDesigns = () =>{
        window.open(
            "https://www.figma.com/proto/VLHK4Ah5M9K1s8T5b1VpvH/Untitled?node-id=37%3A17&viewport=66%2C224%2C0.04792235791683197&scaling=min-zoom",
            "_blank"
        )
    }

    return(
        <div className="container">
            <div className="test"></div>
            <header>
                <div className="name">
                    <h4>ADENIYI EMMANUEL</h4>
                    <h6>UI/UX Designer | Software Developer <br/>
                    (234) 815 7123 560 | emmi2110@gmail.com</h6>
                </div>
                <img src={menu} onClick={showMenu}/>
            </header>

            <div className="content">
                <h3>Hi,</h3>
                <h1>I'm Emmanuel</h1>
                <h6>I am a UI/UX Designer and Software Developer. I love designing and building <br/>
                products for solving problems and making the world a better place by helping others.</h6>
                <img src={hire} onClick={hireMe}/>
            </div>

            <div className="socials">
                <img src={github} onClick={navGithub}/>
                <img src={linkedin} onClick={navLinkedin}/>
                <img src={mail} onClick={navMail}/>
                <img src={twitter} onClick={navTwitter}/>
            </div>

            <div id="menu-hide">
                <h4 onClick={navProjects}>Projects</h4>
                <h4 onClick={navDesigns}>Designs</h4>
                <h4 onClick={navCV}>My CV</h4>
            </div>
        </div>
    )

}

export default Home;