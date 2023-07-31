// import styled components
import {
    H2,
    Container,
    InnerContainer,
    H2TitleContainer,
    AboutIcon,
    AboutParagraph,
    Flex,
    AboutIconExtended,
    H3,
    MySkillsContainer,
    MySkillsContainerRow
} from '../styles/styled-components/all-styled-components';

// import icons
import ProgrammingIcon from '../assets/white-icons/icons8-programming-100.png';
import GymIcon from '../assets/white-icons/icons8-pullups-100.png';
import ChessIcon from '../assets/white-icons/icons8-king-100.png';
import MusicIcon from '../assets/white-icons/icons8-music-heart-100.png';
import JSIcon from '../assets/white-icons/icons8-js-100.png';
import ReactIcon from '../assets/white-icons/icons8-react-native-100.png';
import NodeJSIcon from '../assets/white-icons/icons8-nodejs-100.png';
import CsIcon from '../assets/white-icons/icons8-cs-100.png';
import AspIcon from '../assets/white-icons/icons8-asp-100.png';
import HtmlIcon from '../assets/white-icons/icons8-html-100.png';
import CssIcon from '../assets/white-icons/icons8-css3-100.png';
import BootstrapIcon from '../assets/white-icons/icons8-bootstrap-100.png';
import MySqlIcon from '../assets/white-icons/icons8-mysql-100.png';
import FirebaseIcon from '../assets/white-icons/icons8-firebase-100.png';
import OracleIcon from '../assets/white-icons/icons8-oracle-logo-100.png';
import GithubIcon from '../assets/white-icons/icons8-github-100.png';
import FigmaIcon from '../assets/white-icons/icons8-figma-100.png';

export default function AboutMe() {
    return (
        <>
            <Container>
                <InnerContainer>
                    <H2TitleContainer>
                        <H2 id='about-me'>About Me</H2>
                    </H2TitleContainer>
                    <AboutIcon src={ProgrammingIcon} alt='Desktop monitor with coding icon' />
                    <AboutParagraph>
                        <p>
                            Hi, my name is Jared Jahnke. I'm a junior developer who has completed a two-year computer software development diploma with honors from the Northern Alberta Institute of Technology and have developed a small, but serious, arsenal of coding skills. I enjoy working with Javascript, React, and Node the most, but am interested in any format of coding.<br /><br /> Since I was young I have always been enchanted by the idea of how lines of code can be used to produce pretty much anything you can imagine; I attempted to teach myself online a few times throughout my teenage years but, due to the vast amount of technologies available, I had trouble finding the best place to start. I explored a few different fields after highschool but was eventually drawn back to my strong desire to become a developer and I have no regrets, this is my passion! I am consistently sharpening my skills and looking to learn further and grow as a developer.
                        </p>
                    </AboutParagraph>
                    <Flex>
                        <AboutIconExtended src={GymIcon} alt='Stick figure doing pullup' />
                        <AboutIconExtended src={ChessIcon} alt='King chess piece' />
                        <AboutIconExtended src={MusicIcon} alt='Musice symbol inside the outline of a heart' />
                    </Flex>
                    <AboutParagraph>
                        <p>
                            Outside of coding, I enjoy a variety of hobbies such as lifting heavy objects in the gym, hiking, fishing, playing an assortment of competitive/strategic games like chess and Rainbow Six Siege, and listening to music (Zach Bryan is on shuffle right now) and playing music (currently teaching myself guitar!).
                        </p>
                    </AboutParagraph>
                    <H3>- Skills -</H3>
                    <MySkillsContainer>
                        <MySkillsContainerRow>
                            <img src={JSIcon} alt='JavaScript icon' />
                            <img className='react-icon' src={ReactIcon} alt='ReactJS icon' />
                            <img src={NodeJSIcon} alt='NodeJS icon' />
                        </MySkillsContainerRow>
                        <MySkillsContainerRow>
                            <img src={CsIcon} alt='C# icon' />
                            <img src={AspIcon} alt='Asp icon' />
                        </MySkillsContainerRow>
                        <MySkillsContainerRow>
                            <img src={HtmlIcon} alt='HTML icon' />
                            <img src={CssIcon} alt='CSS3 icon' />
                            <img src={BootstrapIcon} alt='Bootstrap framework icon' />
                        </MySkillsContainerRow>
                        <MySkillsContainerRow>
                            <img src={MySqlIcon} alt='MySQL icon' />
                            <img className='firebase-icon' src={FirebaseIcon} alt='Google Firebase icon' />
                            <img src={OracleIcon} alt='Oracle icon' />
                        </MySkillsContainerRow>
                        <MySkillsContainerRow>
                            <img src={GithubIcon} alt='Github icon' />
                            <img className='figma-icon' src={FigmaIcon} alt='Figma icon' />
                        </MySkillsContainerRow>
                    </MySkillsContainer>
                </InnerContainer>
            </Container>
        </>
    )
}
