import { useState, useEffect, forwardRef } from 'react'
import { Link } from 'react-scroll'
import { Collapse } from '@mui/material'

import { Header, H2, Container, InnerContainer } from '../../styles/styled-components/all-styled-components'
import MobileNavLinks from './MobileNavLinks'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import SiteLogo from '../../assets/jj-design-and-dev-logo.svg';

const CustomHeader = forwardRef((props, ref) => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <MenuIcon sx={{fontSize:'3.5rem'}} className='open-icon' onClick={() => setOpenMenu(!openMenu)} />

  const closeIcon = <CloseIcon sx={{fontSize:'3.5rem'}} className='close-icon' onClick={() => setOpenMenu(!openMenu)} />

  const closeMobileMenu = () => setOpenMenu(false);

  return (
    <>
    <Container>
      <InnerContainer>
        <Header>
          <div id='nav-menu' className='header-container'>
            <div className='header-flex'>
              <H2>Jared Jahnke</H2>
              {/* <img src={SiteLogo} className='site-logo' alt='JJ Design & Development website logo' /> */}
              <ul>
                <Link className='header-li' to='about-me' smooth={true} duration={1000}>About Me</Link>
                <Link className='header-li' to='projects' smooth={true} duration={1000}>Projects</Link>
                <Link className='header-li' to='contact' smooth={true} duration={1000}>Get In Touch</Link>
              </ul>
            </div>
            <div className='mobile-menu'>
              {openMenu ? closeIcon : hamburgerIcon}
            </div>
            <div className='mobile-menu-extension'>
              <Collapse in={openMenu}><MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /></Collapse>
            </div>
          </div>
        </Header>
      </InnerContainer>
    </Container>
    </>
  )
})

CustomHeader.displayName = 'CustomHeader';

export default CustomHeader;


