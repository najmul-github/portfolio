import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">Guglielmo Cerri</a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              {[
                ["home", "uil-estate", "Home"],
                ["about", "uil-user", "About"],
                ["skills", "uil-file-alt", "Skills"],
                ["qualifications", "uil-graduation-cap", "Qualifications"],
                ["expertise", "uil-briefcase-alt", "Expertise"],
                ["portfolio", "uil-scenery", "Portfolio"],
                ["articles", "uil-book-open", "Articles"],
                ["contact", "uil-estate", "Contact Me"],
              ].map(([id, icon, label]) => (
                <li key={id} className="nav__item">
                  <a href={`#${id}`} className="nav__link">
                    <i className={`uil ${icon} nav__icon`} /> {label}
                  </a>
                </li>
              ))}
            </ul>
            <i className="uil uil-times nav__close" id="nav-close" />
          </div>

          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button" />
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </header>

      {/* ==================== MAIN ==================== */}
      <main className="main">
        {/* ==================== HOME ==================== */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="https://www.linkedin.com/in/guglielmocerri/" target="_blank" rel="noreferrer" className="home__social-icon">
                  <i className="uil uil-linkedin-alt" />
                </a>
                <a href="https://stackoverflow.com/users/12829151/will" target="_blank" rel="noreferrer" className="home__social-icon">
                  <i className="fa fa-stack-overflow" />
                </a>
                <a href="https://github.com/GuglielmoCerri" target="_blank" rel="noreferrer" className="home__social-icon">
                  <i className="uil uil-github-alt" />
                </a>
                <a href="https://medium.com/@cerriguglielmo" target="_blank" rel="noreferrer" className="home__social-icon">
                  <i className="uil uil-medium-m" />
                </a>
              </div>

              <div className="home__data">
                <h1 className="home__title">Hello, I'm Guglielmo Cerri</h1>
                <h3 className="home__subtitle">Senior Data Scientist</h3>
                <p className="home__description" style={{ textAlign: "justify" }}>
                  Senior Data Scientist specializing in Generative AI and Large Language Models (LLMs).
                  I build enterprise-grade AI solutions that enhance productivity and decision-making.
                </p>

                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get in touch</span>

          <div className="contact__container container grid">
            <form
              action="https://formspree.io/f/xbjwkqok"
              method="POST"
              className="contact__form grid"
            >
              <div className="contact__content">
                <label htmlFor="name" className="contact__label">Name</label>
                <input id="name" name="name" type="text" className="contact__input" required />
              </div>

              <div className="contact__content">
                <label htmlFor="email" className="contact__label">Email</label>
                <input id="email" name="email" type="email" className="contact__input" required />
              </div>

              <div className="contact__content">
                <label htmlFor="subject" className="contact__label">Subject</label>
                <input id="subject" name="project" type="text" className="contact__input" required />
              </div>

              <div className="contact__content">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea id="message" name="message" rows={7} className="contact__input" required />
              </div>

              <div style={{ textAlign: "center" }}>
                <button className="button button--flex">
                  Send Message <i className="uil uil-message button__icon" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <h2 className="footer__title">Guglielmo Cerri</h2>
            <span className="footer__subtitle">Data Scientist & Bioinformatician</span>
          </div>

          <p className="footer__copy">
            © Guglielmo Cerri. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;