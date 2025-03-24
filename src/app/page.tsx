'use client';

import { useEffect } from 'react';
import './header.css';

export default function Home() {
  useEffect(() => {
    const header = document.getElementById("navbar");
    const logo = document.querySelector(".header__inner");

    // Add fixed class on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("fixed");
      } else {
        header?.classList.remove("fixed");
      }
    };

    // Handle logo hover events
    const handleLogoEnter = () => {
      header?.classList.remove("fixed");
    };

    const handleLogoLeave = () => {
      if (window.scrollY > 50) {
        header?.classList.add("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    logo?.addEventListener("mouseenter", handleLogoEnter);
    logo?.addEventListener("mouseleave", handleLogoLeave);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      logo?.removeEventListener("mouseenter", handleLogoEnter);
      logo?.removeEventListener("mouseleave", handleLogoLeave);
    };
  }, []);

  return (
    <body style={{ background: "url(backbg.png) 0 0 no-repeat", backgroundSize: "cover" }}>
      <header id="navbar">
        <div className="header__inner">
          <a className="header__home" href="#" aria-label="Return to the homepage">
            <svg className="header__logo" width="219" height="34" viewBox="0 0 219 34" xmlns="http://www.w3.org/2000/svg">
              <path d="m169.47 13.61 9.5 6.79c-.81 3.87-2.97 7.27-5.99 9.71-.38.3-.77.59-1.17.87-2.82 1.91-6.24 3.03-9.92 3.03h-.17c-9.53-.09-17.25-7.62-17.25-16.99s7.82-17.02 17.43-17.02c4.72 0 9 1.83 12.15 4.81l-6.11 6.12c-.2-.18-.4-.35-.61-.5-1.49-1.12-3.38-1.78-5.42-1.78-4.54 0-8.29 3.29-8.74 7.49-.03.28-.04.57-.04.85 0 4.54 3.84 8.24 8.61 8.33.06 0 .11.01.17.01 3.58 0 6.65-2.03 8.02-4.94h-6.46v-6.79h6.02zm-157.23-13.09-12.24 32.92h9.94l7.59-20.41 7.67 20.41h9.94l-12.39-32.92zm48.87 14.32-8.42-14.32h-9.94v32.92h9.51v-17.49l8.85 15.05 8.85-15.05v17.49h9.51v-32.92h-9.94l-8.42 14.31zm74.69-14.3h-9.51s0 32.91 0 32.91h9.51v-23.38h.02l-.02-.02zm83.2 8.65v15.59l-9.51 8.66h-14.19l-9.46-8.66v-15.59l9.46-8.63v-.03h14.19zm-9.51-.01h-14.15v15.59h14.15zm-92.47-8.66h-28.35v8.66h16.69l-16.69 15.59v8.66h28.36v-8.66h-16.69l16.7-15.59v-8.66z" fill="currentColor" />
            </svg>
          </a>

          <nav className="header__nav">
            <ul className="nav-links">
              <li><a href="#">Review Centre</a></li>
              <li><a href="#">All Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Why Join</a></li>
              <li><a href="#">Articles</a></li>
            </ul>
            <div className="buttons">
              <a href="#" className="btn btn-light">Start Free Trial →</a>
              <a href="#" className="btn btn-dark">Login →</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="content">
          <h1>Scroll Down to See the Fixed Header</h1>
          <p>Keep scrolling to check how the navigation bar sticks to the top.</p>
          <div className="filler"></div>
        </section>
      </main>
    </body>
  );
}
