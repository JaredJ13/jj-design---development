import { Container, H2TitleContainer, InnerContainer, H2, Card, Flex, H3 } from "../styles/styled-components/all-styled-components";

// icon imports
import ReactIcon from '../assets/white-icons/icons8-react-native-100.png';
import NodeJSIcon from '../assets/white-icons/icons8-nodejs-100.png';
import CssIcon from '../assets/white-icons/icons8-css3-100.png';
import FirebaseIcon from '../assets/white-icons/icons8-firebase-100.png';

// img imports
import HazzardCountyProject from '../assets/hazzard-county-project/hazzard-project-combined.jpg'


export default function Projects() {
    return (
        <>
            <Container>
                <InnerContainer>
                    <H2TitleContainer>
                        <H2 id="projects">Projects</H2>
                    </H2TitleContainer>
                    <Card>
                        <Flex>
                            <div className="left-side">
                                <a href="https://hazzardcountybarandgrill.ca"><img src={HazzardCountyProject} alt="hazzardcountybarandgrill.ca website overview" /></a>
                            </div>
                            <div className="mini-div"></div>
                            <div className="right-side">
                                <H3 margin='1.5rem 0 1rem 0' fontWeight='500'>Responsive Restaurant Web App</H3>
                                <div className="right-p-container">
                                    <p>
                                        This was built for a bar and grill in Sylvan Lake, AB.
                                    </p>
                                    <p>
                                        The tech used involves Vite, React JS, Firestore, CSS,
                                        and a couple node packages for minor animation and
                                        the contact page email form.
                                    </p>
                                    <p>
                                        The site features an admin component that allows an admin
                                        to login and perform CRUD functionalities to manage
                                        the upcoming music posts on the “Live Music” page.
                                    </p>
                                </div>
                                <div className="right-icon-container">
                                    <Flex justifyContent='space-evenly' margin='0 0 0 1.2rem'>
                                        <img className='icon' src={ReactIcon} alt='ReactJS icon' />
                                        <img className='icon node-icon' src={NodeJSIcon} alt='NodeJS icon' />
                                        <img className='icon' src={CssIcon} alt='CSS3 icon' />
                                        <img className='icon firebase-icon' src={FirebaseIcon} alt='Google Firebase icon' />
                                    </Flex>
                                </div>
                            </div>
                        </Flex>
                    </Card>
                </InnerContainer>
            </Container>
        </>
    )
}
