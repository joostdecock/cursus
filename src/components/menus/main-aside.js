import React from 'react'
import { Link } from 'gatsby'
import ComputerIcon from '@material-ui/icons/Devices'

const links = {
  computers: 'Computers',
}
const icons = {
  computers: <ComputerIcon />,
}

const MainMenu = ({ app, active = '', iconsOnly = false }) => (
  <ul className={iconsOnly ? 'footer-main-menu' : 'aside-main-menu'}>
    {Object.keys(links).map((link) => {
      return (
        <li key={link}>
          <Link
            to={`/${link}/`}
            className={link === active ? 'active' : ''}
            title={links[link]}
          >
            {icons[link]}
            {!iconsOnly && <span className="text">{links[link]}</span>}
          </Link>
        </li>
      )
    })}
  </ul>
)

export default MainMenu
