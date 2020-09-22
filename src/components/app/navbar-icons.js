import React from 'react'
import IconButton from '@material-ui/core/IconButton'

import LightModeIcon from '@material-ui/icons/WbSunny'
import DarkModeIcon from '@material-ui/icons/Brightness3'
import SearchIcon from '@material-ui/icons/Search'

const NavbarIcons = ({ translate, toggleDarkMode, theme, language }) => {
  const colors = {
    light: '#212529',
    dark: '#f8f9fa'
  }

  const style = {
    iconButton: {
      color: colors[theme]
    },
    icon: {
      maxWidth: '24px',
      maxHeight: '24px'
    },
    spacer: {
      flexGrow: 1
    },
    darkModeIcon: {
      transform: 'rotate(26deg)',
      maxWidth: '24px',
      maxHeight: '24px'
    }
  }

  return (
    <>
      <IconButton
        style={style.iconButton}
        aria-label="menu"
        color="inherit"
        href="/search/"
        title='Zoeken'
      >
        <SearchIcon style={style.icon} />
      </IconButton>
      <IconButton
        style={style.darkModeButton}
        aria-label="menu"
        onClick={toggleDarkMode}
        title='Toggle donker/helder'
      >
        {theme === 'dark' ? (
          <LightModeIcon style={style.icon} />
        ) : (
          <DarkModeIcon style={style.darkModeIcon} />
        )}
      </IconButton>
    </>
  )
}

export default React.memo(NavbarIcons)
