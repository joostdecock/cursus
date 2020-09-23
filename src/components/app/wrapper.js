import React, { useState, useEffect } from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core'
import * as themes from '../../themes'
import Navbar from './navbar'
import Footer from './footer'
import MenuIcon from '@material-ui/icons/Menu'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import '@freesewing/css-theme'
import 'typeface-roboto-condensed'
import MobileMenu from '../menus/mobile'
import useScrolledDown from '../../hooks/useScrolledDown'
import Meta from './meta'
import './cursus.scss'

/* This component should wrap all page content */
const AppWrapper = ({ app, children, context = null }) => {
  const [scrolledDown, setScrolledDown] = useState(false)

  useEffect(() => {
    app.setMounted(true)
  }, [])

  useScrolledDown((s) => setScrolledDown(s))

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  // Scroll to top style
  let sttBase = {
    right: app.mobile ? 'calc(1.5rem + 64px)' : '1rem',
    transition: 'margin-bottom ease-in-out 0.1s'
  }
  const style = {
    showStt: {
      ...sttBase,
      marginBottom: 0
    },
    hideStt: {
      ...sttBase,
      marginBottom: 'calc(-64px - 1rem)'
    }
  }

  let wrapperClasses = app.theme === 'light' ? 'theme-wrapper light' : 'theme-wrapper dark'
  if (app.menu) wrapperClasses += ' show-menu'
  if (app.tablet) wrapperClasses += ' tablet'
  if (app.mobile) wrapperClasses += ' mobile'
  if (!app.mobile && !app.tablet) wrapperClasses += ' desktop'

  if (!app.mounted)
    return (
      <MuiThemeProvider theme={createMuiTheme(themes[app.theme])}>
        <Meta app={app} />
        <div className={wrapperClasses}>
          {children}
          <Footer language={process.env.GATSBY_LANGUAGE} app={app} />
        </div>
      </MuiThemeProvider>
    )

  return (
    <MuiThemeProvider theme={createMuiTheme(themes[app.theme])}>
      <Meta app={app} />
      <div className={wrapperClasses}>
        {app.mobile ? (
          <>
            <Fab
              title='Menu'
              color="primary"
              className="fab primary only-xs"
              aria-label="Menu"
              onClick={app.toggleMenu}
            >
              {app.menu ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
            </Fab>
          </>
        ) : (
          <Navbar app={app} />
        )}
        <Fab
          title='Scroll naar boven'
          color="primary"
          className="fab secondary"
          arial-label="Scroll to top"
          onClick={scrollToTop}
          style={scrolledDown && !app.menu ? style.showStt : style.hideStt}
        >
          <UpIcon fontSize="inherit" />
        </Fab>
        {children}
        {app.mobile && (
          <div className="menu" onClick={app.closeNav}>
            <MobileMenu app={app} context={context} />
          </div>
        )}
        <Footer language={process.env.GATSBY_LANGUAGE} app={app} />
      </div>
    </MuiThemeProvider>
  )
}

export default AppWrapper
