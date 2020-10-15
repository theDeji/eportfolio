import React from 'react'

import './style.css';
import menu from './img/menu.png'
import twitter from './img/twitter.png'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import mail from './img/mail.png'  
import hire from './img/hire.png' 

const Home = () => {

    const showMenu = () =>{

    }

    const hireMe = () =>{

    }

    const navGithub = () =>{

    }

    const navLinkedin = () =>{

    }

    const navMail = () =>{

    }
    return(
        <div className="container">
            <div className="test"></div>
            <header>
                <div className="name">
                    <h4>ADENIYI EMMANUEL</h4>
                    <h6>UI/UX DESIGNER | SOFTWARE DEVELOPER</h6>
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
                <img src={twitter} onClick={navMail}/>
            </div>
        </div>
    )

}

export default Home;