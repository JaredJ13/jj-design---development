import { Link } from 'react-scroll'

import '../../styles/customHeader.css'
import { Header } from '../../styles/styled-components/all-styled-components'

export default function MobileNavLinks(props) {
    return (
        <Header>
            <ul id='nav-menu' className='mobile-nav-links'>
                <Link className='header-li-mobile' to='about-me' smooth={true} duration={1000}>About Me</Link>
                <Link className='header-li-mobile' to='projects' smooth={true} duration={1000}>Projects</Link>
                <Link className='header-li-mobile' to='contact' smooth={true} duration={1000}>Contact</Link>
            </ul>
        </Header>
    )
}
