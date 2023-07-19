import { useState, useEffect, forwardRef } from 'react'
import { Link } from 'react-scroll'

import { Header } from '../../styles/styled-components/all-styled-components'
import MobileNavLinks from './MobileNavLinks'
import { TbHandClick, TbMenu } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'

import SiteLogo from '../../assets/jj-design-and-dev-logo.svg';

const CustomHeader = forwardRef((props, ref) => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <TbMenu className='open-icon' size='3.5rem' color='white' onClick={() => setOpenMenu(!openMenu)} />

  const closeIcon = <IoMdClose className='close-icon' size='3.5rem' color='white' onClick={() => setOpenMenu(!openMenu)} />

  const closeMobileMenu = () => setOpenMenu(false);

  return (
    <>
      <Header>
        <div id='nav-menu' className='header-container'>
          <div className='header-flex'>
            <img src={SiteLogo} className='site-logo' alt='JJ Design & Development website logo' />
            <ul>
              <Link className='header-li' to='about-me' smooth={true} duration={1000}>About Me</Link>
              <Link className='header-li' to='projects' smooth={true} duration={1000}>Projects</Link>
              <Link className='header-li' to='contact' smooth={true} duration={1000}>Contact</Link>
            </ul>
          </div>
          <div className='mobile-menu'>
            {openMenu ? closeIcon : hamburgerIcon}
          </div>
          <div className='mobile-menu-extension'>
            {openMenu && <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
          </div>
        </div>
      </Header>
    </>
  )
})

CustomHeader.displayName = 'CustomHeader';

export default CustomHeader;


