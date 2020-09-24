import React from 'react'
import MainAside from './main-aside'
import NavbarIcons from '../app/navbar-icons'
import ReadMore from '../readmore'

const MobileMenu = ({app}) => {

  return (
    <div className='mob-menu'>
      <NavbarIcons
        toggleDarkMode={app.toggleDarkMode}
        theme={app.theme}
      />
      <MainAside app={app} />
      {app.context}
    </div>
  )
}

export default MobileMenu
