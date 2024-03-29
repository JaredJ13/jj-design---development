import {
  Flex,
  FooterContainer,
} from "../styles/styled-components/all-styled-components";
import CustomTransition from "./Transitions/CustomTransition";

import GithubIcon from "../assets/black-icons/blk-github-48.png";

export default function Footer() {
  return (
    <>
      <CustomTransition type="fade">
        <FooterContainer>
          <p>Built with React</p>
          <Flex alignItems="center">
            <p>View this sites code repo </p>
            <a href="https://github.com/JaredJ13/jj-design---development">
              <img src={GithubIcon} alt="GitHub Icon"></img>
            </a>
          </Flex>
        </FooterContainer>
      </CustomTransition>
    </>
  );
}
