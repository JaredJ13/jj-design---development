import { Link } from 'react-scroll'

import '../../styles/customHeader.css'

export default function MobileNavLinks(props) {
    return (
        <ul id='nav-menu' className='mobile-nav-links'>
            <Link className='header-li-mobile' to='about-me' smooth={true} duration={1000}>About Me</Link>
            <Link className='header-li-mobile' to='projects' smooth={true} duration={1000}>Projects</Link>
            <Link className='header-li-mobile' to='contact' smooth={true} duration={1000}>Contact</Link>
        </ul>
    )
}
