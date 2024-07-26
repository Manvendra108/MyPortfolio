import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/index.jsx'
import Home from './Components/Home/index.jsx'
import SocialMedia from './Components/SocialMedia/index.jsx'
import Button from './Components/Button/Button.jsx'
import About from './Components/About/index.jsx'
import Skills from './Components/Skills/index.jsx'
// import Language from './Components/Language/index.jsx'
import About2 from './Components/About2/about2.jsx'
import Example from './Components/HorizontalScrollCarousel/HorizontalScrollCarousel.jsx'
import Example2 from './Components/About3/index.jsx'
// import Example3 from './Components/About4/index.jsx'
import Contact from './Components/Contact/index.jsx'
import Footer from './Components/Footer/index.jsx'
import Footer2 from './Components/Footer2/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Home/>
    <SocialMedia/>
    <Button/>
    <About/>
    <Skills/>
    <About2/>
    <Example/>
    <Example2/>
    <Contact/>
    <Footer/>
    <Footer2/>
     {/* <div className='ml-[75vh]'><Button/></div> */}
  </React.StrictMode>,
)
