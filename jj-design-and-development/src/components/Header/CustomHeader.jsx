import { useState } from 'react'
import '../../styles/customHeader.css'
import MobileNavLinks from './MobileNavLinks'
import { TbMenu } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

import SiteLogo from '../../assets/jj-design-and-dev-logo.svg';

export default function CustomHeader(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <TbMenu className='open-icon' size='3.5rem' color='white' onClick={() => setOpenMenu(!openMenu)} />

  const closeIcon = <IoMdClose className='close-icon' size='3.5rem' color='white' onClick={() => setOpenMenu(!openMenu)} />

  const closeMobileMenu = () => setOpenMenu(false);

  return (
    <>
      <div className='header-container'>
        <div className='header-flex'>
          <img src={SiteLogo} className='site-logo' alt='JJ Design & Development website logo' />
          <ul>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='mobile-menu'>
          {openMenu ? closeIcon : hamburgerIcon}
        </div>
        <div className='mobile-menu-extension'>
          {openMenu && <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </div>
      </div>
    </>
  )
}
