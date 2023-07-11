import styled from 'styled-components'

// *********Container Components*********
export const Container = styled.section`
    font-family: 'rufina', serif;
    font-family: ${(props) => props.fontFamily};
    width: 100%;
    height: 100%;
`

export const InnerContainer = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
`

// *********Flex Components*********
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    margin: ${(props) => props.margin};
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
    margin: 0 auto 5rem auto;

    img{
        width: 8rem;
    }

    .react-icon{
        width: 7rem;
    }

    .firebase-icon{
        width: 6rem;
    }

    .figma-icon{
        width: 6rem;
    }
`

export const MySkillsContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    margin: 0 auto 1.5rem auto;
    padding-bottom:1rem ;
    border-bottom: 1px solid #dabfa7;
`

export const AboutParagraph = styled.div`
    width: 80rem;
    height: 100%;
    margin: 0 auto 0rem auto;
    text-align: center;
    border-top: 1px solid #dabfa7;

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
    font-weight: ${(props) => props.fontWeight};
`

// *********Projects Page Components*********
export const Card = styled.div`
    width: 100%;
    height: 360px;
    margin: 4rem 0 2rem 0;
    background-color: #1b1b1b;
    filter: drop-shadow(0px 0px 15px #ffffff);
    border-radius: 2px;

    .left-side{
        width: 30%;
        height: 360px;
        background-color: #1b1b1b;
    }

    .mini-div{
        width: 1px;
        margin: 1% 0 1% 0.5rem;
        background-color: #ffffff;
    }

    .right-side{
        width: 69%;
        height: 360px;
        background-color: #1b1b1b;
    }

    .right-p-container{
        border-top: 1px solid #ffffff;
        margin-right: 7%;
        padding: 2rem 0 0 1.5rem;

        p{
            font-family: 'Oxygen', sans-serif;
            font-size: 16px;
            margin-bottom: 2rem;
        }
    }

    .right-icon-container{
        width: 16rem;
        height: 7.8rem;
        margin-top: 4rem;
    }

    .icon{
        margin-top: 1rem;
        width: 3.5rem;
    }

    .node-icon{
        margin-left: 0.5rem;
    }

    .firebase-icon{
        width: 3rem;
    }
`