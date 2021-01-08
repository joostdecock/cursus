import React from 'react'
import LightModeIcon from '@material-ui/icons/WbSunny'
import DarkModeIcon from '@material-ui/icons/Brightness3'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@freesewing/components/Icon'
import UpdatesIcon from '../UpdatesIcon'
import JargonIcon from '@material-ui/icons/MenuBook'

const MobileMenu = ({ app, mainMenu }) => {

  // Style
  const colors = {
    light: '#212529',
    dark: '#f8f9fa'
  }
  const style = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh'
    },
    icons: {
      textAlign: 'center',
      margin: '1rem auto'
    },
    iconButton: {
      color: colors[app.theme]
    },
    toggle: {
      display: 'flex',
      flexDirection: 'row',
      color: 'inherit',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 1.5rem'
    }
  }

  return (
    <div style={style.wrapper}>
      <div style={style.icons}>
        <IconButton
          style={style.iconButton}
          aria-label='Nieuws en updates'
          color="inherit"
          href='/nieuws/'
          title='Nieuws en updates'
        >
          <UpdatesIcon />
        </IconButton>
        <IconButton
          style={style.iconButton}
          aria-label='Verklarende woordenlijst'
          color="inherit"
          href='/jargon/'
          title='Verklarende woordenlijst'
        >
          <JargonIcon />
        </IconButton>
        <IconButton
          style={style.darkModeButton}
          aria-label={
            app.theme === 'dark' ? 'Light mode' : 'Dark mode'
          }
          onClick={app.toggleDarkMode}
          title={
            app.theme === 'dark' ? 'Light mode' : 'Dark mode'
          }
        >
          {app.theme === 'dark' ? (
            <LightModeIcon style={style.lightModeIcon} />
          ) : (
            <DarkModeIcon style={style.darkModeIcon} />
          )}
        </IconButton>
      </div>

      {mainMenu}
    </div>
  )
}

export default MobileMenu
