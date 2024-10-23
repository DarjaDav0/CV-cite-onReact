import React, { useEffect, useRef } from 'react';
import './App.css';
import Aboutsection from './Aboutsection';
import Skills from './skills.js';
import './skills.css';

/* Import content from Canva CV here
Change places of skills (more important) and about where I talk about hobbies */

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
  }).catch(err => {
    console.error('Failed to copy to clipboard:', err);
  });
}

function App() {

  const handleCopyEmail = (e) => {
    e.preventDefault(); // Prevent default mailto behavior
    copyToClipboard('darja.davydova.dd@gmail.com');
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentageScrolled = scrollY / maxScroll;
      const newTop = 50 - (percentageScrolled * 40); // Adjust the multiplier for desired effect
      nav.style.top = `${newTop}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const navLink = document.querySelector(`.nav ul li a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 } 
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App text-center">
      <header className="App-header">
        <section id="intro">  
        <h1>Darja Davydova</h1>
          <a>Welcome to my web CV<br />IT Student at Lapland UAS</a>
          <ul className="inline-list">
            <li>
              <a 
                href="mailto:darja.davydova.dd@gmail.com" 
                className="button" 
                onClick={handleCopyEmail}
              >
                Mail me
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/darja-davydova-814953229" className="button">Linkedin</a></li>
            <li><a href="https://github.com/DarjaDav0" className="button">GitHub</a></li>
          </ul>
          <br />
        </section>
      </header>
      <nav id="nav" className="nav">
        <ul>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li> 
        </ul>
      </nav>
      <section id="about">
        <Aboutsection />
      </section>
      <section id="skills">
        <Skills/>
      </section>
    </div>
  );
}

export default App;