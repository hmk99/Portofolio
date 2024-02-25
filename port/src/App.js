import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import {motion} from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css' 
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import "bootstrap/dist/css/bootstrap.min.css"
import { useInView } from 'react-intersection-observer'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import logo from './images/rec_trans_ultim.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import { DiJqueryLogo, DiReact } from "react-icons/di"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { DiNpm } from "react-icons/di"
import { DiNodejs } from "react-icons/di"
import { DiGit } from "react-icons/di"
import { DiGithubBadge } from "react-icons/di"
import { DiMysql } from "react-icons/di"
import { DiDatabase } from "react-icons/di"
import { DiSass } from "react-icons/di"



function App() {
  const mobile= useMediaQuery('(width <= 800px)')
  const[menuOpen, setMenuOpen]= useState(false)
  const[hide, setHide]= useState(false)
 
  const [full, setFULL]= useState(false)
  const { ref: homeRef, inView: homeVisible } = useInView({threshold: .5})
  const { ref: aboutRef, inView: aboutVisible } = useInView({threshold: .5})
  const { ref: contactRef, inView: contactVisible } = useInView({threshold: .5})
  const { ref: worksRef, inView: worksVisible } = useInView({threshold: .5})
  const { ref: toolsRef, inView: toolsVisible } = useInView({threshold: .5})
  const { ref: descRef, inView: descVisible } = useInView({threshold: .5})
  

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
  const moonJr= {
    borderRadius: "50%", background: "rgb(245, 245, 245)", position: "absolute"
  }

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
    setShow(false)
    } else {
    setShow(true) 
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
    window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY])

  useEffect(()=> {
    AOS.init({duration: 1000})
  }, [])

  const worksList= [
    {title: "I.", elem: "App to track purchases (2020) 'ALGAL'."},
    {title: "II.", elem: "Covid Tracker App (2020) 'ESI'."},
    {title: "III.", elem: "Car allowance App AutoLibDZ (2021) 'ESI'."},
    {title: "IV.", elem: "Arabic E-learning App (2022) 'UAMOB'."},
    {title: "V.", elem: "Full Stack Developer (2023- ) 'SONATRES'."},
  ]

  const descList= [
    {title: "I am", elem: "a Software Engineer, Graduated from the Higher School of Computer Science, 'ESI' (Algeria)."},
    {title: "Web", elem: "developper and passionate about Data Dcience, ML and AI."},
    {title: "Full", elem: "stack developer with good experience in:"},
    {title: "React JS", elem: "/ 'Animation and UI tools' libraries."},
    {title: "Node Js", elem: "/ APIs."},
    {title: "MySQL", elem: "database."},
    {title: "Git/ GitHub", elem: ""}
  ]
  useEffect(()=> {
    if(full || menuOpen) {
      document.querySelector('body').style.overflow = "hidden"
    }
    return ()=> {
      document.querySelector('body').style.overflow = "scroll"
    }
  }, [full, menuOpen])

  const toolsTitle= {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(to right, orange, blue, #FA58B6)"
  }

  return (
    <div className= 'App' style= {{overflowY: full&& "hidden !important"}}>
      <img id= 'logoFull' src= {logo} alt="" 
        style= {{
          pointerEvents: full&& "all", height: full&& "100vh", width: full&& "100%",
          borderColor: full&& "red", background: full&& "white"
        }} 
        onClick= {()=> {setFULL(false)}} 
      />
      {(!menuOpen && !full)&&
      <>
        <span className="twin"></span>
      </>
      }
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
      <div className="circle" style= {{background: "#142A47"}}>
          <div  style= {{background: "#2A3E57", height: "89vh", width: "89vh"}}>
            <div style= {{background: "#364A64", height: "55vh", width: "55vh"}}>
              <div  style= {{background: "#40536B", height: "34vh", width: "34vh"}}>
                <div style= {{background: "#4A5B71", height: "21vh", width: "21vh"}}>
                </div>
              </div>
            </div>
          </div>
      </div>
      <motion.div initial= {{...slider, background: "white"}} animate={{width: 0}} transition= {{delay: 1, duration: 1}}></motion.div>
      <motion.div initial= {{...slider, background: "black"}} animate= {{height: 0}} transition= {{duration: 1}}></motion.div>
      <div className= 'menu' 
        onClick= {()=> {setMenuOpen(false)}}
        style= {{
          zIndex: 2, display: "flex", justifyContent: "center", alignItems: "flex-start", 
          position: "fixed", top: "0", width: "100vw", 
          height: menuOpen&& "90vh", opacity: menuOpen&& 1, pointerEvents: menuOpen&& "all", background: "#1A1A40"
        }}
      >
        <ul>
          <li><a href="#home" onClick= {()=> {setMenuOpen(false)}}>HOME</a></li>
          <li><a href="#about" onClick= {()=> {setMenuOpen(false);}}>ABOUT</a></li>
          <li><a href="#tools" onClick= {()=> {setMenuOpen(false);}}>TOOLS</a></li>
          <li><a href="#works" onClick= {()=> {setMenuOpen(false);}}>WORKS</a></li>
          <li><a href="#contact" onClick= {()=> {setMenuOpen(false);}}>CONTACT</a></li>
        </ul>
      </div>
      {!menuOpen &&<div className="routes">
        <a href="#home"><HorizontalRuleIcon id= "line" style= {{fontSize: homeVisible && "3rem", color: homeVisible && "red", cursor: "pointer"}} /></a>
        <a href="#about"><HorizontalRuleIcon id= "line" style= {{fontSize: aboutVisible && "3rem",color: aboutVisible && "red", cursor: "pointer"}} /></a>
        <a href="#tools"><HorizontalRuleIcon id= "line" style= {{fontSize: toolsVisible && "3rem",color: toolsVisible && "red", cursor: "pointer"}} /></a>
        <a href="#works"><HorizontalRuleIcon id= "line" style= {{fontSize: worksVisible && "3rem",color: worksVisible && "red", cursor: "pointer"}}/></a>
        <a href="#contact"><HorizontalRuleIcon id= "line" style= {{fontSize: contactVisible && "3rem",color: contactVisible && "red", cursor: "pointer"}}/></a>
      </div>}
      
      <div id="home" ref= {homeRef}>
        <nav style= {{height: !show && 0, opacity: !show && 0, pointerEvents: !show && "none"}}>
          <div className="logo_container"><img id= "logo" alt= "" src= {logo} onClick= {()=> {setFULL(true)}} /></div>
          {/*<h1 style= {{fontSize: "4vw"}}>MUSTAPHA HMK</h1>*/}
          <h3>
            <a href= 'tel:+213558933443'>
              Call ME 
              <LocalPhoneIcon id= "phoneIcon" />
            </a>
          </h3>
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
            <motion.h1  id= "title" style= {{zIndex: "3"}} animate= {{x: 0}} initial= {{x: -1000}} transition= {{delay: 2, duration: 1}}>KACIMI ELHASSANI Mustapha</motion.h1>
            <motion.p style= {{color: "#FA58B6", zIndex: "3", fontStyle: "italic", fontWeight: "bolder"}} initial= {{scale: 0}} animate= {{scale: 1}} transition= {{delay: 3, duration: 1}}>
              Software Engineer (Web Developer)
            </motion.p>
          </div>
          <motion.h1 id= "title" style= {{color: "#FA58B6", fontSize: "3vw", letterSpacing: "1px"}} animate= {{x: 0}} initial= {{x: 1000}} transition= {{delay: 4, duration: 1}}>PORTOFOLIO</motion.h1>
        </div>
      </div>
      
     
     
      <><div id="about" ref= {aboutRef} data-aos="fade-up" data-aos-anchor="#home" data-aos-anchor-placement= "bottom-center">
        <div className="aboutMain">
          {aboutVisible&& <>
            <h1 id= "title" data-aos="zoom-in" >About ME</h1>
            <div id= "desc" ref= {descRef} /* animate= {{scale: 1}} transition= {{duration: 0.5}} initial= {{scale: 0}}*/ data-aos= "fade-left">
              {
                descList.map((e, i)=> {
                  return (
                    <h4>
                      <motion.span transition= {{duration: .125, delay: (i*.125 + 3.5) }} initial= {{x: -500, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: -500, opacity: 0}} >{e.title}</motion.span>
                      <motion.span transition= {{duration: .5, delay: i*.5}} initial= {{scale: 0, opacity: 0}} animate= {{scale: 1, opacity: 1}} exit= {{scale: 0, opacity: 0}} > {e.elem}</motion.span>
                    </h4>
                  )
                })
              }
            </div>
          </>}
        </div>
      </div>

      <div id="tools" ref= {toolsRef} data-aos="fade-up" data-aos-anchor="#about" data-aos-anchor-placement= "bottom-center">
        <div className="toolsMain">
          {toolsVisible&& <>
            <h1 id= "title" data-aos="zoom-in">Mastered Tools</h1>
            <div className="toolsList" data-aos= "fade-left">
              <div className="toolsCat">
                <h4>FrontEnd</h4>
                <motion.div className= 'tool' transition= {{duration: .5}} initial= {{x: -1000, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: -1000, opacity: 0}}>
                  <DiHtml5 style= {{color: "orange"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#E34C26"}}>HTML5</span>
                </motion.div>
                <motion.div className= 'tool' transition= {{duration: .5}} initial= {{x: -1000, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: -1000, opacity: 0}}>
                  <DiCss3 style= {{color: "blue"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#0F5298"}}>CSS3</span>
                </motion.div>
                <motion.div className= 'tool' transition= {{duration: .5}} initial= {{x: -1000, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: -1000, opacity: 0}}>
                  <DiSass style= {{color: "#FA58B6"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#CD6799"}}>Sass</span>
                </motion.div>
              </div>
              <div className="toolsCat">
                <h4>JavaScript</h4>
                <motion.div className= 'tool' transition= {{duration: .5, delay: .5}} initial= {{y: -1000, opacity: 0}} animate= {{y: 0, opacity: 1}} exit= {{y: -1000, opacity: 0}}>
                  <DiJavascript1 style= {{color: "yellow"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#F0DB4F"}}>JavaScript</span>
                </motion.div>
                <motion.div className= 'tool' transition= {{duration: .5, delay: .5}} initial= {{y: -1000, opacity: 0}} animate= {{y: 0, opacity: 1}} exit= {{y: -1000, opacity: 0}}>
                  <DiJqueryLogo style= {{color: "skyblue"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#0868AC"}}>jQuery</span>
                </motion.div>
                <motion.div className= 'tool' transition= {{duration: .5, delay: .5}} initial= {{y: -1000, opacity: 0}} animate= {{y: 0, opacity: 1}} exit= {{y: -1000, opacity: 0}}>
                  <DiReact style= {{color: "skyblue"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#61DBFB"}}>ReactJS</span>
                </motion.div>
              </div>
              <div className="toolsCat">
                <h4 >BackEnd</h4>
                <motion.div className= 'tool' transition= {{duration: .5, delay: 1}} initial= {{x: 1000, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: 1000, opacity: 0}}>
                  <DiNodejs style= {{color: "green"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#3C873A"}}>NodeJS</span>
                </motion.div>
                <motion.div className= 'tool' transition= {{duration: .5, delay: 1}} initial= {{x: 1000, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: 1000, opacity: 0}}>
                  <DiNpm style= {{color: "red"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#CC3534"}}>NPM</span>
                </motion.div>
              </div>
              <div className="toolsCat">
                <h4 >DataBase</h4>
                <motion.div className= 'tool' transition= {{duration: .5, delay: 1.5}} initial= {{y: 1000, opacity: 0}} animate= {{y: 0, opacity: 1}} exit= {{y: 1000, opacity: 0}}>
                  <DiDatabase style= {{color: "gray"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "gray"}} >DateBase</span>
                </motion.div>
                <motion.div className= 'tool' transition= {{duration: .5, delay: 1.5}} initial= {{y: 1000, opacity: 0}} animate= {{y: 0, opacity: 1}} exit= {{y: 1000, opacity: 0}}>
                  <DiMysql style= {{color: "orange"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#F29111"}}>MySQL</span>
                </motion.div>
              </div>
              <div className="toolsCat">
                <h4>Git</h4>
                <motion.div className= 'tool' transition= {{duration: .5, delay: 2}} initial= {{scale: 0, opacity: 0}} animate= {{scale: 1, opacity: 1}} exit= {{scale: 0, opacity: 0}}>
                  <DiGit style= {{color: "red"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#F1502F"}}>Git</span>
                </motion.div>
                <motion.div className= 'tool' transition= {{duration: .5, delay: 2}} initial= {{scale: 0, opacity: 0}} animate= {{scale: 1, opacity: 1}} exit= {{scale: 0, opacity: 0}}>
                  <DiGithubBadge style= {{color: "black"}} id= "toolIcon" />
                  <span className="toolName" style= {{color: "#333333"}}>GitHub</span>
                </motion.div>
              </div>
            </div>
          </>}
        </div>
      </div>
   
      <motion.div  id="works" ref= {worksRef} data-aos="fade-up" data-aos-anchor="#tools" data-aos-anchor-placement= "bottom-center" >
        <motion.div className="worksMain">
          {worksVisible&& <>
            <h1 id= "title" data-aos="zoom-in">My WorkS</h1>
            <ul className="myworks" data-aos= "fade-left">
              {
                worksList.map((e, i)=> {
                  return (
                    <li>
                      <motion.span transition= {{duration: .5, delay: (i*.5) }} initial= {{x: 500, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: 500, opacity: 0}} >{e.title}</motion.span>
                      <motion.p transition= {{duration: .5, delay: (i*.5 + 2.5) }} initial= {{x: 500, opacity: 0}} animate= {{x: 0, opacity: 1}} exit= {{x: 500, opacity: 0}} >{e.elem}</motion.p>
                    </li>
                  )
                })
              }
            </ul></>}
        </motion.div>
      </motion.div>
   
      <div id="contact" style= {{position: "relative"}} data-aos= "zoom-in" ref= {contactRef}>
        <div className="contactMain" style= {{flexDirection: "column", width: "100%"}}>
          <h1 id= "title" data-aos= "zoom-in">Contact ME</h1>
          <div style= {{width: "90%", minHeight: "40vh", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", flexDirection: "column"}}>
            <h1 id= "email" style= {{cursor: "pointer"}} data-aos= "fade-up" data-aos-delay= "250"><a href = "mailto: mustaphade1999@gmail.com">mustaphadx1999@gmail.com</a></h1>
            <div  className="icons" style= {{minHeight: "30vh", width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
              <a data-aos="fade-up" data-aos-delay= "250" href="https://github.com/hmk99"  target="_blank" rel="noopener noreferrer"><GitHubIcon href= "https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow" id= "icon" /></a>
              <a data-aos="fade-up" data-aos-delay= "500" href="https://www.linkedin.com/in/mustapha-kacimielhassani-81b8161a6/"  target="_blank" rel="noopener noreferrer"><LinkedInIcon id= "icon"/></a>
              <a data-aos="fade-up" data-aos-delay= "750" href="https://web.facebook.com/mustapha.ko.7" target="_blank" rel="noopener noreferrer"><FacebookIcon id= "icon"/></a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h6>Copyright<span id= "cc">©️</span> 2024 <span id= "cc">HMK</span></h6>
      </footer>
      </>
    </div>
  )
}

export default App