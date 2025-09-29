import { useState, useEffect } from "react";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState("heroSection"); // default

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  // Responsive menu
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth <= 500) closeMenu(); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => { if (window.innerWidth <= 1200) closeMenu(); }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6, rootMargin: "0px 0px -20% 0px" }
 // section considered visible if 60% is in viewport
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div><h3>Jackie Sieu</h3></div>

      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#heroSection" onClick={closeMenu} className={`navbar--content ${activeSection === "heroSection" ? "navbar--active-content" : ""}`}>About Me</a>
          </li>
          {/* <li>
            <a href="#aboutMe" onClick={closeMenu} className={`navbar--content ${activeSection === "aboutMe" ? "navbar--active-content" : ""}`}>About Me</a>
          </li> */}
          <li>
            <a href="#mySkills" onClick={() => {
                closeMenu();
                setActiveSection("mySkills"); // need to force highlight for  just this skills section because of bug in hamburger menu not highlighting when active.
              }}
              className={`navbar--content ${activeSection === "mySkills" ? "navbar--active-content" : ""}`}
              >
                Skills
            </a>
          </li>
          <li>
            <a href="#myProjects" onClick={closeMenu} className={`navbar--content ${activeSection === "myProjects" ? "navbar--active-content" : ""}`}>Projects</a>
          </li>
        </ul>
      </div>

      <a href="#contact" onClick={closeMenu} className={`btn btn-outline-primary ${activeSection === "contact" ? "navbar--active-content" : ""}`}>Contact Me</a>
    </nav>
  );
}

export default Navbar;
