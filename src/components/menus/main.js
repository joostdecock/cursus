import React from 'react'
import { Link } from 'gatsby'
import orderBy from 'lodash.orderby'

import ComputerIcon from '@material-ui/icons/Devices'
import IntroIcon from '@material-ui/icons/LocalCafe'
import Icon from '../icons'
import CarIcon from '@material-ui/icons/DriveEta'
import MediaIcon from '@material-ui/icons/Panorama'
import NetworkIcon from '@material-ui/icons/NetworkWifi'
import ReferenceIcon from '@material-ui/icons/Book'

const iStyle = { style: { maxWidth: '32px' } }
const links = {
  intro: ['Introductie', <IntroIcon {...iStyle} />],
  computers: ['Computers', <ComputerIcon {...iStyle} />],
  besturingssystemen: ['Besturingssystemen', <CarIcon {...iStyle} />],
  windows: ['Windows', <Icon icon='windows' {...iStyle}/>],
  mac: ['MacOS & Linux', <Icon icon='apple' {...iStyle}/>],
  media: ['Media', <MediaIcon {...iStyle} />],
  netwerken: ['Netwerken', <NetworkIcon {...iStyle}/>],
  referentie: ['Referentie', <ReferenceIcon {...iStyle}/>],
}

const onPath = (slug, chunks) => {
  if (!slug) return false
  let compare = slug.split('/').slice(1, -1)
  let match = true
  for (let i in compare) {
    if (compare[i] !== chunks[i]) match = false
  }

  return match
}
const getSiblings = (slug, tree, chunks, level = 1) => {
  if (level > 4) return []
  let steps = chunks.slice(0, level)
  let siblings = []
  let branch = { ...tree }
  for (let step of steps) branch = branch.offspring[step]
  if (!branch.offspring) return []
  let tmp = {}
  for (let key of Object.keys(branch.offspring)) {
    tmp[key] = {
      ...branch.offspring[key],
      key
    }
    if (typeof tmp[key].ordertitle === 'undefined')
      tmp[key].ordertitle = branch.offspring[key].order + branch.offspring[key].title
  }
  let subnav
  let ordered = orderBy(tmp, ['ordertitle'])
  for (let page of ordered) {
    if (onPath(page.slug, chunks))
      subnav = <Submenu slug={slug} chunks={chunks} tree={tree} level={level + 1} />
    else subnav = null
    siblings.push(
      <li key={page.slug}>
        <Link to={page.slug} className={slug === page.slug ? 'active' : ''}>
          {page.title}
        </Link>
        {subnav}
      </li>
    )
  }

  return siblings
}

const Submenu = ({ slug, chunks, tree, level = 1 }) => (
  <ul className={`level-${level}`}>{getSiblings(slug, tree, chunks, level)}</ul>
)

const MainMenu = ({ app, slug = '/fixme/' }) => {

  const chunks = slug.split('/').slice(1, -1)

  return (
    <>
    <ul className='aside-main-menu' id='main-menu'>
      {Object.keys(links).map(link => (
        <li key={link}>
          <Link
            to={`/${link}/`}
            className={link === chunks[0] ? 'active' : ''}
            title={links[link][0]}
          >
            {links[link][1]}
            <span className="text">{links[link][0]}</span>
          </Link>
          {(link === chunks[0]) && <Submenu slug={slug} chunks={chunks} tree={app.tree} />}
        </li>
      ))}
    </ul>
    </>
  )
}

export default MainMenu
