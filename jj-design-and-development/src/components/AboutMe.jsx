// import styled components
import { H2 } from '../styles/styled-components/all-styled-components';

// import icons
import ProgrammingIcon from '../assets/white-icons/icons8-programming-100.png';

export default function AboutMe() {
    return (
        <>
            <section className='about-container'>
                <div className='about-inner-container'>
                    <div className='about-title-container'>
                        <H2>About Me</H2>
                    </div>
                    <img src={ProgrammingIcon} alt='Desktop monitor with coding icon' />
                </div>
            </section>
        </>
    )
}
