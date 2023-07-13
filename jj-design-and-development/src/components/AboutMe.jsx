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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </AboutParagraph>
                    <Flex>
                        <AboutIconExtended src={GymIcon} alt='Stick figure doing pullup' />
                        <AboutIconExtended src={ChessIcon} alt='King chess piece' />
                        <AboutIconExtended src={MusicIcon} alt='Musice symbol inside the outline of a heart' />
                    </Flex>
                    <AboutParagraph>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </AboutParagraph>
                    <H3>- My Skills -</H3>
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
