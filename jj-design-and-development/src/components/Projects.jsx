import { Container, H2TitleContainer, InnerContainer, H2, Card, Flex, H3ProjectsExtend, FlexProjectsExtend, ResourceProjectCardExtend, InnerContainerProjectsExtend } from "../styles/styled-components/all-styled-components";

// icon imports
import ReactIcon from '../assets/black-icons/blk-react-native-100.png';
import NodeJSIcon from '../assets/black-icons/blk-nodejs-100.png';
import CssIcon from '../assets/black-icons/blk-css3-100.png';
import FirebaseIcon from '../assets/black-icons/blk-firebase-100.png';

// img imports
import HazzardCountyProject from '../assets/hazzard-county-project/hazzard-project-combined.jpg'
import ResourceCompassProject from '../assets/resource-compass-project/resource-compass-combined.jpg'

export default function Projects() {
    return (
        <>
            <Container>
                <InnerContainerProjectsExtend>
                    <H2TitleContainer>
                        <H2 id="projects">Projects</H2>
                    </H2TitleContainer>
                    <Card>
                        <FlexProjectsExtend>
                            <div className="left-side">
                                <a href="https://hazzardcountybarandgrill.ca"><img src={HazzardCountyProject} alt="hazzardcountybarandgrill.ca website overview" /></a>
                            </div>
                            <div className="mini-div"></div>
                            <div className="right-side">
                                <H3ProjectsExtend margin='1.5rem 0 1rem 0' fontWeight='500'>Responsive Restaurant Web App</H3ProjectsExtend>
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
                                    <Flex justifyContent='start' margin='0 0 0 1.2rem'>
                                        <img className='icon' src={ReactIcon} alt='ReactJS icon' />
                                        <img className='icon node-icon' src={NodeJSIcon} alt='NodeJS icon' />
                                        <img className='icon' src={CssIcon} alt='CSS3 icon' />
                                        <img className='icon firebase-icon' src={FirebaseIcon} alt='Google Firebase icon' />
                                    </Flex>
                                </div>
                            </div>
                        </FlexProjectsExtend>
                    </Card>
                    <ResourceProjectCardExtend>
                        <FlexProjectsExtend>
                            <div className="left-side">
                                <a><img src={ResourceCompassProject} alt="Resource compass web-app overview" /></a>
                            </div>
                            <div className="mini-div"></div>
                            <div className="right-side">
                                <H3ProjectsExtend margin='1.5rem 0 1rem 0' fontWeight='500'>Resource Compass Web App</H3ProjectsExtend>
                                <div className="right-p-container">
                                    <p>
                                        This was built by my capstone team for a non-profit established in Edmonton, AB.
                                    </p>
                                    <p>
                                        The tech used involves Parcel, React JS, Firestore, CSS,
                                        and node packages for loading animations and a multi-select for forms.
                                    </p>
                                    <p>
                                        The purpose of this site was to house Alberta resources for people facing physical and mental disabilities and allow users to filter through the database based on their specific criteria. This site enabled people to suggest Alberta resources in which a site admin or volunteer could then perform CRUD operations on the resources and adjust if they would be available for the public to view using the application. *NDA prohibits app and code to be viewed
                                    </p>
                                </div>
                                <div className="right-icon-container">
                                    <Flex justifyContent='start' margin='0 0 0 1.2rem'>
                                        <img className='icon' src={ReactIcon} alt='ReactJS icon' />
                                        <img className='icon node-icon' src={NodeJSIcon} alt='NodeJS icon' />
                                        <img className='icon' src={CssIcon} alt='CSS3 icon' />
                                        <img className='icon firebase-icon' src={FirebaseIcon} alt='Google Firebase icon' />
                                    </Flex>
                                </div>
                            </div>
                        </FlexProjectsExtend>
                    </ResourceProjectCardExtend>
                </InnerContainerProjectsExtend>
            </Container>
        </>
    )
}
