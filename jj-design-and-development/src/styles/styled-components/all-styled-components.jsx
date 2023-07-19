import styled from 'styled-components'

const breakpoints = {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
}

const devices = {
    xs: `(max-width: ${breakpoints.xs})`,
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
    xl: `(max-width: ${breakpoints.xl})`,
    xxl: `(max-width: ${breakpoints.xxl})`,
}

// *********Header Components*********
export const Header = styled.div`
    .header-container{
        background-color: #000000;
        font-family: 'Rufina', serif;
        font-weight: bold;
        color: #afe1f6;
        font-size: 16px;
    }
    
    .site-logo{
        width: 23rem;
        position: absolute;
        left: 0;
    }
    
    .header-flex{
        position: relative;
        display: flex;
        align-items: end;
        justify-content: center;
        width: 75%;
        margin: 0 auto;
        padding: 9rem 0 3rem 0;
    }
    
    .header-flex ul{
        display: flex;
        position: 0 auto;
        margin-bottom: 0.45rem;
    }
    
    /* .header-flex ul:before,
    .header-flex ul:after {
        content: '';
        border-top: 2px solid #00ff6a;
        margin: 0 0px 0 0;
        flex: 1 0 20px;
    }
    .header-flex ul:after {
        margin: 0 0 0 0px;
    } */
    
    .header-li {
        font-family: 'Rufina', serif;
        margin-right: 2rem;
        margin-left: 2rem;
        color: #dabfa7;
    }
    
    .header-li:first-of-type{
        margin-left: 0.8rem;
    }
    
    .header-li:last-of-type{
        margin-right: 0.8rem;
    }
    
    .header-li:hover{
        color: white;
        transition: 0.2s ease-in;
        cursor: pointer;
    }
    
    /* mobile menu */
    
    .mobile-menu{
        width: 3.5rem;
        margin: 0 auto;
    }
    
    .mobile-menu-icon{
        cursor: pointer;
    }
    
    .mobile-nav-links{
        width: 100%;
        text-align: center;
        color: #ff7c00;
    }
    
    .open-icon:hover{
        cursor: pointer;
    }
    
    .close-icon{
        cursor: pointer;
    }
    
    .mobile-nav-links{
        border-top: 1px solid #ff7c00;
    }
    
    .header-li-mobile:hover{
        color: #ffffff;
        transition: 0.3s ease-in;
        cursor: pointer;
        background-color: rgba(255, 161, 38, 0.548);
    }
    
    .header-li-mobile li{
        font-family: 'Rufina', sans-serif;
        background-color: rgba(66, 66, 66, 0.822);
        padding-bottom: 2rem;
        padding-top: 2rem;
    }
    
    .mobile-nav-links li:last-of-type{
        
    }
    
    .mobile-menu-extension{
        position:absolute;
        width: 100%;
        z-index: 1000;
    }
    
    /* responsive styles */
    
    @media only screen and (max-width: 580px){
        .header-flex ul:first-of-type{
            display: none;
        }
    }
    
    @media only screen and (min-width: 580px){
        .mobile-menu{
            display: none;
        }
        .mobile-menu-extension{
            display: none;
        }
    }
`

// *********Container Components*********
export const Container = styled.section`
    background-color: #000;
    font-family: 'rufina', serif;
    font-family: ${(props) => props.fontFamily};
    width: 100%;
    height: 100%;
`

export const InnerContainer = styled.div`
    background-color: #000;
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
    margin: 5rem auto 0 auto;

    @media only screen and (max-width:1280px ){
        width: 40%;
    }
`

export const H2 = styled.h2`
    color: #afe1f6;
    color: ${(props) => props.color};
    font-size: 22px;
    text-align: center;
    margin: ${(props) => props.margin};
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
        @media only screen and (max-width:768px ){
        width: 7rem;}

        @media only screen and (max-width:640px ){
        width: 6rem;}
    }

    .react-icon{
        width: 7rem;
        @media only screen and (max-width:768px ){
        width: 6rem;}
        @media only screen and (max-width:640px ){
        width: 5rem;}
    }

    .firebase-icon{
        width: 6rem;
        @media only screen and (max-width:768px ){
        width: 5rem;}
        @media only screen and (max-width:640px ){
        width: 4rem;}
    }

    .figma-icon{
        width: 6rem;
        @media only screen and (max-width:768px ){
        width: 5rem;}
        @media only screen and (max-width:640px ){
        width: 5rem;}
    }

    @media only screen and (max-width:1280px ){
        width: 40rem;
    }

    @media only screen and (max-width:640px ){
        width: 22rem;}

    @media only screen and (max-width:320px ){
        width: 18rem;}
`

export const MySkillsContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    margin: 0 auto 1.5rem auto;
    padding-bottom:1rem ;
    border-bottom: 1px solid #dabfa7;

    @media only screen and (max-width:1280px ){
        width: 50%;
    }

    @media only screen and (max-width:640px ){
        width: 100%;}

    @media only screen and (max-width:320px ){
        width: 100%;}
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

    @media only screen and (max-width:1280px ){
        width: 100%;
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
    min-height: 360px;
    max-height: fit-content;
    margin: 4rem 0 2rem 0;
    background-color: #1b1b1b;
    filter: drop-shadow(0px 0px 15px #ffffff);
    border-radius: 2px;

    .left-side{
        width: 30%;
        min-height: 360px;
        background-color: #1b1b1b;
    }

    .mini-div{
        width: 1px;
        margin: 1% 0 1% 0.5rem;
        background-color: #ffffff;
    }

    .right-side{
        width: 69%;
        min-height: 360px;
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

// *********Contact Page Components*********
export const ContactContainer = styled.div`
    margin: 4rem auto 0 auto;
    padding-bottom: 8rem;
    width: 100%;

    .left-side{
        width: 42%;
    }

    p{
        color: #fff;
        font-size: 16px;
        font-family: 'Oxygen', sans-serif;
    }

    .paragraph{
        margin-bottom: 1rem;
    }

    .last-paragraph{
        color: #dabfa7;
    }

    .middle{
        margin: 0 auto;
        width: 1px;
        background-color: #afe1f6; 
    }

    .right-side{
        width: 42%;
    }

    label{
        width: 100%;
        color: #dabfa7;
        font-size: 16px;
        font-family: 'Oxygen', sans-serif;
    }

    input{
        width: 100%;
        margin-bottom: 1rem;
        font-family: 'Oxygen', sans-serif;
        font-size: 16px;
    }

    textarea{
        width: 100%;
        font-family: 'Oxygen', sans-serif;
        font-size: 16px;
    }

    .submit-button{
        width: 13rem;
        padding: 1rem;
        margin: 1rem 0 0 0;
        background-color: #dabfa7;
        border-radius: 4px;
        border: none;
        font-family: 'Oxygen', sans-serif;
    }

    .submit-button:hover{
        cursor: pointer;
        background-color: #afe1f6;
        transition: 0.3s ease-in;
        font-size: 17px;
    }
`

export const ArrowContainer = styled.div`
    margin: 4rem auto 0 auto;
    width: 8rem;

    img{
        width: 8rem;
    }

    img:hover{
        cursor: pointer;
    }

    p{
        margin-top: 1rem;
        color: #dabfa7;
        font-size: 12px;
        font-family: 'Oxygen', sans-serif;
        text-align: center;
    }

    p:hover{
        cursor: pointer;
    }
`

// *********Footer Components*********
export const FooterContainer = styled.div`
    margin-top: 8rem;

    p{
        font-family: 'Oxygen', sans-serif;
        font-size: 10px;
        color: #fff;
        text-align: center;
    }
`