import { useState, useEffect } from 'react'
import './App.css'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import logo from './assets/logo.png'
import slider1 from './assets/slider_1.jpg'
import slider2 from './assets/slider_2.jpg'
import slider3 from './assets/slider_3.jpg'
import slider4 from './assets/slider_4.jpg'
import aboutImg from './assets/about.jpeg'
import chairmanImg from './assets/chairman.jpeg'
import principalImg from './assets/principal.jpeg'
// Gallery Component with individual image animations
function GalleryGrid() {
  const [galleryItem1Ref, galleryItem1Visible] = useScrollAnimation({ threshold: 0.2 })
  const [galleryItem2Ref, galleryItem2Visible] = useScrollAnimation({ threshold: 0.2 })
  const [galleryItem3Ref, galleryItem3Visible] = useScrollAnimation({ threshold: 0.2 })
  const [galleryItem4Ref, galleryItem4Visible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="gallery-grid">
      <div 
        ref={galleryItem1Ref}
        className={`gallery-item ${galleryItem1Visible ? 'animate-zoom-in' : ''}`}
      >
        <img
          src="https://web.ayuka.org/display?tg=galrypic&apiKey=SpSKnd@459@&pic=76.0"
          alt="Memorable Moment 1"
        />
      </div>
      <div 
        ref={galleryItem2Ref}
        className={`gallery-item ${galleryItem2Visible ? 'animate-zoom-in' : ''}`}
      >
        <img
          src="https://web.ayuka.org/display?tg=galrypic&apiKey=SpSKnd@459@&pic=77.0"
          alt="Memorable Moment 2"
        />
      </div>
      <div 
        ref={galleryItem3Ref}
        className={`gallery-item ${galleryItem3Visible ? 'animate-zoom-in' : ''}`}
      >
        <img
          src="https://web.ayuka.org/display?tg=galrypic&apiKey=SpSKnd@459@&pic=78.0"
          alt="Memorable Moment 3"
        />
      </div>
      <div 
        ref={galleryItem4Ref}
        className={`gallery-item ${galleryItem4Visible ? 'animate-zoom-in' : ''}`}
      >
        <img
          src="https://web.ayuka.org/display?tg=galrypic&apiKey=SpSKnd@459@&pic=79.0"
          alt="Memorable Moment 4"
        />
      </div>
    </div>
  )
}


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Scroll animations
  const [aboutHeadingRef, aboutHeadingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [aboutTextRef, aboutTextVisible] = useScrollAnimation({ threshold: 0.2 })
  const [aboutImageRef, aboutImageVisible] = useScrollAnimation({ threshold: 0.2 })
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation({ threshold: 0.2 })
  const [viewsHeadingRef, viewsHeadingVisible] = useScrollAnimation({ threshold: 0.3 })
  const [viewCard1Ref, viewCard1Visible] = useScrollAnimation({ threshold: 0.2 })
  const [viewCard2Ref, viewCard2Visible] = useScrollAnimation({ threshold: 0.2 })
  const [circularsRef, circularsVisible] = useScrollAnimation({ threshold: 0.2 })
  const [galleryHeadingRef, galleryHeadingVisible] = useScrollAnimation({ threshold: 0.3 })

  const slides = [slider1, slider2, slider3, slider4]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header with Logo */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Sanskriti Public School Logo" className="logo-img" />
          <div className="school-name">
            <h1 className="school-title">SANSKRITI PUBLIC SCHOOL</h1>
            <p className="school-location">Khandra, Panipat</p>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="hero-section">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
          <div className="slider-overlay"></div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <i className="fa fa-bars"></i> OPTIONS
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>HOME</a></li>
            <li><a href="#facilities" onClick={closeMenu}>FACILITIES</a></li>
            <li><a href="#gallery" onClick={closeMenu}>GALLERY</a></li>
            <li><a href="#disclosure" onClick={closeMenu}>MANDATORY PUBLIC DISCLOSURE</a></li>
            <li><a href="#contact" onClick={closeMenu}>CONTACT US</a></li>
          </ul>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="section about-section" id="about">
        <h2 
          ref={aboutHeadingRef}
          className={`section-heading ${aboutHeadingVisible ? 'animate-fade-in-up' : ''}`}
        >
          About Us
        </h2>
        <div className={`heading-underline ${aboutHeadingVisible ? 'animate-fade-in-up' : ''}`}></div>
        <div className="about-content">
          <div 
            ref={aboutTextRef}
            className={`about-text ${aboutTextVisible ? 'animate-fade-in-left' : ''}`}
          >
            <p className="quote">
              "Learning gives creativity, Creativity leads to thinking,
              Thinking provides knowledge, Knowledge makes you great."
            </p>
            <p className="content-text">
              The Sanskriti Public School is devoted towards character building and all-round personality development covering
              area of -
            </p>
            <ul className="feature-list">
              <li><i className="fa fa-arrow-circle-o-right"></i> Confidence Building</li>
              <li><i className="fa fa-arrow-circle-o-right"></i> Fluency</li>
              <li><i className="fa fa-arrow-circle-o-right"></i> Leadership</li>
              <li><i className="fa fa-arrow-circle-o-right"></i> Physical Development</li>
            </ul>
            <p className="content-text">
              Our primary goal is to make a conscious effort to link group of students to one another across the world and
              thus initiate understanding of global issues. We provide novel sports facilities and plethora of co-curricular
              activities to ensure a synchronized growth of a child's body, mind and soul besides keeping them very much
              attached to the elementary roots of Indian culture and ethos while developing in them the global outlook on
              life.
            </p>
          </div>
          <div 
            ref={aboutImageRef}
            className={`about-image ${aboutImageVisible ? 'animate-fade-in-right' : ''}`}
          >
            <img src={aboutImg} alt="About Sanskriti Public School" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <h2 
          ref={whyChooseRef}
          className={`section-heading ${whyChooseVisible ? 'animate-fade-in-up' : ''}`}
        >
          Why Choose Us
        </h2>
        <div className={`heading-underline ${whyChooseVisible ? 'animate-fade-in-up' : ''}`}></div>
        <div 
          className={`why-choose-content ${whyChooseVisible ? 'animate-fade-in-up' : ''}`}
        >
          <p className="content-text">
            The school comes with an uncompromising commitment. It aims to achieve specific, measurable, observable and
            quantifiable results among all aspirants/students. Because the School has a vision to provide value based
            education to young minds and provide a dynamic learning environment.
            However, the School aegis for every student which strives for excellence through active learning and education.
            Moreover, the School has the core committed faculty which has come from accomplished backgrounds with vast
            experience.
          </p>
        </div>
      </section>

      {/* Our Views Section */}
      <section className="section views-section">
        <h2 
          ref={viewsHeadingRef}
          className={`section-heading ${viewsHeadingVisible ? 'animate-fade-in-up' : ''}`}
        >
          Our Views
        </h2>
        <div className={`heading-underline ${viewsHeadingVisible ? 'animate-fade-in-up' : ''}`}></div>
        <div className="views-container">
          <div 
            ref={viewCard1Ref}
            className={`view-card ${viewCard1Visible ? 'animate-fade-in-left' : ''}`}
          >
            <div className="view-header">
              <img src={chairmanImg} alt="Chairman" className="view-image" />
              <h3 className="view-title">CHAIRPERSON <span>MESSAGE</span></h3>
            </div>
            <div className="view-content">
              <p className="view-quote">
                <strong>"Somewhere, something incredible is waiting to be know."</strong> <br />
                -Carl Sagan
              </p>
              <p className="view-text">
                I came across this amazing quote quite suddenly when I was looking for some information in the internet and realized how relevant it is for
                all of us: children, parents and teachers. There is never any point in the life of a person when he can sit back
                and say. "There is nothing more to learn, I can relax with the comforting thought that the universe around me is
                an open book. I know it all."Education is not just about the subjects that are learnt and taught in school.
                Becoming educated is not restricted to being in school and then in college, gathering certificates and feeling
                proud for oneself. It is a lifelong exercise that can be unbelievably exciting if only we wish to jump onto the
                train of experience and take a trip to every conceivable place on the earth. Now we know that this cannot be
                done literally, so how do we manage it, first in school and then as we go on through the journey of life? First,
                we all have to on the same page: children, teachers and parents have to understand that education is not
                restricted to lessons taught in the classroom from text books. Parents and teachers must encourage children to
                ask as many questions as they can. For it is in wanting to know that will result in actually getting to know.
                Besides all of the above, that add to children becoming truly educated, schools and teachers must ensure that
                children have a society of enriching experiences.
              </p>
              <p className="view-signature">- Mr. Karamveer Chopra</p>
            </div>
          </div>

          <div 
            ref={viewCard2Ref}
            className={`view-card ${viewCard2Visible ? 'animate-fade-in-right' : ''}`}
          >
            <div className="view-header">
              <img src={principalImg} alt="Principal" className="view-image" />
              <h3 className="view-title">PRINCIPAL <span>MESSAGE</span></h3>
            </div>
            <div className="view-content">
              <p className="view-quote">
                <strong>"Children must be taught how to think, not what to think"</strong> <br />
                - (Margaret Mead)
              </p>
              <p className="view-text">
                We Believe in the perfection that exits in each individual and that can be manifested through the right guidance
                on the part of the school. There is a spark of genius in every student which needs a teacher to kindle it. We as
                facilitators try to imbibe in our students the value of courage, honesty, curiosity along with a spirit to work
                hard and be an achiever which will help make the world deem even better place to live in.
                SANSKRITI PUBLIC SCHOOL aims at: Mastery in communication skills, clarity and independence in thoughts, an
                appreciation of scientific economic, mental health and hygiene with ethical and cultural values. We specially
                seek co-operation of community and parents in this Humans of tomorrow project towards a better society.
                Constructive suggestions from our respected parents and well-wishers will elevate us on the ladder of success.
                Let us work together towards a better and happy world!!
              </p>
              <p className="view-signature">- Jyoti Gehlawat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Circulars Section */}
      <section className="section circulars-section">
        <h2 
          ref={circularsRef}
          className={`section-heading ${circularsVisible ? 'animate-fade-in-up' : ''}`}
        >
          Latest Circulars
        </h2>
        <div className={`heading-underline ${circularsVisible ? 'animate-fade-in-up' : ''}`}></div>
        <div 
          className={`circulars-content ${circularsVisible ? 'animate-fade-in-up' : ''}`}
        >
          <div className="circular-card">
            <a href="#" className="circular-link">
              Admission Open For Session 2025-26
            </a>
          </div>
        </div>
      </section>

      {/* Memorable Moments Section */}
      <section className="section gallery-section" id="gallery">
        <h2 
          ref={galleryHeadingRef}
          className={`section-heading ${galleryHeadingVisible ? 'animate-fade-in-up' : ''}`}
        >
          Memorable Moments
        </h2>
        <div className={`heading-underline ${galleryHeadingVisible ? 'animate-fade-in-up' : ''}`}></div>
        <GalleryGrid />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          <a href="https://www.ayukadevelopers.com" target="_blank" rel="noopener noreferrer">
            Designed By - AYUKA DEVELOPERS <br />
            (www.ayukadevelopers.com | 9050404553)
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
