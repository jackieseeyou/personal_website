
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyProjects from "../MyProjects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
    return  (
        <>
         <main className="main-content">
            <HeroSection/>
            <MySkills/>
            <AboutMe/>
            <MyProjects/>
            <ContactMe/>
         </main>
         <Footer></Footer>
        </>
    )
}