import { Flex, FooterContainer } from "../styles/styled-components/all-styled-components";

import GithubIcon from '../assets/white-icons/icons8-github-48.png'

export default function Footer() {
    return (
        <>
            <FooterContainer>

                <p>Jared Jahnke - 2023 - jaredjahnke@hotmail.com - Built with React</p>
                <Flex alignItems='center'>
                    <p>View this sites code repo - </p>
                    <a href="https://github.com/JaredJ13/jj-design---development"><img src={GithubIcon} alt="GitHub Icon"></img></a>
                </Flex>

            </FooterContainer>
        </>
    )
}
