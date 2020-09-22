import React, { useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { Link } from 'gatsby'
import NavbarIcons from './navbar-icons'
import Logo from '../logo'

import Popover from '@material-ui/core/Popover'
import DocsMenu from '../menus/docs'

import DocsIcon from '@material-ui/icons/ChromeReaderMode'

export default function ButtonAppBar(props) {
  // Don't show on mobile
  if (props.app.mobile) return null

  const [docsAnchor, setDocsAnchor] = useState(null)

  const handleDocsOpen = (event) => setDocsAnchor(event.currentTarget)

  const handlePopoverClose = () => {
    setDocsAnchor(null)
  }

  const docsOpen = Boolean(docsAnchor)

  const colors = {
    light: '#212529',
    dark: '#f8f9fa'
  }

  const style = {
    wrapper: {
      flexGrow: 1,
      width: '100%',
      margin: 0,
      padding: 0,
      background: props.app.theme === 'dark' ? colors.light : colors.dark,
      zIndex: 15
    },
    logo: {
      textDecoration: 'none',
      height: '19.38px',
      width: '69px',
      padding: '11px',
      display: 'inline-block',
      color: colors[props.app.theme]
    },
    button: {
      height: '64px',
      padding: '0 18px'
    },
    iconButton: {
      color: colors[props.app.theme]
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

  const popoverProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    disableRestoreFocus: true,
    elevation: 1
  }

  const buttonProps = {
    color: 'primary',
    size: 'large',
    style: style.button
  }
  buttonProps['aria-haspopup'] = 'true'

  const iconStyle = {
    marginRight: '0.5rem',
    color: props.app.theme === 'dark' ? '#b197fc' : '#845ef7'
  }

  return (
    <div style={style.wrapper}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar disableGutters={true}>
          <Link to="/" style={style.logo}>
            <Logo />
          </Link>

          <Button
            aria-owns={docsOpen ? 'docs-popover' : undefined}
            onClick={handleDocsOpen}
            {...buttonProps}
          >
            <DocsIcon style={{ ...iconStyle }} />
            Docs
          </Button>
          <Popover
            id="docs-popover"
            open={docsOpen}
            anchorEl={docsAnchor}
            onClose={handlePopoverClose}
            {...popoverProps}
          >
            <DocsMenu app={props.app} />
          </Popover>
          <span style={style.spacer} />

          <NavbarIcons
            translate={props.app.translate}
            toggleDarkMode={props.app.toggleDarkMode}
            theme={props.app.theme}
            language={props.app.language}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}
