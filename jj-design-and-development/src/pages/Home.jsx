import { useRef } from "react"

import '../styles/googleFonts.css'

// component imports
import CustomHeader from "../components/Header/CustomHeader"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    const projectsRef = useRef(null);


    return (
        <>
            <CustomHeader ref={projectsRef} />
            <AboutMe />
            <Projects ref={projectsRef} />
            <Contact />
            <Footer />
        </>
    )
}
