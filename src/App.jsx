
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills'
import MyWork from './Pages/MyWork'
import Experience from './Pages/Experience'
import Testimonial from './Pages/Testimonial'
import Footer from './Pages/Footer'
// import ParticlesBackground from './Components/ParticlesBackground'
import CustomCursor from './Components/CustomCursor'
import ContactMe from './Pages/ContactMe'

export default function App(){

  return(
    <div className='basic-color text-white'>
      <CustomCursor/>
      {/* <ParticlesBackground/> */}

      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <MyWork/>
      <Experience/>
      <Testimonial/>
      <ContactMe/>
      <Footer/>
    </div>

  )
}