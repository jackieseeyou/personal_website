
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyProjects from "../MyProjects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <main className="main-content">
        <section className="main-content-section"><HeroSection/></section>
        {/* <section className="main-content-section"><AboutMe/></section> */}
        <section className="main-content-section"><MySkills/></section>
        <section className="main-content-section"><MyProjects/></section>
        <section className="main-content-section"><ContactMe/></section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

