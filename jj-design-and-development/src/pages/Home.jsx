import CustomHeader from "../components/Header/CustomHeader"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <CustomHeader />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
