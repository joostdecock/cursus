import React from 'react'
import { Link } from 'gatsby'
import ComputerIcon from '@material-ui/icons/Devices'
import IntroIcon from '@material-ui/icons/LocalCafe'
import Icon from '../icons'
import CarIcon from '@material-ui/icons/DriveEta'

const links = {
  intro: ['Introductie', <IntroIcon />],
  computers: ['Computers', <ComputerIcon />],
  besturingssystemen: ['Besturingssystemen', <CarIcon />],
  windows: ['Windows', <Icon icon='windows'/>],
}

const MainMenu = ({ app, active = '', iconsOnly = false }) => (
  <ul className={iconsOnly ? 'footer-main-menu' : 'aside-main-menu'}>
    {Object.keys(links).map((link) => {
      return (
        <li key={link}>
          <Link
            to={`/${link}/`}
            className={link === app.active ? 'active' : ''}
            title={links[link][0]}
          >
            {links[link][1]}
            {!iconsOnly && <span className="text">{links[link][0]}</span>}
          </Link>
        </li>
      )
    })}
  </ul>
)

export default MainMenu
