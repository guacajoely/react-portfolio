import './App.css'
import projectScreenshot1 from './assets/project1.png'
import projectScreenshot2 from './assets/project2.png'
import projectScreenshot3 from './assets/project3.png'

function App() {

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-box">
          <a className="nav-link" href="#about">About</a>
        </div>

        <div className="nav-box">
          <a className="nav-link" href="#projects">Work</a>
        </div>

        <div className="nav-box">
          <a className="nav-link" href="#contact">Contact</a>
        </div>

      </nav>

      <section id="about" className="about">
        <div className="about-left">
          <img className="headshot-image" src="https://i.imgur.com/JOylcxZ.jpg" alt="headshot" />
        </div>
        <div className="about-right">
          <h1 className="about-header">Joel Dick</h1>
          <p className="about-text">junior full stack developer</p>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="projects-header">Here are some of my projects</div>

        <div className="projects-container">

          <a href="https://www.loom.com/share/a129dd4227314fa39a7762d1dfcb3b88?sid=e5045a1d-8089-4ae5-8666-fdf148c734cb" 
            target="_blank" rel='noreferrer' className="project-tile">
            <img className="project-image" src={projectScreenshot1} alt="project one" />
            <p className="project-title">CDL Match Predictor</p>
          </a>

          <a href="https://www.loom.com/share/dd37a1aabd2b4c9e94be5783ba9c17c4?sid=f10b4f7d-693d-4e4f-bdfc-ab28d1a907ea" 
            target="_blank" rel='noreferrer' className="project-tile">
            <img className="project-image" src={projectScreenshot2} alt="project two" />
            <p className="project-title">Admitted</p>
          </a>

          <a href="INSERT LINK TO PROJECT" 
            target="_blank" rel='noreferrer' className="project-tile">
            <img className="project-image" src={projectScreenshot3} alt="project three" />
            <p className="project-title">React Native App</p>
          </a>

        </div>
      </section>

      <section id="contact" className="contact">

        <div className="contact-header">
          <div className="contact-title">Contact Me</div>
        </div>

        <div className="contact-links">

          <a href="mailto:guacajoely@gmail.com" className="btn contact-details">
            <i className="fas fa-at"></i> Email
          </a>

          {/* 
          
          <a href="tel:[INSERT TELEPHONE NUMBER HERE]" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Phone
          </a> 
          
          */}

          <a href="https://www.linkedin.com/in/guacajoely/" target="_blank" rel="noreferrer" className="btn contact-details">
            <i className="fab fa-linkedin"></i> Linkedin
          </a>

          <a href="https://github.com/guacajoely" target="_blank" rel='noreferrer' className="btn contact-details">
            <i className="fab fa-github"></i> GitHub
          </a>

        </div>
      </section>

      <footer className="footer">

        <div className="footer-text">
          Created by <a href="#about">Joel Dick</a>
        </div>

      </footer>
    </>
  )
}

export default App
