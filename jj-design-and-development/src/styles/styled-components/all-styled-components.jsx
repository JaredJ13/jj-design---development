import styled from 'styled-components'

const breakpoints = {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
}

// *********Header Components*********
export const Header = styled.div`
    .header-container{
        background-color: #ffffff;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: #7fc490;
        font-size: 16px;
    }
    
    .site-logo{
        width: 23rem;
        position: absolute;
        left: 0;
    }
    
    .header-flex{
        display: flex;
        align-items: end;
        justify-content: space-between;
        width: 75%;
        margin: 0 auto;
        padding: 10rem 0 3rem 0;
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
        font-family: 'Poppins', sans-serif;
        margin-right: 2rem;
        margin-left: 2rem;
        color: #000;
    }
    
    .header-li:first-of-type{
        margin-left: 0.8rem;
    }
    
    .header-li:last-of-type{
        margin-right: 0.8rem;
    }
    
    .header-li:hover{
        color: #92dba4;
        transition: 0.2s ease-in;
        cursor: pointer;
    }
    
    /* mobile menu */
    
    .mobile-menu{
        width: 3.5rem;
        margin: 0 auto;
        color: #888888;
        font-family: 'Poppins', sans-serif;
    }
    
    .mobile-menu-icon{
        cursor: pointer;
    }
    
    .mobile-nav-links{
        display: block;
        width: 100%;
        text-align: center;
        color: #000000;
    }
    
    .open-icon:hover{
        cursor: pointer;
    }
    
    .close-icon{
        cursor: pointer;
    }
    
    .mobile-nav-links{
        display: flex;
        flex-direction: column;
        border-top: 1px solid #7fc490;
    }
    
    .header-li-mobile:hover{
        color: #92dba4;
        transition: 0.3s ease-in;
        cursor: pointer;
        
    }
    
    .header-li-mobile{
        background-color: rgba(255, 255, 255, 0.947);
        padding-bottom: 2rem;
        padding-top: 2rem;
    }
    
    .mobile-menu-extension{
        width: 100%;
    }
    
    /* responsive styles */
    @media only screen and (max-width: 1024px){
        .site-logo{
            position: relative;
        }

        .header-flex{
            flex-direction: column;
            align-items: center;
            padding-top: 5rem;
        }
    }
    
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
    background-color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-family: ${(props) => props.fontFamily};
    width: 100%;
    height: 100%;
`

export const InnerContainer = styled.div`
    background-color: #ffffff;
    width: 70%;
    height: 100%;
    margin: 0 auto;

    @media only screen and (max-width:625px){
        width: 85%;
    }
`

// *********Flex Components*********
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    margin: ${(props) => props.margin};
    flex-direction: ${(props) => props.flexDirection};
`


// *********About Me Page Components*********
export const H2TitleContainer = styled.div`
    width: 386px;
    background-color: #ffffff;
    /* border-bottom: 1px solid #7fc490; */
    margin: 10rem auto 0 auto;

    aside{
        text-align: center;
    }

    @media only screen and (max-width:1280px ){
        width: 40%;
    }

    @media only screen and (max-width: 768px){
        width: 50%;
    }
`

export const H2 = styled.h2`
    color: #7fc490;
    color: ${(props) => props.color};
    font-size: 22px;
    text-align: center;
    margin: ${(props) => props.margin};

    @media only screen and (max-width: 320px){
        font-size: 18px;
    }
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
    border-bottom: 1px solid #7fc490;

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
    
    border-top: 1px solid #7fc490;

    p{
        margin-top: 1rem;
        font-family: 'Oxygen', sans-serif;
        width: 70%;
    }

    @media only screen and (max-width:1280px ){
        width: 100%;
    }

    @media only screen and (max-width: 625px){
        p{
            width: 100%;
        }
    }

    @media only screen and (max-width: 320px){
        font-size: 12px;
    }
`

export const AboutParagraphExtend = styled(AboutParagraph)`
    p{
        width: auto;
    }

    @media only screen and (max-width: 625px){
        flex-direction: column-reverse;
    }
`

export const H3 = styled.h3`
    font-family: 'Oxygen', sans-serif;
    color: #888888;
    text-align: center;
    font-size: 22px;
    margin-top: 5rem;
    margin: ${(props) => props.margin};
    font-weight: ${(props) => props.fontWeight};

    @media only screen and (max-width: 320px){
        font-size: 18px;
    }
`

export const PersonalImage = styled.div`
    margin-top: 6%;
    margin-right: 2rem;
    width: 30%; 
    height: 30%;
    border-radius: 50%; 
    overflow: hidden; 
    img {
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
    }

    @media only screen and (max-width: 625px){
        margin: 1rem auto 0 auto;
    }
`;

export const AboutParagraphFlexExtend = styled(Flex)`
    @media only screen and (max-width: 625px){
        flex-direction: column;
    }
`

// *********Projects Page Components*********
export const Card = styled.div`
    width: 100%;
    background-color: #ffffff;
    filter: drop-shadow(0px 0px 15px #dbdbdb);
    border-radius: 8px;

    @media only screen and (max-width: 625px){
            height: 100%;
        }  

    .left-side{
        width: 30%;
        height: 100%;
        background-color: #ffffff;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;

        @media only screen and (max-width: 625px){
            width: 100%;
            border-top-right-radius: 0px;
            border-top-left-radius: 0px;
            border-bottom-right-radius: 8px;
        }  
    }

    .left-side img{
        height: 500px;
        width: 100%;
        object-fit: cover;
        object-position: top;
        transition: all 5s linear;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;

        @media only screen and (max-width: 625px){
            width: 100%;
            height: 300px;
            border-top-right-radius: 0px;
            border-top-left-radius: 0px;
            border-bottom-right-radius: 8px;
        }  
    }

    .left-side img:hover{
        cursor: pointer;
        object-position: bottom;
    }

    .mini-div{
        width: 1px;
        margin: 1% 0 1% 0.5rem;
        background-color: #7fc490;

        @media only screen and (max-width: 625px){
            display: none;
        }
    }

    .right-side{
        width: 69%;
        height: 100%;
        background-color: #ffffff;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        @media only screen and (max-width: 625px){
            width: 100%;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 0px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 0px;
        }  
    }

    .right-p-container{
        border-top: 1px solid #7fc490;
        margin-right: 7%;
        padding: 2rem 0 0 1.5rem;
        min-height: 178px;

        p{
            font-family: 'Oxygen', sans-serif;
            font-size: 16px;
            margin-bottom: 2rem;

            @media only screen and (max-width: 1024px){
                font-size: 14px;
            }

            @media only screen and (max-width: 768px){
                font-size: 13px;
            }

            @media only screen and (max-width: 625px){
                position: relative;
            }  

            @media only screen and (max-width: 432px){
                font-size: 12px;
            }

            @media only screen and (max-width: 320px){
                font-size: 11px;
            }
        }
    }

    .right-icon-container{
        @media only screen and (max-width: 625px){
            margin-bottom: 2rem;
        } 
    }

    .icon{
        width: 3.5rem;

        @media only screen and (max-width: 432px){
            width: 2.5rem;
        }
    }

    .node-icon{
        margin-left: 0.5rem;
    }

    .firebase-icon{
        width: 3rem;

        @media only screen and (max-width: 432px){
            width: 2rem;
        }
    }

    .vue-icon{
        width: 3rem;

        @media only screen and (max-width: 432px){
            width: 2rem;
        }
    }

    .tailwind-icon{
        width: 3rem;

        @media only screen and (max-width: 432px){
            width: 2rem;
        }
    }

    .electron-icon{
        width: 3rem;

        @media only screen and (max-width: 432px){
            width: 2rem;
        }
    }
`

export const H3ProjectsExtend = styled(H3)`
    a{
        color: #888888;
    }

    a:hover{
        color: #92dba4;
        transition: 0.2s ease-in;
    }

    @media only screen and (max-width: 768px){
        font-size: 18px;
    }

    @media only screen and (max-width: 432px){
        font-size: 16px;
    }

    @media only screen and (max-width: 338px){
        font-size: 14px;
    }

    @media only screen and (max-width: 320px){
        font-size: 12px;
    }
`

export const FlexProjectsExtend = styled(Flex)`
    @media only screen and (max-width: 625px){
        flex-direction: column-reverse;
    }
`

// *********Contact Page Components*********
export const ContactContainer = styled.div`
    margin: 4rem auto 0 auto;
    padding-bottom: 8rem;
    width: 100%;

    .left-side{
        width: 42%;

        @media only screen and (max-width: 625px){
            width: 100%;
            margin-bottom: 3rem;
        }
    }

    p{
        color: #000000;
        font-size: 16px;
        font-family: 'Oxygen', sans-serif;

        @media only screen and (max-width: 432px){
            font-size: 15px;
        }
    }

    .paragraph{
        margin-bottom: 1rem;
    }

    .last-paragraph{
        color: #7fc490;
    }

    .middle{
        margin: 0 auto;
        width: 1px;
        background-color: #7fc490; 

        @media only screen and (max-width: 625px){
            width: 100%;
            height: 1px;
            margin-bottom: 3rem;
        }
    }

    .right-side{
        width: 42%;

        @media only screen and (max-width: 625px){
            width: 100%;
        }
    }

    label{
        width: 100%;
        color: #7fc490;
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

        @media only screen and (max-width: 625px){
            height: 12rem;
        }
    }

    .submit-button{
        width: 13rem;
        padding: 1rem;
        margin: 1rem 0 0 0;
        background-color: #7fc490;
        color: #ffffff;
        border-radius: 4px;
        border: none;
        font-family: 'Oxygen', sans-serif;
    }

    .submit-button:hover{
        cursor: pointer;
        background-color: #92dba4;
        transition: 0.2s ease-in;
    }

    .contact-icons{
        a{
            color: #7fc490;
        }

        .linkedin-icon:hover, .github-icon:hover{
            color: #92dba4;
            cursor: pointer;
            transition: 0.2s ease-in;
        }
    }
`

export const FlexContactExtend = styled(Flex)`
    @media only screen and (max-width: 625px){
        flex-direction: column;
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
        color: #7fc490;
        font-size: 12px;
        font-family: 'Oxygen', sans-serif;
        text-align: center;
    }

    p:hover{
        color: #92dba4;
        cursor: pointer;
        transition: 0.2s ease-in;
    }
`

// *********Footer Components*********
export const FooterContainer = styled.div`
    margin: 8rem 0 0 0;
    padding-bottom: 0.2rem;
    line-height: 1;
    background-color: #fff;

    p{
        font-family: 'Oxygen', sans-serif;
        font-size: 10px;
        color: #000000;
        text-align: center;
    }

    a{
        width: 2rem;
        margin: 0 0 0 0.2rem;
    }

    a:hover{
        cursor: pointer;
        color: blue;
    }
`