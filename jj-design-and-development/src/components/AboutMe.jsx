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
import ProgrammingIcon from '../assets/black-icons/blk-programming-100.png';
import GymIcon from '../assets/black-icons/blk-pullups-100.png';
import ChessIcon from '../assets/black-icons/blk-king-100.png';
import MusicIcon from '../assets/black-icons/blk-music-heart-100.png';
import JSIcon from '../assets/black-icons/blk-js-100.png';
import ReactIcon from '../assets/black-icons/blk-react-native-100.png';
import NodeJSIcon from '../assets/black-icons/blk-nodejs-100.png';
import CsIcon from '../assets/black-icons/blk-cs-100.png';
import AspIcon from '../assets/black-icons/blk-asp-100.png';
import HtmlIcon from '../assets/black-icons/blk-html-100.png';
import CssIcon from '../assets/black-icons/blk-css3-100.png';
import BootstrapIcon from '../assets/black-icons/blk-bootstrap-100.png';
import MySqlIcon from '../assets/black-icons/blk-mysql-100.png';
import FirebaseIcon from '../assets/black-icons/blk-firebase-100.png';
import OracleIcon from '../assets/black-icons/blk-oracle-logo-100.png';
import GithubIcon from '../assets/black-icons/blk-github-100.png';
import FigmaIcon from '../assets/black-icons/blk-figma-100.png';

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
                            Hi, my name is Jared Jahnke. I'm a software developer who has completed a computer software development diploma with honors from the Northern Alberta Institute of Technology. I am currently working as a jr. software developer for CE Solutions. This company designs and develops software and web solutions for small to medium sized companies mainly in Alberta. My position primarily involves me investigating, planning, and implementing bug fixes, testing features, and designing and developing features for a variety of softwares. Everyday I continue to learn and, consequently, increase my confidence as a developer. Currently, I work with .Net Framework, Javascript, Node, Jquery, Vue, SQL Server, and Firebase (auth, storage, and firestore). My first job in this field has only solidified my love for programming and tech. Getting to put your mind together with team mates and tackle new challenges everyday is so rewarding and always presents opportunities to learn and grow as a developer and as a person.<br /><br />
                        </p>
                    </AboutParagraph>
                    <Flex>
                        <AboutIconExtended src={GymIcon} alt='Stick figure doing pullup' />
                        <AboutIconExtended src={ChessIcon} alt='King chess piece' />
                        <AboutIconExtended src={MusicIcon} alt='Musice symbol inside the outline of a heart' />
                    </Flex>
                    <AboutParagraph>
                        <p>
                            Outside of work, I enjoy a variety of hobbies such as lifting heavy objects in the gym, hiking, fishing, playing an assortment of competitive/strategic games like chess and Rainbow Six Siege, and listening to music (Zach Bryan is on shuffle right now). I also love to endulge in programming outside of work, whether it be developing a personal idea, playing around with new technologies, leetcode challenges, or hackathons (I just participated in my first one and will definetely be attending more). A technology I am really interested in right now is machine learning, I am working my way through some small tutorial projects so I can get a grasp on the major concepts and eventually implement models into personal projects. 
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
