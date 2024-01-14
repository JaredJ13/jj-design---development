import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { BarLoader } from 'react-spinners';
import { Link } from 'react-scroll';

import { ContactContainer, Container, Flex, H2, H2TitleContainer, InnerContainer, ArrowContainer, FlexContactExtend } from "../styles/styled-components/all-styled-components";

// icons
import UpArrowIcon from '../assets/black-icons/blk-up-arrow-100.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
    const [emailSuccess, setEmailSuccess] = useState('')
    const [emailError, setEmailError] = useState('')
    const [loading, setLoading] = useState(false)

    // anytime success message is changed change it back to '' after 6 seconds
    useEffect(() => {
        const stateTimer = async () => {
            await new Promise((resolve) => setTimeout(resolve, 9000)).then(() => {
                setEmailSuccess('')
                setEmailError('')
            })
        };
        stateTimer()
    }, [emailSuccess, emailError])

    // runs when submitting email to send
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(
            import.meta.env.VITE_REACT_APP_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_REACT_APP_USER_ID
        ).then(
            result => {
                setEmailSuccess("Email sent successfully");
                setLoading(false)
            },
            error => {
                setEmailError("Email send error")
                setLoading(false)
            }
        );
    }

    return (
        <>
            <Container>
                <InnerContainer>
                    <H2TitleContainer>
                        <H2 id='contact' margin='8rem 0 0 0'>Get In Touch</H2>
                    </H2TitleContainer>
                    <ContactContainer>
                        <FlexContactExtend>
                            <div className='left-side'>
                                <p className='paragraph'>
                                    To reach out about work, business, or anything in the tech field, send me a message using the form. I’m always happy to chat tech!
                                </p>
                                <div className='contact-icons'>
                                    <a href='https://www.linkedin.com/in/jared-jahnke-672b8317a/'><LinkedInIcon className='linkedin-icon' fontSize="large"/></a>
                                    <a href='https://github.com/JaredJ13'><GitHubIcon className='github-icon' fontSize="large"/></a>
                                </div>
                                {/* <p className='paragraph'>
                                    I am currently looking for internship and/or jr. dev positions.
                                </p> */}
                                {/* <p className='last-paragraph'>
                                    *Interested in getting your own quality website or web application built? Send a message with your project details for a quote or just a general inquiry about your project vision and I will get back to you asap!
                                </p> */}
                            </div>
                            <div className='middle'></div>
                            <div className='right-side'>
                                <form ref={form} onSubmit={(e) => sendEmail(e)}>
                                    <label name='users_name'>Name</label>
                                    <input type='text' name='users_name' required />
                                    <label name='users_email'>Email</label>
                                    <input type='email' name='users_email' required />
                                    <label name="users_message">Message</label>
                                    <textarea name='users_message' required />
                                    {loading ? <BarLoader
                                        color='#7fc490'
                                        loading={loading}
                                        size={150}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                        className='loading-bar'
                                    /> : ''}
                                    {emailSuccess !== '' && emailSuccess !== null ? <p className='email-success-message'>{emailSuccess}</p> : ''}
                                    {emailError !== '' && emailError !== null ? <p className='email-error-message'>{emailError}</p> : ''}
                                    <input className='submit-button' type='submit' value="Send Email" ></input>
                                </form>
                            </div>
                        </FlexContactExtend>
                    </ContactContainer>
                    <ArrowContainer>
                        <Link to='nav-menu' smooth={true} duration={1000}><img src={UpArrowIcon} alt='An up arrow icon' /></Link>
                        <Link to='nav-menu' smooth={true} duration={1000}><p>Return to Top</p></Link>
                    </ArrowContainer>
                </InnerContainer>
            </Container>
        </>
    )
}
