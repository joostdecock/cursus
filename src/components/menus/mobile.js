import React from 'react'
import MainAside from './main-aside'
import NavbarIcons from '../app/navbar-icons'

const MobileMenu = ({ app, context }) => {

  return (
    <div className='mob-menu'>
      <NavbarIcons
        toggleDarkMode={app.toggleDarkMode}
        theme={app.theme}
      />
      <MainAside app={app} context={context} />
    </div>
  )
}

export default MobileMenu
