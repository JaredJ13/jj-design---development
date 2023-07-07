import { Link } from 'react-router-dom'

import '../../styles/customHeader.css'

export default function MobileNavLinks(props) {
    return (
        <ul className='mobile-nav-links'>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    )
}
