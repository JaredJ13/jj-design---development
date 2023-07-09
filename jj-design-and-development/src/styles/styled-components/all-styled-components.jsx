import styled from 'styled-components'

// *********Container Components*********
export const Container = styled.section`
font-family: 'rufina', serif;
font-family: ${(props) => props.fontFamily};
    width: 100%;
`

export const InnerContainer = styled.div`
    width: 70%;
    margin: 0 auto;
`

// *********Flex Components*********
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    justify-content: ${(props) => props.justifyContent};
`


// *********About Me Page Components*********
export const H2TitleContainer = styled.div`
    width: 386px;
    background-color: #000000;
    border-bottom: 1px solid #afe1f6;
    margin: 0 auto;
`

export const H2 = styled.h2`
    color: #afe1f6;
    color: ${(props) => props.color};
    font-size: 22px;
    text-align: center;
`

export const AboutIcon = styled.img`
    width: 4rem;
    margin: 3rem auto 1rem auto;
`

export const AboutIconExtended = styled(AboutIcon)`
    margin: 2rem 0 1rem 0;
`

export const MySkillsContainer = styled.div`
    width: 50rem;
    margin: 0 auto;

    img{
        width: 8rem;
    }
`
export const MySkillsContainerRow = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 auto 1.5rem auto;
    padding-bottom:1rem ;
    border-bottom: 1px solid #afe1f6;
`

export const AboutParagraph = styled.div`
    width: 80rem;
    height: 100%;
    margin: 0 auto 0rem auto;
    text-align: center;
    border-top: 1px solid #afe1f6;

    p{
        font-family: 'Oxygen', sans-serif;
    }
`

export const H3 = styled.h3`
    font-family: 'Oxygen', sans-serif;
    color: #dabfa7;
    text-align: center;
    font-size: 22px;
    margin-top: 5rem;
    margin: ${(props) => props.margin};
`
