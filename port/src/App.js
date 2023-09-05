import React, { useEffect, useState, useRef } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import {AnimatePresence, motion} from 'framer-motion'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion"
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css' 
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import zIndex from '@mui/material/styles/zIndex'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"




function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
    if(position< 448){
      console.log("home")
      setPages({
        home: true,
        about: false,
        works: false,
        contact: false
      })
    }
    if(position> 448 && position< 1344){
      console.log("ab")
      setPages({
        home: false,
        about: true,
        works: false,
        contact: false
      })
    }
    if(position> 1344 && position < 2240){
      setPages({
        home: false,
        about: false,
        works: true,
        contact: false
      })
    }
    if(position> 2240){
      setPages({
        home: false,
        about: false,
        works: false,
        contact: true
      })
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const[menuOpen, setMenuOpen]= useState(false)
  const[hide, setHide]= useState(false)
  const [pages, setPages]= useState({
    home: false,
    about: false,
    works: false,
    contact: false
  })
  const[inWorks, setInWorks]= useState(false)
  const[inHome, setInHome]= useState(false)
  const[inAbout, setInAbout]= useState(false)
  const[inContact, setInContact]= useState(false)
  const openMenu= (b)=> {
    setMenuOpen(b)
    if(b){
      setTimeout(()=> {
        setHide(true)
      }, 500)
    }else{
      setHide(false)
    }
  }
  const slider= {
    position: "fixed",
    top: 0,
    height: "100vh",
    width: "100%",
    zIndex: 3
  }
  const sectionTitle= {
    letterSpacing: "5px", fontStyle: 'italic', width: "40%",
  }
  const moonJr= {
    borderRadius: "50%", background: "rgb(245, 245, 245)", position: "absolute"
  }
  useEffect(()=> {
    AOS.init({duration: 3000})
  }, [])

  return (
    <div className= 'App'>
      <span className="twin">

      </span>
      <div className="starsone">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="starstwo">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="starsthree">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="starsfour">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="circle" style= {{position: "fixed", height: "0", background: "#142A47", width: "100vw", paddingTop: "100vw"}}>
        <div  style= {{borderRadius: "50%", height: "0", paddingTop: "70%", transform: "translate(0%,-70%)", width: "70%", background: "#1E344E"}}>
          <div  style= {{borderRadius: "50%",height: "0", paddingTop: "70%", transform: "translate(0%,-70%)",width: "70%",  background: "#2A3E57"}}>
            <div style= {{borderRadius: "50%",height: "0", paddingTop: "70%", width: "70%",transform: "translate(0%,-70%)", background: "#364A64"}}>
              <div  style= {{borderRadius: "50%",height: "0", paddingTop: "70%", width: "70%",transform: "translate(0%,-70%)", background: "#40536B"}}>
                <div style= {{borderRadius: "50%",height: "0", paddingTop: "70%", width: "70%",transform: "translate(0%,-70%)", background: "#4A5B71"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div initial= {{...slider, background: "white"}} animate={{width: 0}} transition= {{delay: 1, duration: 1}}></motion.div>
      <motion.div initial= {{...slider, background: "black"}} animate= {{height: 0}} transition= {{duration: 1}}></motion.div>
      <motion.div className= 'menu' style= {{zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: "0", width: "100%", height: "0", opacity: 0, pointerEvents: "none", background: "#1A1A40"}}
        transition= {{duration: 0.5}} animate= {{height: menuOpen? "100vh": "0", opacity: menuOpen? 1: 0,pointerEvents: menuOpen? "all": "none"}}
      >
        <ul>
          <li><a href="#home" onClick= {()=> {setMenuOpen(false)}}>HOME</a></li>
          <li><a href="#about" onClick= {()=> {setMenuOpen(false); setInAbout(true)}}>ABOUT</a></li>
          <li><a href="#works" onClick= {()=> {setMenuOpen(false); setInWorks(true)}}>WORKS</a></li>
          <li><a href="#contact" onClick= {()=> {setMenuOpen(false); setInContact(true)}}>CONTACT</a></li>
        </ul>
      </motion.div>
      {!menuOpen &&<div className="routes">
        <a href="#home"><HorizontalRuleIcon id= "line" style= {{fontSize: pages.home && "3rem", color: pages.home && "red", cursor: "pointer"}} /></a>
        <a href="#about"><HorizontalRuleIcon id= "line" style= {{fontSize: pages.about && "3rem",color: pages.about && "red", cursor: "pointer"}} /></a>
        <a href="#works"><HorizontalRuleIcon id= "line" style= {{fontSize: pages.works && "3rem",color: pages.works && "red", cursor: "pointer"}}/></a>
        <a href="#contact"><HorizontalRuleIcon id= "line" style= {{fontSize: pages.contact && "3rem",color: pages.contact && "red", cursor: "pointer"}}/></a>
      </div>}
      <div id="home">
        <nav>
          <h1 style= {{fontSize: "4vw"}}>MUSTAPHA HMK</h1>
          <Hamburger toggled={menuOpen} onToggle={() => openMenu(!menuOpen)} />
        </nav>
        <div className="homeMain" data-aos= "zoom-out">
          <div className= 'moon'
            style= {{
              position: "absolute", zIndex: "-3", borderRadius: "50%", 
              background: "white", width: "40vw", height: "0", paddingTop: "40vw"
            }}
          >
            <div className="moonJr" style= {{...moonJr, height: "auto", width: "25%", paddingTop: "25%", top: "25%", left: "15%"}}></div>
            <div className="moonJr" style= {{...moonJr, height: "auto", width: "15%", paddingTop: "15%", top: "10%", left: "45%"}}></div>
            <div className="moonJr" style= {{...moonJr, height: "auto", width: "10%", paddingTop: "10%", top: "35%", left: "50%"}}></div>
          </div>
          <div style= {{height: "50vh", width: "40%", display: "flex", justifyContent: "space-evenly", alignItems: "flex-start", flexDirection: "column"}}>
            <motion.h1  id= "title" style= {{...sectionTitle, zIndex: "3"}} animate= {{x: 0}} initial= {{x: -1000}} transition= {{delay: 2, duration: 1}}>KACIMI ELHASSANI Mustapha</motion.h1>
            <motion.p id= "desc" style= {{color: "#FA58B6", zIndex: "3"}} initial= {{scale: 0}} animate= {{scale: 1}} transition= {{delay: 3, duration: 1}}>
              Software Engineer (Web Developer)
            </motion.p>
          </div>
          <motion.h1 id= "title" style= {{color: "#FA58B6", fontSize: "3vw", letterSpacing: "1px"}} animate= {{x: 0}} initial= {{x: 1000}} transition= {{delay: 4, duration: 1}}>PORTOFOLIO</motion.h1>
        </div>
      </div>
      
     
      {
      <><div id="about" data-aos= "flip-right">
        <div className="aboutMain">
          <h1 id= "title" style= {sectionTitle}>About ME</h1>
          <h4 id= "desc" /* animate= {{scale: 1}} transition= {{duration: 0.5}} initial= {{scale: 0}}*/ data-aos= "zoom-in-right" data-aos-duration="1000" data-aos-delay="1000">
            I am a Software Engeneer, Graduated from the Higher School of Computer Science, "ESI" (Algeria).
            Web developper and passionate about Data Dcience, ML and AI.
          </h4>
        </div>
      </div>
   
      <div id="works" data-aos= "flip-left">
        <div className="worksMain">
          <h1 id= "title" style= {sectionTitle}>My WorkS</h1>
          <div className="myworks" style= {{height: "80%", width: "60%"}}>
            <ul style= {{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start"}}>
              <li data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="2000" data-aos-duration="500" data-aos-delay= "1000">⊛ App to track purchases (2020) "ALGAL"</li>
              <li data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="2000" data-aos-duration="500" data-aos-delay= "1500">⊛ Covid Tracker App (2020) "ESI"</li>
              <li data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="2000" data-aos-duration="500" data-aos-delay= "2000">⊛ Car allowance App AutoLibDZ (2021) "ESI"</li>
              <li data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="2000" data-aos-duration="500" data-aos-delay= "2500">⊛ Arabic E-learning App (2022) "UAMOB"</li>
            </ul>
          </div>
        </div>
      </div>
   
      <div id="contact" data-aos= "zoom-in">
        <div className="contactMain" style= {{flexDirection: "column", width: "100%"}}>
          <h1 id= "title" style= {{letterSpacing: "5px", fontStyle: 'italic'}}>Contact ME</h1>
          <div className="icons" style= {{width: "80%", height: "70%", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", flexDirection: "column"}}>
            <h1 id='desc' style= {{cursor: "pointer"}}><a style= {{color: "#1A1A40"}} href = "mailto: mustaphade1999@gmail.com">mustaphadx1999@gmail.com</a></h1>
            <div  className="icons" style= {{height: "50%", width: "80%", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
              <a data-aos="fade-up" data-aos-duration="1000" data-aos-delay= "0" href="https://github.com/hmk99"  target="_blank" rel="noopener noreferrer"><GitHubIcon href= "https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow" id= "icon" /></a>
              <a data-aos="fade-up" data-aos-duration="1000" data-aos-delay= "500" href="https://www.linkedin.com/in/mustapha-kacimielhassani-81b8161a6/"  target="_blank" rel="noopener noreferrer"><LinkedInIcon id= "icon"/></a>
              <a data-aos="fade-up" data-aos-duration="1000" data-aos-delay= "1000" href="https://web.facebook.com/mustapha.ko.7" target="_blank" rel="noopener noreferrer"><FacebookIcon id= "icon"/></a>
            </div>
          </div>
        </div>
      </div></>}
    </div>
    
  )
}

export default App