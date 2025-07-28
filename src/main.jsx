import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import AboutMe from './components/about.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import Education from './components/education.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <AboutMe />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <Footer />
  </StrictMode>,
)
