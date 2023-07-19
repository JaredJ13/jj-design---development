import { Link } from 'react-scroll'


import { Header } from '../../styles/styled-components/all-styled-components'

export default function MobileNavLinks(props) {
    return (
        <Header>
            <ul id='nav-menu' className='mobile-nav-links'>
                <Link className='header-li-mobile' to='about-me' onClick={props.closeMobileMenu} smooth={true} duration={1000}>About Me</Link>
                <Link className='header-li-mobile' to='projects' onClick={props.closeMobileMenu} smooth={true} duration={1000}>Projects</Link>
                <Link className='header-li-mobile' to='contact' onClick={props.closeMobileMenu} smooth={true} duration={1000}>Contact</Link>
            </ul>
        </Header>
    )
}
