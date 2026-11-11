
import '../styles/Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="nav-logo">
        JANG TAEWOOK<span>.</span>
      </a>

      <nav className="nav-menu">
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <a href="#contact" className="nav-contact">
        LET'S TALK ↗
      </a>
    </header>
  )
}

export default Navbar
